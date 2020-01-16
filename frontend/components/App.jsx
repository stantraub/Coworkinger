import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

// import Modal from "./modals/session_modal";
import MainPage from "./main/main_page";
import SpaceIndexContainer from "./spaces/space_index_container";

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route path='/spaces' component={SpaceIndexContainer} />
      <Route path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;
