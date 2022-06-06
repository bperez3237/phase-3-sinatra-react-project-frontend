import React from "react";
import { NavLink } from "react-router-dom";
import {Button, Container, Row, Stack, Col } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {

    return(
        <Container className="d-flex flex-column align-items-center justify-content-center" fluid>
            <Row><Col><h1>Project Planner</h1></Col></Row>
            <Row><Col><NavLink to="/schedule">Schedule</NavLink></Col></Row>
            <Row><Col><NavLink  to="/update-costs">Update Costs</NavLink></Col></Row>
        </Container>
    )
}

export default Home;