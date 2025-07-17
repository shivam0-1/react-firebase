import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        fontFamily: 'sans-serif',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '30%',
          backgroundColor: '#1e3a8a', // dark royal blue
          color: 'white',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start', // fixed for top alignment
          boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
          gap: '1rem', // adds space between links
        }}
      >
        <Link to="/dashboard/addStudent" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
          Add Student
        </Link>
        <Link to="/dashboard/studentList" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
          Student List
        </Link>
        <Link to="/dashboard/addFaculty" style={{color:'white', fontWeight:'bold', textDecoration:'none'}}>Add Faculty</Link>
        <Link to="/dashboard/FacultyList" style={{color:'white', fontWeight: 'bold', textDecoration:'none'}}>Faculty List</Link>
        
      </div>

      <div
        style={{
          flex: 1, // let it take remaining width
        //   backgroundColor: '#f9fafb',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflowY: 'auto', // for scrolling long content
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
