import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./img/lion.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Todo from '../Pages/TODO';
export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="black" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              ></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Главная</Nav.Link>
                <Nav.Link href="/todolist">Список дел</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>

            <Route exact path="/todolist" element={<Todo />} />
          </Routes>
        </Router>
      </>
    );
  }
}
