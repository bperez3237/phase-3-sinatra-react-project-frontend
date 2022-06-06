import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import ActivityInfo from './ActivityInfo'
import ActivityBar from "./ActivityBar";
import {Button, Card, Container, Form} from 'react-bootstrap'

function Schedule({activities, setActivities, employees, costs}) {
    const [toggleInfo,setToggleInfo] = useState(false)
    const [currentActivity,setCurrentActivity] = useState(null)

    const [state,setState] = useState({
        name: "",
        hours: "",
        cost: ""
    })

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

    function handleChange(e) {
        const value = e.target.value
        console.log(e.target.value)
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        const nextOrder = (activities[activities.length -1].order +1)
        const activityObj = {'name': state.name, 'estimated_hours': state.hours, 'percent_complete': 0, 'estimated_cost': state.cost,'order': nextOrder}

        fetch(`http://localhost:9292/activities`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(activityObj)
            })
            .then((r)=>r.json())
            .then((newActivity)=>setActivities([...activities,newActivity]))
        setState({
            name: "",
            hours: "",
            cost: ""
        })
        
    }

    let hoursCounter = 0
    const activityElements = activities.map((activity)=>{
        hoursCounter+=activity.estimated_hours
        return <ActivityBar
        key={activity.created_at+activity.name}
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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Label>Create New Activity</Form.Label>
                            <Form.Control name="name" placeholder="name" value={state.name} onChange={handleChange}></Form.Control>
                            <Form.Control name="hours" placeholder="hours" value={state.hours} onChange={handleChange}></Form.Control>
                            <Form.Control name="cost" placeholder="cost" value={state.cost} onChange={handleChange}></Form.Control>
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