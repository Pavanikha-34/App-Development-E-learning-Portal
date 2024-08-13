import React, { useState } from 'react';
import '../../Assets/CSS/Course.css';
import i1 from '../../Assets/images/c1.png';
import i2 from '../../Assets/images/c2.png';
import i3 from '../../Assets/images/c3.png';
import i4 from '../../Assets/images/c4.png';
import i5 from '../../Assets/images/c5.png';
import i6 from '../../Assets/images/c6.png';
import i7 from '../../Assets/images/c7.png';
import i8 from '../../Assets/images/c8.png';
import Navbar from './Navbar';
import Home from './Home';
const Course = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      title: "Full-Stack (MERN) App/Web Development",
      provider: 'Scholar.com',
      price: '₹6999',
      originalPrice: '₹29999',
      discount: '77% OFF',
      imgSrc: i1,
      link: '#',
    },
    {
      title: "Data Analytics",
      provider: 'Scholar.com',
      price: '₹6999',
      originalPrice: '₹29999',
      discount: '77% OFF',
      imgSrc: i2,
      link: "/data",
    },
    {
      title: 'UI/UX Design',
      provider: 'Brandit Designs',
      price: '₹4999',
      originalPrice: '₹9999',
      discount: '50% OFF',
      imgSrc: i4,
      link: '#',
    },
    {
      title: 'Scholar Skill Development Workshop',
      provider: 'Brandit Designs',
      price: '₹4999',
      originalPrice: '₹9999',
      discount: '50% OFF',
      imgSrc: i6,
      link: '#',
    },
    {
      title: 'Entrepreneurship',
      provider: 'Brandit Designs',
      price: '₹4999',
      originalPrice: '₹9999',
      discount: '50% OFF',
      imgSrc: i3,
      link: '#',
    },
    {
      title: 'Digital Marketing',
      provider: 'Brandit Designs',
      price: '₹4999',
      originalPrice: '₹9999',
      discount: '50% OFF',
      imgSrc: i5,
      link: '#',
    },
    {
      title: 'LinkedIn Optimization',
      provider: 'Brandit Designs',
      price: '₹4999',
      originalPrice: '₹9999',
      discount: '50% OFF',
      imgSrc: i7,
      link: '#',
    },
    {
      title: 'Finance',
      provider: 'Brandit Designs',
      price: '₹4999',
      originalPrice: '₹9999',
      discount: '50% OFF',
      imgSrc: i8,
      link: "/home",
    },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="scholar">
      <Navbar/>
      <header>
        <h1>Explore Courses</h1>
        <p>Authentic and high quality courses, specially curated by experienced teachers for deep study.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for courses"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button>Search</button>
        </div>
      </header>
      <main>
        <aside className="filters">
          <h2></h2>
          <div className="filter"></div>
        </aside>
        <section className="programs">
  {filteredCourses.map((course, index) => (
    <div className="program" key={index}>
      <a href={course.link} target="_blank" rel="noopener noreferrer">
        <img src={course.imgSrc} alt={course.title} />
        <h3>{course.title}</h3>
        <p>{course.provider}</p>
        <p>{course.price} <span>{course.originalPrice}</span> <span>{course.discount}</span></p>
      </a>
    </div>
  ))}
</section>

      </main>
    </div>
  );
};

export default Course;
