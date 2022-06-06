import React from "react";
import { NavLink } from "react-router-dom";
import Cost from './Cost'

function UpdateCosts({activities, employees, costs}) {

    const costElems = costs.map((cost)=>{
        return <Cost 
        key={cost.name}
        name={cost.name}
        cost={cost.total_cost}
        category={cost.category}
        employee={cost.employee_id}
        activity={cost.activity_id}
        time={cost.created_at}
        />
    })

    const activityOptions = activities.map((activity)=>{
        return <option value={activity.name}>{activity.name}</option>
    })

    const employeeOptions = employees.map((employee)=>{
        return <option value={employee.name}>{employee.name}</option>
    })


    return(
        <div>
            <div>
                <NavLink to="/">Back</NavLink>
                <h1>update screen</h1>
                <form>
                    <input type="text" name="name"></input>
                    <input type="integer" name="cost"></input>
                    <input type="integer" name="cost"></input>
                    <select name="employee">{employeeOptions}</select>
                    <select name="activity">{activityOptions}</select>
                    <button>Add Cost</button>
                </form>
            </div>
            <div>
                {costElems}
            </div>
        </div>
    )
}

export default UpdateCosts;