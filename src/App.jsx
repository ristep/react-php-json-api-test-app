import "./styles/App.scss";

import React from "react";

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
import { ProvideUserLoginData } from "hooks/authData";
import LoginForm from "pages/loginForm";

import User from "pages/user";
import { useState } from "react";
import { Container } from "react-bootstrap";
import MainNavBar from "components/mainNavBar";
// Voa e nova granka
function App() {
  const [theme, setTheme] = useState("./styles/Cerulean/main.css");

  // const [sidebar, setSidebar] = useState(true);
  // const togleSidebar = () => setSidebar(!sidebar);

  return (
    <div className="App">
      <link rel="stylesheet" type="text/css" href={theme} />
      <ProvideUserLoginData>
      <Router>
        <link rel="style" href="./bootstrap.min.css"></link>

        <MainNavBar />

        <Container className="appBody">
          <Switch>
            <Route exact path={["/", "/home", "/doma"]}>
              <Home setTheme={setTheme} />
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
            <Route path="/login">
              <LoginForm />
            </Route>
          </Switch>
        </Container>
      </Router>
      </ProvideUserLoginData>
    </div>
  );
}

export default App;
