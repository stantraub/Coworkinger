import React from "react";
import { Switch, Route} from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import Modal from "./modals/modals";
import MainPage from "./main/main_page";
import SpaceIndexContainer from "./spaces/space_index_container";
import SpaceShowContainer from './spaces/space_show_container'
import PicsCarouselContainer from './modals/pics_carousel_container';

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <Route exact path="/spaces/:id" component={SpaceShowContainer} /> 
      <Route exact path="/spaces/:id/pics" component={PicsCarouselContainer} />
      <Route path='/spaces' component={SpaceIndexContainer} />
      <Route path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;
