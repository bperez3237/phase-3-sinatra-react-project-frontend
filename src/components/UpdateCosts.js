import React from "react";
import { NavLink } from "react-router-dom";
import Cost from './Cost'
import {Button, Container, Form} from 'react-bootstrap'

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
                <Form>
                    <Form.Group>
                        <Form.Label>Add New Cost</Form.Label>
                        <Form.Control type="text" name="name"></Form.Control>
                        <Form.Control type="integer" name="cost"></Form.Control>
                        <Form.Control type="integer" name="cost"></Form.Control>
                        <Form.Select name="employee">{employeeOptions}</Form.Select>
                        <Form.Select name="activity">{activityOptions}</Form.Select>
                        <Button>Add Cost</Button>
                    </Form.Group>
                </Form>
            </div>
            <Container>
                {costElems}
            </Container>
        </div>
    )
}

export default UpdateCosts;