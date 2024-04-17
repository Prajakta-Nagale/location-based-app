import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Perform authentication logic (check credentials)
    const dummyUsername = 'user';
    const dummyPassword = 'password';

    if (username === dummyUsername && password === dummyPassword) {
      // Authentication successful, redirect to map screen
      localStorage.setItem('isLoggedIn', true);
      history.push('/map');
    } else {
      // Authentication failed
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
