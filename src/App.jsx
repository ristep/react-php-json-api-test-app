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

import User from "pages/user";
import { BootswatchSelect } from "react-bootswatch-select";
import SideBar from "components/sidebar"
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const togleSidebar = () => setSidebar(!sidebar);

  return (
    <div className="App">

      <Router>
      <SideBar mehanics={{ sidebar, togleSidebar }} />
        <Navbar fixed="top" className="navbar-dark bg-primary" expand="lg">
          <Navbar.Brand>
            <FaBars onClick={togleSidebar} />
          </Navbar.Brand>
          <Navbar.Brand>
            Json API test
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
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
            </Nav>
            {/* <Button type="button" onClick={handleButtonClick}>
                Theme: {themes[styleIndex].title}
              </Button> */}
            {/* <Link onClick={() => window.location.replace("/about")}>About</Link> */}
          </Navbar.Collapse>
          
          <BootswatchSelect cdnLocation={'https://bootswatch.com/'} version={'5'} className="form-control" style={{ maxWidth: '160px' }} selectedThemeName={'minty'}/>

        </Navbar>

        <Container className="appBody">
          <Switch>
            <Route exact path={["/", "/home", "/doma"]}>
              <Home />
            </Route>

            <Route path="/food/:foodID">
              <Food />
            </Route>

            <Route path="/about">
              <About />
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
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
