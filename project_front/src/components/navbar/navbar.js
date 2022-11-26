import React from "react";
import { Container, Nav, Navbar, DropdownButton, Dropdown, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state= { }
    }
    render() {
        return(
            <Navbar id="navbar" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        Registro Discapacitad <span id="usuario-sub-branm"></span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Registro</Nav.Link>
                        {/*<Nav.Link href="#link">Link</Nav.Link>*/}
                        <DropdownButton id="dropdown-basic-button" title="Ingreso" variant="dark">
                            <Dropdown.Header id="dropdown-header">
                                <Row>
                                    <FontAwesomeIcon icon={faUserGroup} />
                                </Row>
                                <Row>
                                    #USUARIO#
                                </Row>
                            </Dropdown.Header>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">Cerrar sesión</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                        </DropdownButton>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}