import React, { useState} from "react";
import Cost from "./Cost";
import {Button, Form } from 'react-bootstrap'

function CostForm({costs, setCosts, activities, employees}) {
    const [state,setState] = useState({
        name: "",
        cost: "",
        category: "",
        employee: employees[0].name,
        activity: activities[0].name,
    })

    const activityOptions = activities.map((activity)=>{
        return <option value={activity.name}>{activity.name}</option>
    })

    const employeeOptions = employees.map((employee)=>{
        return <option value={employee.name}>{employee.name}</option>
    })


    function handleChange(e) {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        const employee = employees.find((obj) => obj.name == state.employee)
        const activity = activities.find((obj)=> obj.name === state.activity)

        const costObj = {'name': state.name, 'total_cost': state.cost, 'category': state.category, 'employee_id': employee.id,'activity_id': activity.id}

        fetch(`http://localhost:9292/costs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(costObj)
            })
            .then((r)=>r.json())
            .then((newCost)=>setCosts([...costs,newCost]))
        setState({
            name: "",
            cost: "",
            category: "",
            employee: employees[0].name,
            activity: activities[0].name,
        })
        
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Label>Add New Cost</Form.Label>
                <Form.Control name="name" placeholder="name" onChange={handleChange}></Form.Control>
                <Form.Control name="cost" placeholder="cost" onChange={handleChange}></Form.Control>
                <Form.Control name="category" placeholder="category" onChange={handleChange}></Form.Control>
                <Form.Select name="employee"  onChange={handleChange}>{employeeOptions}</Form.Select>
                <Form.Select name="activity" onChange={handleChange}>{activityOptions}</Form.Select>
                <Button type="submit">Add Cost</Button>
            </Form.Group>
        </Form>
    )
}

export default CostForm;