import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Activity from './Activity'
import ActivityBar from "./ActivityBar";
import {Button, Container, Form} from 'react-bootstrap'

function Schedule({activities, employees, costs}) {
    const [openActivity,setOpenActivity] = useState(false)

    const activityHours = (activities!=null) ? activities.map((activity)=> activity.estimated_hours).reduce(((previousValue, currentValue) => previousValue + currentValue)) : []
    let hoursCounter = 0
    const activityElements = activities.map((activity)=>{
        hoursCounter+=activity.estimated_hours
        return <ActivityBar
        key={activity.name}
        name={activity.name}
        hours={activity.estimated_hours}
        all_activities_hours={activityHours}
        previousHours={hoursCounter-activity.estimated_hours}
        />
    })

    if (activities) {
        
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
}

export default Schedule;