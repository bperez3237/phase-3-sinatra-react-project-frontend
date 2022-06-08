import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import ActivityInfo from './ActivityInfo'
import ActivityBar from "./ActivityBar";
import {Alert, Button, Container, Form, Navbar} from 'react-bootstrap'

function Schedule({activities, setActivities, employees, costs, setCosts}) {
    const [toggleInfo,setToggleInfo] = useState(false)
    const [currentActivity,setCurrentActivity] = useState(null)
    const [totalHours,setTotalHours] = useState(0)
    const [state,setState] = useState({
        name: "",
        hours: "",
        cost: ""
    })

    useEffect(()=>{
        fetch('http://localhost:9292/project_hours')
            .then((r)=>r.json())
            .then((hours)=>setTotalHours(hours))
    },[activities])

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
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    function checkIfNumber(obj) {
        if (isNaN(parseInt(obj))) {
            return false
        } else {
            return true
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        const nextOrder = (activities[activities.length -1].order +1)
        const activityObj = {
            'name': state.name, 
            'estimated_hours': state.hours, 
            'percent_complete': 0, 
            'estimated_cost': state.cost, 
            'order': nextOrder
        }

        if (checkIfNumber(activityObj.estimated_cost) && checkIfNumber(activityObj.estimated_hours)) {
            fetch(`http://localhost:9292/activities`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(activityObj)
                })
                .then((r)=>r.json())
                .then((newActivity)=>setActivities([...activities,newActivity]))
        } else {
            window.alert('Invalid Entry Type. Try again!')
        }
        setState({
            name: "",
            hours: "",
            cost: ""
        })        
    }

    function handleOrderChange(e, order, id) {
        e.preventDefault()
        const newOrder = parseInt(order)+parseInt(e.target.value)
        if (newOrder > activities.length || newOrder < 1 ) {
            console.log('invalid order')
        } else {
            const swapActivity = activities.find((activity)=> activity.order == newOrder)

            fetch(`http://localhost:9292/activities/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({order:newOrder}),
            })
                .then((r)=>r.json())
                .then((updatedActivity)=> {
                    const updatedActivities = activities.map((activity)=> {
                        if(activity.id === updatedActivity.id) {
                            return updatedActivity
                        } else if (activity.id === swapActivity.id){
                            return {...swapActivity,order:order}
                        } else {
                            return activity
                        }
                    })
                    setCurrentActivity(updatedActivity)
                    setActivities(updatedActivities)
                })

            fetch(`http://localhost:9292/activities/${swapActivity.id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({order:order}),
            })
                .then((r)=>r.json())
                .then(()=> console.log('swapped'))
            }
    }

    function handleDelete(id) {
        fetch(`http://localhost:9292/activities/${id}`,{
            method: "DELETE",
        })
        const updatedActivities = activities.filter((activity)=> activity.id !==id)
        setActivities(updatedActivities)
        setToggleInfo(!toggleInfo)
        
        fetch('http://localhost:9292/costs')
            .then((r)=>r.json())
            .then((data)=>setCosts(data))

        fetch('http://localhost:9292/activities')
            .then((r)=>r.json())
            .then((data)=>setActivities(data))
    }

    let hoursCounter = 0
    const activityElements = activities.sort((a,b)=> a.order - b.order).map((activity)=>{
        hoursCounter+=activity.estimated_hours
        return <ActivityBar
        key={activity.id}
        name={activity.name}
        hours={activity.estimated_hours}
        all_activities_hours={totalHours}
        previousHours={hoursCounter-activity.estimated_hours}
        handleClick={()=>handleClick(activity)}
        />
    })

   return(
            <Container>
                <Navbar fixed="top" bg="dark" variant="dark">
                    <Navbar.Brand style={{marginLeft:'10px'}}>Schedule</Navbar.Brand>
                    <NavLink style={{color:"#999"}} exact to="/">Home</NavLink>    
                    <NavLink style={{color:"#999",marginLeft:'10px'}} to="/update-costs">Update Costs</NavLink>
                </Navbar>
                <br></br>
                <Container >
                    <Form onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Label>Create New Activity</Form.Label>
                            <Form.Control name="name" placeholder="name" value={state.name} onChange={handleChange}></Form.Control>
                            <Form.Control name="hours" placeholder="hours" value={state.hours} onChange={handleChange}></Form.Control>
                            <Form.Control name="cost" placeholder="cost" value={state.cost} onChange={handleChange}></Form.Control>
                            <Button type="submit">Add Activity</Button>   
                        </Form.Group>
                    </Form>
                </Container>
                <br></br>
                <Container>
                    {activityElements}
                    {toggleInfo ? <ActivityInfo id={currentActivity.id} name={currentActivity.name} hours={currentActivity.estimated_hours} percentComplete={currentActivity.percent_complete} cost={currentActivity.estimated_cost} order={currentActivity.order} handleOrderChange={handleOrderChange} handleDelete={handleDelete} /> : <></>}
                </Container>
            </Container>
        )
    }


export default Schedule;