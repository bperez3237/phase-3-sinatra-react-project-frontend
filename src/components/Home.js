import React from "react";
import { NavLink } from "react-router-dom";
import {Button, Container, Row, Stack, Col } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {

    return(
        <Container>
            <Row><h1 className="d-flex justify-content-center">Project Planner</h1></Row>
            <Stack>
                <Button variant="dark" size="lg"><NavLink to="/schedule">Schedule</NavLink></Button>
                <Button variant="dark" size="lg"><NavLink to="/update-costs">Update Costs</NavLink></Button>
            </Stack>
        </Container>
    )
}

export default Home;