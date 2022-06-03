import React from "react";

function Cost({name, cost, category, employee, activity, time}) {

    return(
        <div>
            <h1>{name}</h1>
            <p>
                $:{cost}<br></br>
                category:{category}<br></br>
                employee:{employee}<br></br>
                activity: {activity}<br></br>
                time: {time}<br></br>
            </p>
        </div>
    )
}

export default Cost;