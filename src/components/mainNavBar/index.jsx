import { useAuthData } from "hooks/authData";
import React from "react";
import { Navbar, Nav, NavLink, NavDropdown  } from "react-bootstrap";
//import { FaBars } from "react-icons/fa";

const MainNavBar = (props) => {
  const { loginState } = useAuthData();

  return (
    <Navbar fixed="top" className="navbar-dark bg-primary" expand="lg">
      <Navbar.Brand>Json API test</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container-fluid">
          <NavLink href="#/home">Home</NavLink>

          <NavDropdown
            id="nav-dropdown-foods"
            title="Foods"
            menuVariant="parent"
          >
            <NavDropdown.Item href="#/foods">Foods</NavDropdown.Item>
            <NavDropdown.Item href="#/foods-react-query">
              Foods react-query
            </NavDropdown.Item>
            <NavDropdown.Item href="#/foods-react-table">
              Foods react-table
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

          <NavLink href="#/queries">Requests</NavLink>
          <NavDropdown id="nav-dropdown-users" title="Users" menuVariant="dark">
            <NavDropdown.Item href="#/users">Users</NavDropdown.Item>
            <NavDropdown.Item href="#/users-react-table">
              Users react-table
            </NavDropdown.Item>
          </NavDropdown>

          <NavLink href="#/about">About</NavLink>
          {!loginState.OK ? (
            <NavLink href="#/login" className="ms-auto ml-auto">
              Login
            </NavLink>
          ) : (
            <NavLink href="#/login" className="ms-auto ml-auto">
              {loginState?.data.name}:{" "}
              {loginState?.data.first_name + " " + loginState?.data.second_name}
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavBar;
