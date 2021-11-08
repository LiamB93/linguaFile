import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneLanguage } from '../services/languages';
import './LanguageDetails.css'

export default function LanguageDetails(props) {
  const [language, setLanguage] = useState(null);
  const { id } = useParams();
  const { languages, words, handleWordDelete } = props

  useEffect(() => {
    const fetchSingleLanguage = async () => {
      const languageData = await getOneLanguage(id);
      setLanguage(languageData);
    };
    fetchSingleLanguage();
  }, [id]);


  return (
    <div className="words">
      <h1>{language?.name}</h1>
      {language?.words.map((word) => (
        <div className="word-container">
          <h2 key={word.id}>{word.term}</h2>
          <p>{word.example}</p>
          <img src={word.img_url} />
          <Link to={`/languages/edit-word/${word.id}`}>
            <button>Edit Word</button>
          </Link>
          <button className="delete" onClick={() => handleWordDelete(word.id)}>Delete Word</button>
        </div>
      ))}
      <Link to='/languages/new-word'>
        <button>Add New Word</button>
      </Link>

    </div>
  )
}
