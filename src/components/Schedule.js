import React from "react";
import { NavLink } from "react-router-dom";
import Activity from './Activity'

function Schedule({activities, employees, costs}) {

    const activityElements = activities.map((activity)=>{
        return <Activity 
        name={activity.name}
        hours={activity.estimated_hours}
        percentComplete={activity.percent_complete}
        cost={activity.estimated_cost}
        order={activity.order}
        />
    })

    return(
        <div>
            <header>
                <NavLink to="/">Back</NavLink>
                <h1>sched</h1>
                <form>
                    <input type="text" name="name"></input>
                    <input type="integer" name="hours"></input>
                    <input type="integer" name="cost"></input>
                    <button>Add Activity</button>
                </form>
            </header>
            <div>{activityElements}</div>
        </div>
    )
}

export default Schedule;