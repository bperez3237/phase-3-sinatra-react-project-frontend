import React, {useState} from "react";
import {Button, Container, Form} from 'react-bootstrap'

function ActivityForm({activities, setActivities}) {
    const [state,setState] = useState({
        name: "",
        hours: "",
        cost: ""
    })

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
        const activityObj = {'name': state.name, 'estimated_hours': state.hours, 'percent_complete': 0, 'estimated_cost': state.cost, 'order': nextOrder
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

    return (
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
    )
    
}

export default ActivityForm;