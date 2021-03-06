import React from "react";
import { Switch, Route} from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import MainPage from "./main/main_page";
import SpaceIndexContainer from "./spaces/space_index_container";
import SpaceShowContainer from './spaces/space_show_container'

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path="/spaces/:id" component={SpaceShowContainer} /> 
      <Route path='/spaces' component={SpaceIndexContainer} />
      <Route path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;
