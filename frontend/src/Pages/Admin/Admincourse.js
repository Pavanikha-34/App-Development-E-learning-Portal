// src/pages/Courses.js
import React, { useState } from 'react';
import '../../Assets/CSS/Admincourse.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const initialCourses = [
  { id: 1, title: 'UI/UX design', instructor: 'Priyanka chopra', content: 'Introduction to UI/UX design' },
  { id: 2, title: 'Frontend Development', instructor: 'Deepika', content: 'Javascript' },
];

const initialInstructors = ['Priyanka Chopra', 'John Doe', 'Alice Johnson'];

const Admincourses = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [instructors] = useState(initialInstructors);
  const [formData, setFormData] = useState({ title: '', instructor: '', content: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingCourseId, setEditingCourseId] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      navigate('/adminlogin');
    }
  }, [navigate]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setCourses(courses.map(course => (course.id === editingCourseId ? { ...course, ...formData } : course)));
      setIsEditing(false);
      setEditingCourseId(null);
    } else {
      setCourses([...courses, { ...formData, id: courses.length + 1 }]);
    }
    setFormData({ title: '', instructor: '', content: '' });
  };

  const handleEdit = (course) => {
    setFormData(course);
    setIsEditing(true);
    setEditingCourseId(course.id);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="courses-container">
      <h2>Course Management</h2>
      <form className="course-form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Course Title" value={formData.title} onChange={handleChange} required />
        <select name="instructor" value={formData.instructor} onChange={handleChange} required>
          <option value="">Select Instructor</option>
          {instructors.map((instructor, index) => (
            <option key={index} value={instructor}>{instructor}</option>
          ))}
        </select>
        <input type="text" name="content" placeholder="Course Content" value={formData.content} onChange={handleChange} required />
        <button type="submit">{isEditing ? 'Update' : 'Add'} Course</button>
      </form>
      <table className="courses-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Instructor</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.instructor}</td>
              <td>{course.content}</td>
              <td>
                <button onClick={() => handleEdit(course)}>Edit</button>
                <button onClick={() => handleDelete(course.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admincourses;
