import { useState } from 'react';

export default function WordCreate(props) {
  const [formData, setFormData] = useState({
    term: '',
    language_id: '',
  });
  const { term } = formData;
  const { handleWordCreate } = props;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
        <input type='text' value={term} name='term' onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
