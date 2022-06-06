import React from "react";
import { NavLink } from "react-router-dom";
import {Button, Container, Row, Col } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {

    return(
        <Container>
            <Row><h1 className="d-flex justify-content-center">Project Planner</h1></Row>
            <Row><Button variant="dark" size="lg"><NavLink to="/schedule">Schedule</NavLink></Button></Row> 
            <Row><Button variant="dark" size="lg"><NavLink to="/update-costs">Update Costs</NavLink></Button></Row>
        </Container>
    )
}

export default Home;