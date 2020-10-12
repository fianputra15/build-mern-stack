import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home, Login, Register} from "../../pages";
export default function Router(){
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}