import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/CSS/Data.css';
import i2 from '../../Assets/images/c2.png';
import i1 from '../../Assets/images/d1.png';
import i from '../../Assets/images/d2.png';
import o from '../../Assets/images/o1.png';
import o2 from '../../Assets/images/o2.png';
import o3 from '../../Assets/images/o3.png';
import o4 from '../../Assets/images/o4.png';

const Data = () => {
  return (
    <div className="course-page">
       
      <div className="course-banner">
        <div className="course-details">
          <h1>Data Analytics</h1>
          <p>Course Instructor <i>Scholar.com</i></p>
          <p className="course-price">
            ₹4999.00 <span className="original-price">₹9999.00</span> <span className="discount">50% OFF</span>
          </p>
         <Link to="/pay"> <button className="buy-now">Buy now</button></Link>
        </div>
        <img src={i2} alt="Data Analytics" className="course-image" />
      </div>
      <div className="what-we-offer">
        <h2>What we offer?</h2>
        <div className="offerings">
          <div className="offering">
            <img src={o} alt="Live Learning" />
            <div>
              <h3>4-Week Live & Online Learning</h3>
              <p>Interactive Live Sessions with Industry Experts in the field to help you scale up in-demand skills.</p>
            </div>
          </div>
          <div className="offering">
            <img src={o2} alt="Placement Assistance" />
            <div>
              <h3>Placement Assistance & CV Optimization</h3>
              <p>Assisting to make you the best fit in the industry and make you Job Ready with Resume & LinkedIn Optimization.</p>
            </div>
          </div>
          <div className="offering">
            <img src={o3} alt="Mentor Assistance" />
            <div>
              <h3>1:1 Mentor Assistance</h3>
              <p>Learn from the expertise guidance LIVE throughout for Lifetime.</p>
            </div>
          </div>
          <div className="offering">
            <img src={o4} alt="Freelancing Support" />
            <div>
              <h3>Freelancing Support</h3>
              <p>Get into freelancing opportunities.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        
        <img src={i} alt="tu"></img>
      </div>
      <div className="program-overview">
        <h2>Program Overview</h2>
        <img src={i1} alt="tu"></img>
    
      </div>

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

export default Data;
