import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {

    return(
        <Container style={{height:'400px'}}className="d-flex flex-column align-items-center justify-content-center" fluid>
            <Row><Col><h1 style={{fontSize:'60px'}}>Project Planner</h1></Col></Row>
            <br></br>
            <Row><Col><NavLink className="btn btn-primary" to="/schedule">Schedule</NavLink></Col></Row>
            <br></br>
            <Row><Col><NavLink className="btn btn-primary" to="/update-costs">Update Costs</NavLink></Col></Row>
        </Container>
    )
}

export default Home;