import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "bootstrap";

function ActivityInfo({name, hours, percentComplete, cost, order}) {

    function handleOrderChange(e) {
        console.log(e.target.value)

    }

    return(
        <Card>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                Estimated Duration in Hours: {hours}<br></br>
                Cost to Date: ${cost}<br></br>
                Order: #{order}<br></br>
                Change Order: 
                <button className="btn btn-light" value={1} onClick={handleOrderChange}>⬆️</button>
                <button className="btn btn-light" value={-1} onClick={handleOrderChange}>⬇️</button>
            </Card.Body>
        </Card>
    )
}

export default ActivityInfo;