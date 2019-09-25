import React from 'react';
import { Card } from '@material-ui/core';

const Home = () => {
    return(
    <Router>
        <Switch>
          {/* <Route exact path="/"><Home /></Route> */}
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/recipes"><Recipes /></Route>
          <Route exact path="/items"><Items /></Route>
          <Route exact path="/cart"><Cart /></Route>
          <Route exact path="/signin"><Auth /></Route>
        </Switch>
      </Router>
    )
};

export default Home