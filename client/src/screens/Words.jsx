import { Link } from 'react-router-dom';

export default function Words(props) {
  const { words, handleWordDelete } = props;
  return (
    <div>
      <h3>Words</h3>
      {words.map((word) => (
        <div key={word.id}>
          <Link to={`/words/${word.id}`}>
            <p>{word.term}</p>
          </Link>
          <Link to={`/words/${word.id}/edit`}>
            <button>edit</button>
          </Link>
          <button onClick={() => handleWordDelete(word.id)}>delete</button>
        </div>
      ))}
      <Link to='/words/new'>
        <button>create</button>
      </Link>
    </div>
  );
}