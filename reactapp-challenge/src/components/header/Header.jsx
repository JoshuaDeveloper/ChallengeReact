import React from 'react';
import {Navbar, Form, FormControl} from "react-bootstrap";


function Header(props) {
    return (
        <div>
            <Navbar>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
            </Navbar>
        </div>
    );
}

export default Header;