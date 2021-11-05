import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
      <h3>{language?.name}</h3>
      {language?.words.map((word) => (
        <p key={word.id}>{word.term}</p>
      ))}
    </div>
  )
}
