import React from 'react';
import {NavLink} from 'react-router-dom';

import './Menu.css';
import {Button} from "../Form";

function Menu({handleShowClick}) {
    return (
        <div className="menu">
            <Button className="close" margin="0" padding="5" handleClick={handleShowClick}>
                <span>X</span>
            </Button>
            <NavLink exact to="/exercise-1" activeClassName="selected">Ex1 - Dialog</NavLink>
            <NavLink exact to="/exercise-2" activeClassName="selected">Ex2 - Snackbars</NavLink>
        </div>
    )
}

export default Menu;