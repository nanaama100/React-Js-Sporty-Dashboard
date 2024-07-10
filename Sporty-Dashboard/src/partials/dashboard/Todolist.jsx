import React from 'react';
import './Todolist.css';
import CountUp from 'react-countup';
import {useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
// import 'bootstrap/dist/css/bootstrap.min.css';


function Todolist() {
  const[visibility, setVisibility] = useState(false);

  return (
        <div className='TaskContainer bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700'>
          <h2 id='TasksHeady'>Task Statistics</h2>
          <div className='tasksShow task1'>
            <img id='imgTasks' src='https://img.freepik.com/premium-vector/young-man-workout-with-barbell-isolated-illustration_56102-916.jpg?w=740' alt=''/>
            <VisibilitySensor onChange={(visible)=>{setVisibility(visible)}}>
            <div>
              {visibility && <h2><CountUp end={3210} duration={2}/></h2>}
              <h5>Total Pull-Ups</h5>
            </div>
            </VisibilitySensor>
          </div>
          <div className='tasksShow task2'>
            <img id='imgTasks' src='https://img.freepik.com/premium-vector/fit-man-doing-exercise_24640-38305.jpg?w=740' alt=''/>
            <VisibilitySensor onChange={(visible)=>{setVisibility(visible)}}>
            <div>
              {visibility && <h2><CountUp end={3100} duration={2}/></h2>}
              <h5>Total Squats</h5>
            </div>
            </VisibilitySensor>
          </div>
          <div className='tasksShow task3'>
            <img id='imgTasks' src='https://img.freepik.com/free-vector/flat-design-people-doing-yoga-style_23-2148549506.jpg?t=st=1720391558~exp=1720395158~hmac=c608cccb2d4016346ea9c0dd93429836fe2a9cb2373d3538369aec94e357115d&w=740' alt=''/>
            <VisibilitySensor onChange={(visible)=>{setVisibility(visible)}}>
            <div>
              {visibility && <h2><CountUp end={2300} duration={2}/></h2>}
              <h5>Total Stretchs</h5>
            </div>
            </VisibilitySensor>
          </div>
          <div className='tasksShow task4'>
            <img id='imgTasks' src='https://img.freepik.com/premium-vector/young-man-is-running-treadmill-vector-illustration-flat-style-isolated-white_625536-749.jpg?w=740' alt=''/>
            <VisibilitySensor onChange={(visible)=>{setVisibility(visible)}}>
            <div>
              {visibility && <h2><CountUp end={1002} duration={2}/></h2>}
              <h5>Total PushUps</h5>
            </div>
            </VisibilitySensor>
          </div>
        </div>
           
  )
}

export default Todolist