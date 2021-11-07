import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function WordEdit(props) {
  const [formData, setFormData] = useState({
    term: '',
    example: '',
    translation: '',
    img_url: '',
    language_id: '',

  });
  const { term, example, translation, img_url, language_id } = formData;
  const { id } = useParams();
  const { words, handleWordUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const wordItem = words.find(word => word.id === Number(id))
      setFormData({
        term: wordItem?.term,
        example: wordItem?.example,
        translation: wordItem?.translation,
        img_url: wordItem?.img_url,
        language_id: wordItem?.language_id,
      })
    };
    if (words.length) {
      prefillFormData();
    }
  }, [words, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleWordUpdate(formData.language_id, id, formData);
      }}
    >
      <h1>Edit Word</h1>
      <label>
        Name:
        <input type='text' name='term' value={term} onChange={handleChange} /><br />
      </label>
      <label>
        Translation:
        <input type='text' name='translation' value={translation} onChange={handleChange} /><br />
      </label>
      <label>
        Example:
        <input type='text' name='example' value={example} onChange={handleChange} /><br />
      </label>
      <label>
        Image:
        <input type='text' name='img_url' value={img_url} onChange={handleChange} /><br />
      </label>
      <select
        placeholder="language"
        name='language_id'
        value={language_id}
        required
        onChange={handleChange}
      >
        <option value=''>Language</option>
        <option value='1'>Spanish</option>
        <option value='2'>Italian</option>
        <option value='3'>Portuguese</option>
      </select>


      <br />
      <button>Submit</button>
    </form>
  );
}