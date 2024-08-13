import React, { useState } from 'react';
import '../../Assets/CSS/Announcements.css';
import Navbar from './Navbar';

const Announcements = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({
    date: '',
    status: '',
    urgency: '',
    course: '',
  });

  return (
    <div className="announcements-container">
         <Navbar/>
      <h1 className="title">Announcements</h1>
      <div className="top-row">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <AnnouncementList searchTerm={searchTerm} filter={filter} />
    </div>
  );
};

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-barr">
      <input
        type="text"
        placeholder="Search Announcements"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

const Filter = ({ filter, setFilter }) => {
  const handleDateChange = (e) => {
    setFilter({ ...filter, date: e.target.value });
  };

  const handleStatusChange = (e) => {
    setFilter({ ...filter, status: e.target.value });
  };

  const handleUrgencyChange = (e) => {
    setFilter({ ...filter, urgency: e.target.value });
  };

  const handleCourseChange = (e) => {
    setFilter({ ...filter, course: e.target.value });
  };

  return (
    <div className="filter-container">
        
      <div className="date-filter">
        <select value={filter.date} onChange={handleDateChange}>
          <option value="">Select</option>
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
          <option value="fiscalYear">This Fiscal Year</option>
          <option value="custom">Custom</option>
          <option value="remove">Remove Date</option>
        </select>
      </div>
      <div className="status-filter">
        <select value={filter.status} onChange={handleStatusChange}>
          <option value="">Status</option>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
        </select>
      </div>
      <div className="urgency-filter">
        <select value={filter.urgency} onChange={handleUrgencyChange}>
          <option value="">Urgency</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="noUrgency">No Urgency</option>
        </select>
      </div>
      <div className="course-filter">
        <select value={filter.course} onChange={handleCourseChange}>
          <option value="">Course</option>
          <option value="dataAnalytics">Data Analytics</option>
          <option value="fullStack">Full-Stack (MERN)</option>
        </select>
      </div>
      <button className="clear-button" onClick={() => setFilter({ date: '', status: '', urgency: '', course: '' })}>
        Clear All
      </button>
    </div>
  );
};

const AnnouncementList = ({ searchTerm, filter }) => {
  // This should be replaced with actual data fetching and filtering logic
  const announcements = [
    {
      id: 1,
      title: "New Data Analytics Course Launch!",
      content: `
        We are excited to announce the launch of our new Data Analytics course, starting next month. 
        This comprehensive program is designed to equip you with the skills needed to excel in the field of data analytics.
        <br/>
        <h3>Upcoming Event:</h3>
        Join us for a webinar on 28th August at 07:30 P.M to learn more about the course curriculum and meet the instructors. <a href="/course">[Register here]</a>
<br/>
        <h3>Spotlight Feature:</h3>
        Meet Dr. Jane Smith, our lead instructor for the Data Analytics course. With over 15 years of experience in the industry, Dr. Smith brings a wealth of knowledge and expertise.
<br/>
       <h3> Resources:</h3>
        - [Course Syllabus]<br/>
        - [Introductory Video] <a href="https://youtu.be/37x5dKW-X5U?si=RRPkHEtDJlse3-PQ" target="_blank">[click here]</a><br/>
        - [Recommended Reading List]
<br/>
        <h3>Quote:</h3>
        "Data analytics is a game-changer in today's data-driven world. This course is designed to provide hands-on experience with the latest tools and techniques." - Dr. Jane Smith
<br/>
        <h3>Actionable Tips:</h3>
        <br/>
        - Sign up early to secure your spot.
        - Review the recommended reading list to get a head start.
        - Attend the introductory webinar to get all your questions answered.
<br/>
       <h3> FAQs:</h3>
        <br/>
        Q: What are the prerequisites for this course?<br/>
        A: Basic knowledge of statistics and programming is recommended.
<br/>
        Q: How long is the course?<br/>
        A: The course runs for 12 weeks, with weekly live sessions and assignments.

        <h3>Contact Information:</h3>
        For more details, please contact our course coordinator at support@scholar.com or 00398745514.
      `
    }
  ];
  
  return (
    
    <div className="announcement-list">
       
      {announcements.length === 0 ? (
        <p>No Record Found</p>
      ) : (
        announcements.map((announcement) => (
          <div key={announcement.id} className="announcement-item">
            <h2>{announcement.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: announcement.content }} />
          </div>
        ))
      )}
       
    </div>
   
  );
};

export default Announcements;
