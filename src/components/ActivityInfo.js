import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import { Card, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "bootstrap";
import Cost from "./Cost";

function ActivityInfo({name, hours, percentComplete, cost, order, handleOrderChange,id, handleDelete}) {
    const [costToDate, setCostToDate] = useState([])


    useEffect(()=> {
        fetch(`http://localhost:9292/activities/${id}/costs`)
            .then((r)=>r.json())
            .then((data)=>setCostToDate(data))
    },[id])
    
    const costElems = costToDate.map((cost)=>{
        return <p key={cost.id}>Description: {cost.name}; Cost: ${cost.total_cost}</p>
    })

    return(
        <>
        <Card>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                Estimated Hours: {hours}<br></br>
                Estimated Cost: ${cost}<br></br>
                Actual Costs: <Container>{costElems}</Container>
                Order: #{order}<br></br>
                Change Order: 
                <button className="btn btn-light" value={1} onClick={(e)=>handleOrderChange(e,order,id)}>⬆️</button>
                <button className="btn btn-light" value={-1} onClick={(e)=>handleOrderChange(e,order,id)}>⬇️</button>
                <br></br>
                <button className="btn btn-primary" onClick={()=>handleDelete(id)}>Delete Activity</button>
            </Card.Body>
        </Card>
        
        </>
    )
}

export default ActivityInfo;