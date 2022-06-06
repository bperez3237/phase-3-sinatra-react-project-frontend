import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createPortal } from "react-dom";

function Activity({name, hours, percentComplete, cost, order}) {
    const [openActivity,setOpenActivity] = useState(false)

    return(
        <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Body>
                hours: {hours}<br></br>
                %: {percentComplete} <br></br>
                $: {cost}<br></br>
                order#: {order}
            </Card.Body>
        </Card>
    )
}

export default Activity;