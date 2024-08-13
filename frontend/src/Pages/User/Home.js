import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';  
 import '../../Assets/CSS/Home.css';
import img1 from '../../Assets/images/p1.png';
import visionImage from '../../Assets/images/vision.png';
import img2 from '../../Assets/images/p2.png';
import img3 from '../../Assets/images/p3.png';
import Navbar from './Navbar';
 

const Home = () => {
  // State for courses
  const [courses] = useState([
    { id: 1, title: 'React for Beginners', description: 'Learn the basics of React.' },
    { id: 2, title: 'Advanced React', description: 'Deep dive into React.' },
    { id: 3, title: 'JavaScript Essentials', description: 'Master JavaScript fundamentals.' },
    // Add more courses as needed
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter courses based on search query
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Settings for the react-slick slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true
  };

  return (
    <div className="homepage">
      <Navbar />
      
      {/* Header with Search Bar */}
      <header className="header">
        <h1>Welcome to Our Educational Platform</h1>
        <p>Find the best courses and kickstart your learning journey</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for courses..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="button">Search</button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section className="intro">
          <div className="content">
            <h1>We shape the country's economy by <span>Enabling You</span> to build your future.</h1>
            <p>Career shaping program to kickstart your field of interest.</p>
            <Link to="/course"><button className="get-started-btn">Get Started</button></Link>
          </div>
          <div className="slider-container">
            <Slider {...sliderSettings}>
              <div>
                <img src={img1} alt="Slide 1" />
              </div>
              <div>
                <img src={img3} alt="Slide 2" />
              </div>
              <div>
                <img src={img2} alt="Slide 3" />
              </div>
            </Slider>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section">
          <div className="vision-image">
            <img src={visionImage} alt="Vision Illustration" />
          </div>
          <div className="vision-content">
            <h2>Our Vision</h2>
            <p>To make learning easier, more efficient, affordable, and accessible to every human being by converting their vision into reality.</p>
          </div>
        </section>

        {/* Explore Courses Section */}
        <section className="courses">
          <h2>Explore Our Courses</h2>
          <div className="course-list">
            {filteredCourses.map(course => (
              <div key={course.id} className="course-item">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button>Learn More</button>
              </div>
            ))}
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="get-in-touch">
          <h2>Get in Touch</h2>
          <p>We love to hear from you. Our young team is always here to chat. </p>
          <div className="contact-details">
            <div className="contact-item">
              <a href="https://www.gmail.com"><i className="fas fa-envelope"></i></a>
              <h3>Connect with us</h3>
              <p>Our friendly team is here to help.</p>
              <p>support@scholar.com</p>
            </div>
            <div className="contact-item">
              <a href="https://www.facebook.com"><i className="fas fa-map-marker-alt"></i></a>
              <h3>Office</h3>
              <p>Our friendly team is here to help.</p>
              <p>123 Street, City, Country</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <h3>Phone</h3>
              <p>Mon - Sat from 11 am to 8:30 pm</p>
              <p>0123 456 7890</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} scholar.com </p>
        <ul className="footer-links">
          <li><Link to="/course">All programs</Link></li>
          <li><Link to="/terms">Terms of Service </Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Refund Policy</Link></li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;