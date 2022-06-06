import React from "react";
import {Card} from 'react-bootstrap'

function Cost({name, cost, category, employee, activity, time}) {

    return(
        <Card bg='light'>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Text>
                    Total Cost: ${cost}<br></br>
                    category:{category}<br></br>
                    employee:{employee}<br></br>
                    activity: {activity}<br></br>
                    time: {time}<br></br>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cost;