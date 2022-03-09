import React from 'react';
import {Container,Col, Row} from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

function Main() {
    return (
        <div>
            <div className='container'>
                <Row>
                    <Col md={3}><Sidebar></Sidebar></Col>
                    <Col md={9}><Header></Header></Col>
                </Row>
            </div>
        </div>
    );
}

export default Main;