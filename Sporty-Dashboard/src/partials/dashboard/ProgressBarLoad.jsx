import React from 'react';
import {useState, useEffect} from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressBarLoad.css';


function ProgressBarLoad() {

    // animating and seting update for the progressbars
    const[percentage1, setPercentage1] = useState(0)
    const[percentage2, setPercentage2] = useState(0)
    const[percentage3, setPercentage3] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            if(percentage1 <40 ){
                setPercentage1(percentage1+1)
            }
            if(percentage2 <65){
                setPercentage2(percentage2+1)
            }
            if(percentage3 <90){    
                setPercentage3(percentage3+1)
            }
        }, 50)      
    });

  return (
    <div  className='ProgressBar bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700'>
        <h2 id='CaloriesHead'>Active Calories</h2> 
        <div className='AnimatedProgressBar1'>
            <h4 id='TimeCalories'>Today</h4>
                <CircularProgressbar className='Loader'
                    value={percentage1}
                    text= {`${percentage1}%`}                   
                styles={buildStyles({
                        textSize: 30,
                        textColor:'grey'
                        })}
                />
            <h5 id='CaloryText'>Calories:<strong>400</strong></h5>   
        </div>
        <div className='AnimatedProgressBar2'>
            <h4 id='TimeCalories'>This Week</h4>
                <CircularProgressbar className='Loader'
                    value={percentage2}
                    text= {`${percentage2}%`}                    
                    styles={buildStyles({  
                        textSize: 30,
                        textColor:'grey'
                       })} 
                /> 
            <h5 id='CaloryText'>Calories:<strong>650</strong></h5>   
        </div>
        <div className='AnimatedProgressBar3'>
        <h4 id='TimeCalories'>This Month</h4>
            <CircularProgressbar className='Loader'
                value={percentage3}
                text= {`${percentage3}%`}                  
                styles={buildStyles({ 
                    textSize: 30,
                    textColor:'grey'
                    })}
            />
        <h5 id='CaloryText'>Calories:<strong>850</strong></h5>   
        </div>
    </div> 
  )
}

export default ProgressBarLoad