import React from 'react';
import './SideDrawer.css';
import Cart from '../../Site/Cart';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open'
    }
    return(
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/searchrecipes">Search Recipes</a></li>
            <li><a href="/searchitems">Search Items</a></li>
            <li><a href="/cart">Cart</a></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;