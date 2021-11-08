import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'


function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="form-container">
      <form className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <h3><strong>Login</strong></h3>
        <label><strong>
          Username</strong><br />
          <input className="input"
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label><strong>
          Password</strong><br />
          <input className="input"
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Login</button>
        <strong><p>Not a user? <Link to='/register'>Register</Link> here</p></strong>
      </form>
    </div>
  );
}

export default Login;
