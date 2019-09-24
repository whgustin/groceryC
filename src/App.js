import React, { useState, useEffect } from 'react';
import Items from './Components/Items/Items';
import Auth from './Components/Auth/Auth';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/Toolbar/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop';
import Home from './Components/Site/Home';
import Recipes from './Components/Recipes/Recipes';
import Cart from './Components/Site/Cart';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {

  const [sessionToken, setSessionToken] = useState('');
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;

  if(sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  };

  return (
    <div>
      <Router>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen}/>
      {backdrop}
      {/* <Router>
      <Header clearToken={clearToken} />
      </Router> */}
                <Switch>
                    {/* <Route exact path="/"><Home /></Route> */}
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/recipes"><Recipes /></Route>
                    <Route exact path="/items"><Items /></Route>
                    <Route exact path="/cart"><Cart /></Route>
                    <Route exact path="/signin"><Auth /></Route>
                </Switch>

      {/* { sessionToken ? null : <Auth updateToken={ updateToken } /> } */}
    
      {/* <Sitebar clickLogout={clearToken} /> */}
      {/* <Auth updateToken={updateToken} /> */}
      </Router>
    </div>
  );
}

export default App;
