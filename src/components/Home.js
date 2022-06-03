import React from "react";
import { NavLink } from "react-router-dom";

function Home() {

    return(
        <div>
            <h1>hi</h1>
            <NavLink to="/schedule">Schedule</NavLink>
            <NavLink to="/modify">Modify Activities</NavLink>
        </div>
    )
}

export default Home;