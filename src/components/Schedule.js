import React from "react";
import { NavLink } from "react-router-dom";
import Activity from './Activity'
import {Button, Container, Form} from 'react-bootstrap'

function Schedule({activities, employees, costs}) {

    const activityElements = activities.map((activity)=>{
        return <Activity 
        key={activity.name}
        name={activity.name}
        hours={activity.estimated_hours}
        percentComplete={activity.percent_complete}
        cost={activity.estimated_cost}
        order={activity.order}
        />
    })

    return(
        <div>
            <header>
                <NavLink to="/">Back</NavLink>
                <h1>sched</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Create New Activity</Form.Label>
                        <Form.Control type="name" placeholder="name"></Form.Control>
                        <Form.Control type="hours" placeholder="hours"></Form.Control>
                        <Form.Control type="cost" placeholder="cost"></Form.Control>
                        <Button type="submit">Add Activity</Button>   
                    </Form.Group>
                </Form>
            </header>
            <Container>{activityElements}</Container>
        </div>
    )
}

export default Schedule;