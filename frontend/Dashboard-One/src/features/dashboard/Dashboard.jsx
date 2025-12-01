import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';

const Dashboard = () => {
  return (
    <div >
      <Header />
      <div >
        <Sidebar />
        <main >
          <h2>Dashboard Overview</h2>
          <Outlet /> 
          <div >
            <h3 className="text-2xl font-bold">Analytics Widget</h3>
            <p>Today's Sales: $1,200</p>
          </div>
        </main>
      </div>
    </div>
  );
};


export default Dashboard;