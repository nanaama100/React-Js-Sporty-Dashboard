import React, {useEffect} from 'react';
import './PersonalBests.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


function PersonalBests() {

     // initializing the animate on scroll(aos)
     useEffect(()=>{
      Aos.init();
    },[]) 

  return (
    <div className='personal-bests-container bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700'>
        <h2 id='PersonalBests-Head'>Personal Bests</h2>
        <div className="best-item box-one">
            <p>Fastest 5K Run: <br/>22min</p>
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/242bbd8c-aaf8-4aee-a3e4-e0df62d1ab27" alt="" />
        </div>
        <div className="best-item box-two">
            <p>Longest Distance Cycling:4 miles</p>
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a3b3cb3a-5127-498b-91cc-a1d39499164a" alt="" />
        </div>
        <div className="best-item box-three">
            <p>Longest Roller-Skating:<br/> 2 hours</p>
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e0ee8ffb-faa8-462a-b44d-0a18c1d9604c" alt="" />
        </div>
    </div>
  )
}

export default PersonalBests


// data-aos="flip-up"