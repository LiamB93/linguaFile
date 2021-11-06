import { useState } from 'react';
import { getAllLanguages } from '../services/languages';

export default function WordCreate(props) {
  const [formData, setFormData] = useState({
    term: '',
    translation: '',
    example: '',
    img_url: '',
    language_id: '',
  });
  const { term, language_id, translation, example, img_url } = formData;
  const { handleWordCreate, language } = props;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleWordCreate(formData.language_id, formData);
      }}
    >
      <h1>Create Word</h1>
      <label>
        Word:
        <input type='text' value={term} name='term' onChange={handleChange} /><br />
      </label>
      <label>
        Translation:
        <input type='text' value={translation} name='translation' onChange={handleChange} /><br />
      </label>
      Example:
      <input type='text' value={example} name='example' onChange={handleChange} /><br />
      <label>
        Image:
        <input type='text' value={img_url} name='img_url' onChange={handleChange} /><br />
      </label>

      <select
        placeholder="language"
        name="language_id"
        value={formData.language_id}
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
