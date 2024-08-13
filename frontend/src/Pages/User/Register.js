import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import '../../Assets/CSS/style.css';  // Ensure your CSS file path is correct
import v from '../../Assets/images/v1.mp4';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (formData.name.trim().length === 0) formErrors.name = 'Username is required';
    if (formData.email.trim().length === 0) {
      formErrors.email = 'Email is required';
    } else if (!formData.email.includes('@') || !formData.email.includes('.') || !formData.email.includes('com')) {
      formErrors.email = 'Please enter a valid email address';
    }
    if (formData.password.length < 8) {
      formErrors.password = 'Password must be at least 8 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }
    if (formData.phone.length !== 10) {
      formErrors.phone = 'Phone number must be 10 digits';
    }

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const user = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      };
  
      try {
        const response = await axios.post("http://localhost:8080/users/add", user, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log("API response:", response.data);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/login');  // Redirect to login page
      } catch (error) {
        console.error("Error response:", error);
        if (error.response) {
          if (error.response.status === 400) {
            setErrors({ api: error.response.data.message || 'Invalid input data.' });
          } else if (error.response.status === 403) {
            setErrors({ api: 'Forbidden (403). Check server permissions and authentication.' });
          } else if (error.response.status === 409) {
            setErrors({ api: 'Username or email already taken.' });
          } else {
            setErrors({ api: 'An unexpected error occurred.' });
          }
        } else {
          setErrors({ api: 'Network error. Please try again later.' });
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
          <h2>Register</h2>
          {errors.api && <p className="errP">{errors.api}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>
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
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span>{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  checked={showPassword} 
                  onChange={() => setShowPassword(!showPassword)} 
                />
                <span className="checkmark"></span>
                Show Password
              </label>
            </div>
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? 
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
