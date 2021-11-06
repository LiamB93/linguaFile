import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneLanguage } from '../services/languages';

export default function LanguageDetails(props) {
  const [language, setLanguage] = useState(null);
  const { id } = useParams();
  const { languages } = props

  useEffect(() => {
    const fetchSingleLanguage = async () => {
      const languageData = await getOneLanguage(id);
      setLanguage(languageData);
    };
    fetchSingleLanguage();
  }, [id]);


  return (
    <div>
      <h1>{language?.name}</h1>
      {language?.words.map((word) => (
        <div className="word-container">
          <h2 key={word.id}>{word.term}</h2>
          <p>{word.example}</p>
          <img src={word.img_url} />
          <Link to={`/languages/edit-word/${word.id}`}>
            <button>Edit Word</button>
          </Link>
        </div>
      ))}
      <Link to='/languages/new-word'>
        <button>create</button>
      </Link>
    </div>
  )
}
