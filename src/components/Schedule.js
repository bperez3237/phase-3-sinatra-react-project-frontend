import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import ActivityInfo from './ActivityInfo'
import ActivityBar from "./ActivityBar";
import { Container, Navbar} from 'react-bootstrap'
import ActivityForm from "./ActivityForm";

function Schedule({activities, setActivities, setCosts}) {
    const [toggleInfo,setToggleInfo] = useState(false)
    const [currentActivity,setCurrentActivity] = useState(null)
    const [totalHours,setTotalHours] = useState(0)

    useEffect(()=>{
        fetch('http://localhost:9292/project_hours')
            .then((r)=>r.json())
            .then((hours)=>setTotalHours(hours))
    },[activities])

    function handleClick(activity) {
        if (toggleInfo) {
            if (currentActivity === activity) {
                setToggleInfo(!toggleInfo)
            } else {
                setCurrentActivity(activity)
            }
        } else {
            setToggleInfo(!toggleInfo)
            setCurrentActivity(activity)
        }
    }

    function handleOrderChange(e, order, id) {
        e.preventDefault()
        const newOrder = parseInt(order)+parseInt(e.target.value)
        fetch(`http://localhost:9292/activities/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({order:newOrder}),
        })
            .then((r)=>r.json())
            .then((activities)=> {
                setCurrentActivity(activities.find((activity)=> activity.id===id))
                setActivities(activities)
            })
    }

    function handleDelete(id) {
        fetch(`http://localhost:9292/activities/${id}`,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((r)=>r.json())
            .then((obj)=> {
                setActivities(obj.activities)
                setCosts(obj.costs)
            })
        setToggleInfo(!toggleInfo)
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
                    <h1 className="d-flex justify-content-center" style={{marginTop:'50px'}}>Total Project Duration: {totalHours} Hours</h1>
                <br></br>
                <ActivityForm activities={activities} setActivities={setActivities}/>
                <br></br>
                <Container>
                    {activityElements}
                    {toggleInfo ? <ActivityInfo id={currentActivity.id} name={currentActivity.name} hours={currentActivity.estimated_hours} percentComplete={currentActivity.percent_complete} costs={currentActivity.costs} order={currentActivity.order} handleOrderChange={handleOrderChange} handleDelete={handleDelete} /> : <></>}
                </Container>
            </Container>
        )
    }


export default Schedule;