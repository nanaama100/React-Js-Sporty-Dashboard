import React from 'react';
import './WeeklySchedule.css';



function WeeklySchedule() {
  return (
    
    <div className='weekly-schedule bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700'>
        <h1>Weekly Schedule</h1>
        {/* <div class="calendar"> */}
            <div class="day-and-activity activity-one">
                <div class="day">
                    <h1>13</h1>
                    <p>mon</p>
                </div>
                <div class="activity">
                    <h2>Swimming</h2>
                    <div class="participants">
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf"
                            style={{'--i': 1}} alt="" />
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/90affa88-8da0-40c8-abe7-f77ea355a9de"
                            style={{'--i': 2}} alt="" />
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/07d4fa6f-6559-4874-b912-3968fdfe4e5e"
                            style={{'--i': 3}} alt="" />
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e082b965-bb88-4192-bce6-0eb8b0bf8e68"
                            style={{'--i': 4}} alt="" />
                    </div>
                </div>
                <button class="btn">Join</button>
            </div>
           
            <div class="day-and-activity activity-two">
                <div class="day">
                    <h1>15</h1>
                    <p>wed</p>
                </div>
                <div class="activity">
                    <h2>Yoga</h2>
                    <div class="participants">
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf"
                            style={{'--i': 1}} alt="" />
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/32037044-f076-433a-8a6e-9b80842f29c9"
                            style={{'--i': 2}} alt="" />
                    </div>
                </div>
                <button class="btn">Join</button>
            </div>

            <div class="day-and-activity activity-three">
                <div class="day">
                    <h1>17</h1>
                    <p>fri</p>
                </div>
                <div class="activity">
                    <h2>Tennis</h2>
                    <div class="participants">
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/32037044-f076-433a-8a6e-9b80842f29c9"
                            style={{'--i': 1}} alt="" />
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e082b965-bb88-4192-bce6-0eb8b0bf8e68"
                            style={{'--i': 2}} alt="" />
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf"
                            style={{'--i': 3}} alt="" />
                    </div>
                </div>
                <button class="btn">Join</button>
            </div>

            <div class="day-and-activity activity-four">
                <div class="day">
                    <h1>18</h1>
                    <p>sat</p>
                </div>
                <div class="activity">
                    <h2>Hiking</h2>
                    <div class="participants">
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/07d4fa6f-6559-4874-b912-3968fdfe4e5e"
                            style={{'--i': 1}} alt="" />
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/32037044-f076-433a-8a6e-9b80842f29c9"
                            style={{'--i': 2}} alt="" />
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/07d4fa6f-6559-4874-b912-3968fdfe4e5e"
                            alt="" />
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf"
                            style={{'--i': 4}} alt="" />
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/90affa88-8da0-40c8-abe7-f77ea355a9de"
                            style={{'--i': 5}} alt="" />
                    </div>
                </div>
                <button class="btn">Join</button>
            </div>
        {/* </div> */}
    </div>
  )
}

export default WeeklySchedule