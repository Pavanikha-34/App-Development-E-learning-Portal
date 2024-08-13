import React, { useState } from 'react';
import '../../Assets/CSS/Adminlogin.css';
import c from '../../Assets/images/v.mp4';

const Adminlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Define the valid credentials
  const validEmail = 'admin@example.com';
  const validPassword = 'admin123';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === '' || password === '') {
      setError('Both fields are required');
    } else if (email === validEmail && password === validPassword) {
      // Store only the login state
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = "/adminprofile";
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="loginn-page">
      <video autoPlay loop muted className="background-video">
        <source src={c} type="video/mp4" />
      </video>
      <div className="loginn-container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
