import React from "react";
import {Button, Card} from 'react-bootstrap'

function Cost({name, cost, id, handleDelete, category, employee, activity, time}) {


    return(
        <Card bg='light'>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Text>
                    Total Cost: ${cost}<br></br>
                    category: {category}<br></br>
                    employee: {employee}<br></br>
                    activity: {activity}<br></br>
                    time: {time.slice(0,10)}<br></br>
                </Card.Text>
            </Card.Body>
            <Button onClick={()=>handleDelete(id)} size="sm">Delete Cost</Button>
        </Card>
    )
}

export default Cost;