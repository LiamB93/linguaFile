import { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"

import { deleteWord, getAllWords, postWord, putWord } from '../services/words';
import { getAllLanguages } from "../services/languages";
import WordCreate from "../screens/WordCreate";
import Words from "../screens/Words"
import Languages from "../screens/Languages";
import LanguageDetails from "../screens/LanguageDetails";
import WordEdit from "../screens/WordEdit";


export default function MainContainer() {
  const [words, setWords] = useState([]);
  const [languages, setLanguages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchWords = async () => {
      const wordList = await getAllWords();
      setWords(wordList);
    };
    fetchWords();
  }, []);

  useEffect(() => {
    const fetchLanguages = async () => {
      const languageList = await getAllLanguages();
      setLanguages(languageList);
    };
    fetchLanguages();
  }, []);

  const handleWordCreate = async (id, formData) => {
    const newWord = await postWord(id, formData);
    setWords((prevState) => [...prevState, newWord]);
    history.push(`/languages/${formData.language_id}`);
  };
  const handleWordDelete = async (id) => {
    await deleteWord(id);
    setWords((prevState) => prevState.filter((word) => word.id !== id));
  };

  const handleWordUpdate = async (id, formData) => {
    const newWord = await putWord(id, formData);

    setWords((prevState) =>
      prevState.map((word) => {
        return word.id === Number(id) ? newWord : word;
      })
    );
    history.push(`/languages/${formData.language_id}`);
  };


  return (
    <Switch>
      <Route path='/languages/edit-word/:id'>
        <WordEdit languages={languages} handleWordUpdate={handleWordUpdate} words={words} />
      </Route>
      <Route path='/languages/new-word'>
        <WordCreate handleWordCreate={handleWordCreate} languages={languages} />
      </Route>
      <Route path='/languages/:id'>
        <LanguageDetails languages={languages} />
      </Route>

      <Route path='/words'>
        <Words words={words} handleWordDelete={handleWordDelete} />
      </Route>
      <Route path='/languages'>
        <Languages languages={languages} />
      </Route>
    </Switch>
  )
}
