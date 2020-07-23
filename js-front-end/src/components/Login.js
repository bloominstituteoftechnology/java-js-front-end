import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
 const [credentials, setCredentials] = useState({username: '', password: ''});

  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:2019/login', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {
      headers: {
        // btoa is converting our client id/client secret into base64
        Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.access_token);
      props.history.push('/');
    })
  }

  const handleChange = e => setCredentials({
    ...credentials,
    [e.target.name]: e.target.value
    })

    return (
      <form onSubmit={login}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <button>Log in</button>
      </form>
    )
};

export default Login;