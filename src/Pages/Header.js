import React from "react";
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import main from '../main.css';

const Header = () =>{
    return(
        <div className={main.header} >
            <h1>Miguel Mason</h1>
            <div className={main.nav}>               
                <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">
                        <Button variant="primary">Home</Button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"></Nav.Link>
                        <Button variant="primary">Projects</Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                        <Button variant="primary">Contact</Button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                        <Button variant="primary">Contact</Button>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>

    );
}

export default Header