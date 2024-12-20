// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';

const AppNavbar = ({ onToggleSidebar }) => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="p-3">
      <Container>
        <Button variant="light" onClick={onToggleSidebar} className="me-2 sidebar-toggle">
          ☰
        </Button>
        <Navbar.Brand href="/">MichinglishAPP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#study">Study</Nav.Link>
            <Nav.Link href="#live-classes">Live Classes</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="My Profile" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item href="#account-settings">Account Settings</NavDropdown.Item>
              <NavDropdown.Item href="#progress-goals">My Progress and Goals</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
