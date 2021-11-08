import { useState } from 'react';
import { getAllLanguages } from '../services/languages';
import './WordCreate.css'

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
    <div className="create-container">
      <form className="create-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleWordCreate(formData.language_id, formData);
        }}
      >
        <h1>Create Word</h1>
        <label>
          <strong>Word</strong><br />
          <input type='text' value={term} name='term' onChange={handleChange} />
        </label>
        <label>
          <strong>Translation</strong><br />
          <input type='text' value={translation} name='translation' onChange={handleChange} />
        </label>
        <label>
          <strong>Example</strong><br />
          <input type='text' value={example} name='example' onChange={handleChange} />
        </label>
        <label>
          <strong>Image</strong><br />
          <input type='text' value={img_url} name='img_url' onChange={handleChange} />
        </label>
        <br />
        <select
          placeholder="language"
          name='language_id'
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
    </div >
  );
}
