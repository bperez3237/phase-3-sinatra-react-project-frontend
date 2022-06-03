import React from "react";
import { NavLink } from "react-router-dom";

function Home() {

    return(
        <div>
            <div>
                <h1>Project Planner</h1>
            </div>
            <div>
                <NavLink to="/schedule">Schedule</NavLink>
                <NavLink to="/update-costs">Update Costs</NavLink>
            </div>
        </div>
    )
}

export default Home;