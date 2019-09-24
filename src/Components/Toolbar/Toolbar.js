import React from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import Home from '../Site/Home';
import Recipes from '../Recipes/Recipes';
import Items from '../Items/Items';
import Cart from '../Site/Cart';
import Auth from '../Auth/Auth';

const toolbar = (props) => {
   return(
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar-logo"><a href="/">Little Grocery</a></div>
            <div className="spacer" />
            <div className="toolbar-navigation-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recipes">Search Recipes</Link></li>
                    <li><Link to="/items">Search Items</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                </ul>
            </div>
            <div className="toolbar-route">
                
            </div>
        </nav>
    </header>
   ) 
};

export default toolbar