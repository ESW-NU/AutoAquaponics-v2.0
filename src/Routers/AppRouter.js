import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "../components/Footer";

import HomePage from "../components/HomePage";
import ContactPage from "../components/ContactPage";
import AboutPage from "../components/AboutPage";
import ProjectPage from "../components/ProjectPage";

const AppRouter = () => (
  <BrowserRouter className="header">
    <div>
      <Switch>
        <Route path="/" exact={true}>
            
        </Route>
        {/* <Route path="/project" component={ProjectPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} /> */}
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
