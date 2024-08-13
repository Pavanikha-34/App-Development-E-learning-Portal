// src/pages/Analytics.js
import React from 'react';
import '../../Assets/CSS/Analytics.css';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const userActivityData = [
  { name: 'Jan', activeUsers: 400, completedCourses: 240 },
  { name: 'Feb', activeUsers: 300, completedCourses: 139 },
  { name: 'Mar', activeUsers: 200, completedCourses: 980 },
  { name: 'Apr', activeUsers: 278, completedCourses: 390 },
  { name: 'May', activeUsers: 189, completedCourses: 480 },
  { name: 'Jun', activeUsers: 239, completedCourses: 380 },
  { name: 'Jul', activeUsers: 349, completedCourses: 430 },
];

const performanceData = [
  { name: 'Finance', averageScore: 85 },
  { name: 'UI/UX design', averageScore: 90 },
  { name: 'React', averageScore: 78 },
  { name: 'Javascript', averageScore: 88 },
];
 
const usageStatisticsData = [
  { name: 'Morning', users: 400 },
  { name: 'Afternoon', users: 300 },
  { name: 'Evening', users: 200 },
  { name: 'Night', users: 100 },
];

const COLORS = ['#45a049', '#00C49F', '#FFBB28', '#FF8042'];

const Analytics = () => {
  return (
    <div className="analytics-container">
      <h2>Analytics and Reports</h2>
      <div className="chart-container">
        <h3>User Activity</h3>
        <LineChart
          width={500}
          height={300}
          data={userActivityData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="activeUsers" stroke="#8884d8" />
          <Line type="monotone" dataKey="completedCourses" stroke="#45a049" />
        </LineChart>
      </div>
      <div className="chart-container">
        <h3>Performance Reports</h3>
        <BarChart
          width={500}
          height={300}
          data={performanceData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="averageScore" fill="#45a049" />
        </BarChart>
      </div>
      <div className="chart-container">
        <h3>Usage Statistics</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={usageStatisticsData}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="users"
          >
            {usageStatisticsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Analytics;
