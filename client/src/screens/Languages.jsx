import { Link } from "react-router-dom";
import './Languages.css'

export default function Languages(props) {
  const { languages, words } = props;

  return (
    <div>

      <h3>Languages</h3>
      {languages.map((language) => (
        <Link to={`/languages/${language.id}`}>
          <p key={language.id}>{language.name}</p>
        </Link>
      ))}


    </div>
  );
}