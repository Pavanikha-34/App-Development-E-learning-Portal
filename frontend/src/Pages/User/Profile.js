import React, { useState } from 'react';
import '../../Assets/CSS/Profile.css'
import i1 from '../../Assets/images/a1.png'; // Ensure the path is correct
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    studentName: 'PAVANIKHA S N',
    username: 'PAVANIKHA_09',
    dateOfBirth: '2005-02-09',
    gender: '',
    religion: '',
    email: 'snpavanikhasankar@gmail.com',
    phone: '+91 9442365358',
    address: 'No address has been set'
  });
  const [message, setMessage] = useState('');

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setMessage('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setMessage('Edited successfully');
  };

  return (
    <div className="profile-page">
      <aside className="sidebar">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/announce">Announcements</Link></li>
          
          <li><Link to="/forum">Discussion Forum</Link></li>
          <li><Link to="/assign">Assignment</Link></li>
          
          <li><Link to="/set">Settings</Link></li>
        </ul>
      </aside>
      <main className="profile-content">
        <h1>My Profile</h1>
        <div className="profile-row">
          <div className="profile-card">
            <div className="personal-info">
              <div className="profile-picture">
                <img src={i1} alt="Profile" />
              </div>
              <div className="profile-details">
                <p  className="name">{profileData.studentName}</p><hr/>
                <p className="email">{profileData.email}</p><hr/>
                <p className="dob">{new Date(profileData.dateOfBirth).toLocaleDateString()}</p><hr/>
                <p className="phone">{profileData.phone}</p><hr/>
                <p className="address">{profileData.address}</p><hr/>
              </div>
            </div>
          </div>
          <div className="profile-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Student Name</label>
                <input
                  type="text"
                  name="studentName"
                  value={profileData.studentName}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={profileData.username}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={profileData.dateOfBirth}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              
              
              <div className="form-group">
                <label>Gender</label>
                <select
                  name="gender"
                  value={profileData.religion}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
                  <option value="">Select Gender</option>
                  <option value="religion1">Male</option>
                  <option value="religion2">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={profileData.address}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              {isEditing && <button type="submit">Save</button>}
            </form>
            <button onClick={handleEditClick}>
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
            {message && <p className="message">{message}</p>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
