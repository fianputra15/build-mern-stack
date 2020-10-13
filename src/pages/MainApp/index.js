import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DetailBlog from "../detailblog";
import CreateBlog from "../createblog";
import Home from "../home";
import {Header, Footer} from "../../components/molecules";
export default function MainApp(){
    return(
      <div>
          <Header/>
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
          <Footer/>
      </div>
    );
}