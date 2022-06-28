import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import { Card, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function ActivityInfo({name, hours, costs, order, handleOrderChange,id, handleDelete}) {

    const costElems = costs.map((cost)=>{
        return <p key={cost.id}>Description: {cost.name}; Cost: ${cost.total_cost}</p>
    })
    
    return(
        <>
        <Card>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                Estimated Hours: {hours}<br></br>
                Actual Costs: <Container>{costElems}</Container>
                Order: #{order}<br></br>
                Change Order: 
                <button className="btn btn-light" value={-1} onClick={(e)=>handleOrderChange(e,order,id)}>⬆️</button>
                <button className="btn btn-light" value={1} onClick={(e)=>handleOrderChange(e,order,id)}>⬇️</button>
                <br></br>
                <button className="btn btn-primary" onClick={()=>handleDelete(id)}>Delete Activity</button>
            </Card.Body>
        </Card>
        
        </>
    )
}

export default ActivityInfo;