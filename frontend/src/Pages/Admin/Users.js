// src/pages/Users.js
import React, { useState } from 'react';
import '../../Assets/CSS/Users.css';
const initialUsers = [
  { id: 1, name: 'John Doe', role: 'Student', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', role: 'Teacher', email: 'jane@example.com' },
  { id: 3, name: 'Admin User', role: 'Admin', email: 'admin@example.com' },
];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [formData, setFormData] = useState({ name: '', role: 'Student', email: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setUsers(users.map(user => (user.id === editingUserId ? { ...user, ...formData } : user)));
      setIsEditing(false);
      setEditingUserId(null);
    } else {
      setUsers([...users, { ...formData, id: users.length + 1 }]);
    }
    setFormData({ name: '', role: 'Student', email: '' });
  };

  const handleEdit = (user) => {
    setFormData(user);
    setIsEditing(true);
    setEditingUserId(user.id);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="users-container">
      <h2>User Management</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit">{isEditing ? 'Update' : 'Add'} User</button>
      </form>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
