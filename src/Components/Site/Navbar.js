import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Home from './Home';
import Cart from './Cart';

const Navbar = () => {
    return(
        <nav className ="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Little Grocery</Link>
                <ul className ="right">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/cart">ShoppingCartIcon</Link></li>
                </ul>
            </div>
            <div className ="navbar-route">
                <Switch>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/cart"><Cart /></Route>
                </Switch>
            </div>
        </nav>
    )
};

export default Navbar