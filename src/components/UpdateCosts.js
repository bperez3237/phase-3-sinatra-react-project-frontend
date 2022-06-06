import React from "react";
import { NavLink } from "react-router-dom";
import Cost from './Cost'
import {Button, Container, Form} from 'react-bootstrap'
import CostForm from "./CostForm";
import { act } from "react-dom/test-utils";

function UpdateCosts({activities, employees, costs, setCosts}) {

    function handleDelete(id) {
        fetch(`http://localhost:9292/costs/${id}`, {
            method: "DELETE",
          });
      
          const updatedCosts = costs.filter((cost)=> cost.id !==id)
          setCosts(updatedCosts);
    }

    const costElems = costs.map((cost)=>{
        return <Cost 
        key={cost.id}
        id={cost.id}
        name={cost.name}
        cost={cost.total_cost}
        handleDelete={handleDelete}
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