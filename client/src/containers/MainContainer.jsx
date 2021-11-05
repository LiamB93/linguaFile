import { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"

import { deleteWord, getAllWords, postWord, putWord } from '../services/words';
import { getAllLanguages } from "../services/languages";
import Words from "../screens/Words"
import Languages from "../screens/Languages";
import LanguageDetails from "../screens/LanguageDetails";


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

  return (
    <Switch>
      <Route path='/languages/:id'>
        <LanguageDetails languages={languages} />
      </Route>
      <Route path='/words'>
        <Words words={words} />
      </Route>
      <Route path='/languages'>
        <Languages languages={languages} />
      </Route>
    </Switch>
  )
}
