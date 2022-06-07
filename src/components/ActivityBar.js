import React from "react";

function ActivityBar({name, hours, all_activities_hours, previousHours, handleClick}) {

    const width = Math.round(100*hours/all_activities_hours)
    const offset = Math.round(100*previousHours/all_activities_hours)

    return (
        <div style={{width: `${width}%`, backgroundColor:"red", marginLeft:`${offset}%`}} onClick={handleClick}>
            <p style={{color:"black"}}>{name}</p>
        </div>
    )

}

export default ActivityBar;