import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function ActivityInfo({name, hours, percentComplete, cost, order}) {

    return(
        <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Body>
                hours: {hours}<br></br>
                %: {percentComplete} <br></br>
                $: {cost}<br></br>
                order#: {order}xs
            </Card.Body>
        </Card>
    )
}

export default ActivityInfo;