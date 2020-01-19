import RenderReposContainer from "./containers/RenderReposContainer";
import RepoDetailsContainer from "./containers/RepoDetailsContainer";
import RenderReadmeContainer from "./containers/RenderReadmeContainer";
import { Route, Switch } from "react-router-dom";

import React, { Component } from "react";

class Routes extends Component {
    render() {
        return(      
        <Switch>
            <Route 
                path="/" 
                exact={true} 
                component={RenderReposContainer} />          
              <Route 
                path="/repositories/:id" 
                exact={true} 
                component={RepoDetailsContainer} />
              <Route
                path="/repositories/:id/readme"
                exact={true}
                component={RenderReadmeContainer}/>
          </Switch>
          ); 
    }
 }

 export default Routes;