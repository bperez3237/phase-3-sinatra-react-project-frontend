import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import ActivityInfo from './ActivityInfo'
import ActivityBar from "./ActivityBar";
import {Button, Card, Container, Form} from 'react-bootstrap'

function Schedule({activities, employees, costs}) {
    const [toggleInfo,setToggleInfo] = useState(false)
    const [currentActivity,setCurrentActivity] = useState(null)
    const activityHours = activities.map((activity)=> activity.estimated_hours).reduce(((previousValue, currentValue) => previousValue + currentValue),0)

    function handleClick(activity) {
        if (toggleInfo) {
            if (currentActivity == activity) {
                setToggleInfo(!toggleInfo)
            } else {
                setCurrentActivity(activity)
            }
        } else {
            setToggleInfo(!toggleInfo)
            setCurrentActivity(activity)
        }
    }

    let hoursCounter = 0
    const activityElements = activities.map((activity)=>{
        hoursCounter+=activity.estimated_hours
        return <ActivityBar
        key={activity.name}
        name={activity.name}
        hours={activity.estimated_hours}
        all_activities_hours={activityHours}
        previousHours={hoursCounter-activity.estimated_hours}
        handleClick={()=>handleClick(activity)}
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
                {toggleInfo ? <ActivityInfo name={currentActivity.name} hours={currentActivity.estimated_hours} percentComplete={currentActivity.percent_complete} cost={currentActivity.total_cost} order={currentActivity.order} /> : <></>}
            </div>
        )
    }


export default Schedule;