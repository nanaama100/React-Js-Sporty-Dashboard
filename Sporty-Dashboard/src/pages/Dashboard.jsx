import React, { useState } from 'react';
import './Dashboard.css';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
// import FilterButton from '../components/DropdownFilter';
// import Datepicker from '../components/Datepicker';

import ImagesActivities from '../partials/dashboard/ImagesActivities';
import ProgressBarLoad from '../partials/dashboard/ProgressBarLoad';
import PersonalBests from '../partials/dashboard/PersonalBests';
import Todolist from '../partials/dashboard/Todolist';
import WeeklySchedule from '../partials/dashboard/WeeklySchedule';

import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Avatars */}
              <DashboardAvatars />
            </div>


             <div className='Top-Content'>          
            <ImagesActivities/>  
            <ProgressBarLoad/>
        </div>
        <div className='MiddleContent'>
            <PersonalBests/>
            <WeeklySchedule/>
            <Todolist/>
        </div>

        <div className="grid grid-cols-12 gap-6 BottomContent">
              {/* Card (Recent Activity) */}
              <DashboardCard12 />
              {/* Card (Income/Expenses) */}
              <DashboardCard13 />                          
        </div>

          </div>
        </main>
        <Banner />
      </div>
    </div>
  );
}

export default Dashboard;