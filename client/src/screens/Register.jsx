import { useState } from 'react';
import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="register-container">
      <form className="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}
      >
        <h3>Register</h3>
        <label>
          <strong>Username</strong><br />
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <strong>Email</strong><br />
          <input type='text' name='email' value={email} onChange={handleChange} />
        </label>
        <br />
        <label>
          <strong>Password</strong><br />
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}