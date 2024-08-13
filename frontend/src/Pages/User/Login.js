import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../Assets/CSS/style.css';
import axios from "axios";
import v from '../../Assets/images/v1.mp4';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [incorrectErr, setIncorrectErr] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.password) formErrors.password = 'Password is required';

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIncorrectErr(false);
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:8080/users/authenticate", formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.status === 200) {
          const { token } = response.data;
          // Store the token in session storage and set expiration
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('tokenExpiration', Date.now() + 86400000); // 1 day expiration
          console.log('Login successful:', response.data);
          navigate('/home'); // Redirect to home page
        } else {
          setIncorrectErr(true);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setIncorrectErr(true);
        } else {
          alert('An error occurred during login: ' + (error.response?.data?.message || 'Unknown error'));
        }
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="video-background">
      <video autoPlay muted loop id="background-video">
        <source src={v} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="center-container">
        <div className="form-container">
          <h2>Login</h2>
          {incorrectErr && <small style={{ color: 'red', textAlign: 'center' }}>Invalid email or password</small>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span>{errors.password}</span>}
            </div>
            <label className="checkbox-container">
              <input 
                type="checkbox" 
                checked={showPassword} 
                onChange={() => setShowPassword(!showPassword)} 
              />
              <span className="checkmark"></span>
              Show Password
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? 
            <Link to="/">Register</Link>
          </p><br/>
          <p>Are you Admin?<Link to="/adminlogin">Login Here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
