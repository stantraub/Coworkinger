import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from "./nav/navbar_container";

import Modal from './modals/session_modal';
import MainPage from './main/main_page';
import SpaceIndexContainer from './spaces/space_index_container';


const App = () => (
  <div>
    <NavBarContainer/>
    <Modal />
    <Switch>
      <AuthRoute path="/spaces" component={SpaceIndexContainer} />
      <AuthRoute path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;