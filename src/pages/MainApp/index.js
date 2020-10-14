import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DetailBlog from "../detailblog";
import CreateBlog from "../createblog";
import Home from "../home";
import {Header, Footer} from "../../components/molecules";
import "./mainapp.scss";
export default function MainApp(){
    return(
      <div className="main-app-wrapper">
          <div className="header-wrapper">
              <Header/>
          </div>
          <div className="content-wrapper">
              <Router>
                  <Switch>
                      <Route path="/create-blog">
                          <CreateBlog/>
                      </Route>
                      <Route path="/detail-blog">
                          <DetailBlog/>
                      </Route>
                      <Route path="/">
                          <Home />
                      </Route>
                  </Switch>
              </Router>
          </div>
          <div>
              <Footer/>
          </div>

      </div>
    );
}