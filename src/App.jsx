import "./styles/App.scss";

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavLink, NavDropdown, Container } from "react-bootstrap";

import Home from "pages/home";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Queries from "pages/queries";
import About from "pages/about";
import Food from "pages/food";
import Foods from "pages/foods";
import Users from "pages/users";
import FoodsRQ from "pages/foods-react-query";
import FoodsReactTable from "pages/foods-react-table";
import UsersReactTable from "pages/users-react-table";
import LoginForm from "pages/loginForm";

import User from "pages/user";
import { useState } from "react";
// import { FaBars } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState("./styles/Minty/main.css");
  const [loginState, setLoginState] = useState({
    OK: false,
    error: false,
    count: 0,
  });
  // const [sidebar, setSidebar] = useState(true);
  // const togleSidebar = () => setSidebar(!sidebar);

  return (
    <div className="App">
      <link rel="stylesheet" type="text/css" href={theme} />
      <Router>
        <link rel="style" href="./bootstrap.min.css"></link>

        <Navbar fixed="top" className="navbar-dark bg-primary" expand="lg">
          {/* <SideBar mehanics={{ sidebar, togleSidebar }} /> */}
          {/* <Navbar.Brand>
            <FaBars onClick={togleSidebar} />
          </Navbar.Brand> */}
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
              <NavDropdown
                id="nav-dropdown-users"
                title="Users"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#/users">Users</NavDropdown.Item>
                <NavDropdown.Item href="#/users-react-table">
                  Users react-table
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink href="#/about">About</NavLink>
              { !loginState.OK ? (
              <NavLink href="#/login" className="ms-auto ml-auto">Login</NavLink>
              ) : (
                <NavLink href="#/login" className="ms-auto ml-auto">{loginState.data.name}: {loginState.data.first_name+' '+loginState.data.second_name}</NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container className="appBody">
          <Switch>
            <Route exact path={["/", "/home", "/doma"]}>
              <Home setTheme={setTheme} />
            </Route>

            <Route path="/food/:foodID">
              <Food />
            </Route>

            <Route path="/about">
              <About userData={loginState.data} />
            </Route>

            <Route path="/queries/:rqID?">
              <Queries />
            </Route>

            <Route path="/foods/:size?/:page?/:search?">
              <Foods />
            </Route>

            <Route path="/foods-react-query/:size?/:page?/:search?">
              <FoodsRQ />
            </Route>

            <Route path="/foods-react-table/:size?/:page?/:search?">
              <FoodsReactTable />
            </Route>

            <Route path="/users/:size?/:page?/:search?">
              <Users />
            </Route>

            <Route path="/users-react-table/:size?/:page?/:search?">
              <UsersReactTable />
            </Route>

            <Route path="/user/:userID">
              <User />
            </Route>
            <Route path="/login">
              <LoginForm userModel={{ loginState, setLoginState }} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
