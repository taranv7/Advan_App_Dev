import React, { useState } from 'react';
import '../assets/CSS/Login.css'
import { useNavigate } from 'react-router-dom';
// import bg from '../Images/bg.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) {
      setError('Please enter your username');
    } else if (!password.trim()) {
      setError('Please enter your password');
    }else if (!username.includes('@')) {
      setError('Please enter a valid email address');
    } 
    else {
      // Here you can implement your authentication logic
      if (username === 'example@gmail.com' && password === 'pass') {
        // Successful login
        console.log('Login successful');
        setError('');
        navigate('/home');
      }
       else {
        // Failed login
        setError('Invalid username or password');
      }
    }
  };

  return (
    

 
    <div className="containers">
      
      <h2>Login</h2>
      <div className="form-group">
        <label>Username:</label>
      
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group password">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
      </div>
      <div className="button-container">
        <button onClick={handleLogin}>Login</button>
      </div>
      {error && <p className="error">{error}</p>}
      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
      <p className="signup-link">
         <a href="/signup">Forgot Password?</a>
      </p>
    </div>
   
  );
};

export default Login;
