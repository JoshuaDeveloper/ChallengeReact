import React from 'react';
import {ListGroup} from "react-bootstrap";

function Sidebar() {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item>DASHBOARD</ListGroup.Item>
                <ListGroup.Item>PROJECTS</ListGroup.Item>
                <ListGroup.Item>MY TASK</ListGroup.Item>
                <ListGroup.Item>CALENDAR</ListGroup.Item>
                <ListGroup.Item>TIME MANAGE</ListGroup.Item>
                <ListGroup.Item>REPORTS</ListGroup.Item>
                <ListGroup.Item>SETTINGS</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Sidebar;