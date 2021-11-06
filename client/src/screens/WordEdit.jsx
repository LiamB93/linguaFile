import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function WordEdit(props) {
  const [formData, setFormData] = useState({
    term: '',
  });
  const { term } = formData;
  const { id } = useParams();
  const { words, handleWordUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const wordItem = words.find(word => word.id === Number(id))
      setFormData({
        name: wordItem.name
      })
    };
    if (term.length) {
      prefillFormData();
    }
  }, [words, id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      name: value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleWordUpdate(id, formData);
      }}
    >
      <h1>Edit Word</h1>
      <label>
        Name:
        <input type='text' name="term" value={term} onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}