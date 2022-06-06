import React from "react";

function ActivityBar({name, hours, all_activities_hours, previousHours}) {

    console.log(all_activities_hours,hours,previousHours)
    const width = Math.round(100*hours/all_activities_hours)
    const offset = Math.round(100*previousHours/all_activities_hours)

    return (
        <div style={{width: `${width}%`, backgroundColor:"red", marginLeft:`${offset}%`}}>
            <h3>{name}</h3>
        </div>
    )

}

export default ActivityBar;