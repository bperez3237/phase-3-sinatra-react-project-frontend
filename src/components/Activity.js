import React from "react";

function Activity({name, hours, percentComplete, cost, order}) {

    return(
        <div>
            <h2>{name}</h2>
            <p>hours: {hours}<br></br>
            %: {percentComplete} <br></br>
            $: {cost}<br></br>
            order#: {order}
            </p>
        </div>
    )
}

export default Activity;