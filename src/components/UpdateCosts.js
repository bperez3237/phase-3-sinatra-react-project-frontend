import React from "react";
import { NavLink } from "react-router-dom";
import Cost from './Cost'
import {Button, Container, Form} from 'react-bootstrap'
import CostForm from "./CostForm";
import { act } from "react-dom/test-utils";

function UpdateCosts({activities, employees, costs, setCosts}) {

    const costElems = costs.map((cost)=>{
        return <Cost 
        key={cost.created_at}
        name={cost.name}
        cost={cost.total_cost}
        category={cost.category}
        employee={cost.employee_id}
        activity={cost.activity_id}
        time={cost.created_at}
        />
    })

    return(
        <div>
            <div>
                <NavLink to="/">Back</NavLink>
                <h1>update screen</h1>
                <CostForm costs={costs} setCosts={setCosts} activities={activities} employees={employees} />
            </div>
            <Container>
                {costElems}
            </Container>
        </div>
    )
}

export default UpdateCosts;