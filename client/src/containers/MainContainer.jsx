import { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"

import { deleteWord, getAllWords, postWord, putWord } from '../services/words';
import Words from "../screens/Words"


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
  return (
    <Switch>
      <Route path='/words'>
        <Words words={words} />
      </Route>
    </Switch>
  )
}
