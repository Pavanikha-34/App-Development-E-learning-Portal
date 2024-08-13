import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Pages/User/Register';
import Login from './Pages/User/Login';
import Home from './Pages/User/Home';
import Course from './Pages/User/Course';
import Contact from './Pages/User/Contact';
import Profile from './Pages/User/Profile';
import Dashboard from './Pages/User/Dashboard';
import Announcements   from './Pages/User/Announcements';
import Data from './Pages/User/Data';
import Adminlogin from './Pages/Admin/Adminlogin';
import Admindashboard from './Pages/Admin/Admindashboard';
import Adminprofile from './Pages/Admin/Adminprofile';
import Users from './Pages/Admin/Users';
import Admincourse from './Pages/Admin/Admincourse';
import Analytics  from './Pages/Admin/Analytics';
import Settings from './Pages/Admin/Settings';
import Forum from './Pages/User/Forum';
import Assignment from './Pages/Admin/Assignment';
import Assign from './Pages/Admin/Assign';
import Usersettings from './Pages/User/usersettings';
import Payment from './Pages/User/Payment';

 
 

function App() {
  return (
    <div className="App">
     
      <Router>
      
        <Routes>
        <Route path="/course" element={<Course/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path='/home' element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/announce" element={<Announcements/>}/>
          <Route path="/data" element={<Data/>}/>
          <Route path="/adminlogin" element={<Adminlogin/>}/>
          <Route path="/admin" element={<Admindashboard/>}/>
          <Route path="/adminprofile" element={<Adminprofile/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/courses" element={<Admincourse/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path="/forum" element={<Forum/>}/>
          <Route path="/assign" element={<Assignment/>}/>
          <Route path='/as' element={<Assign/>}/>
          <Route path="/set" element={<Usersettings/>}/>
          <Route path="/pay" element={<Payment/>}/>
           

             </Routes>
    </Router>
     
    </div>
  );
}

export default App;
