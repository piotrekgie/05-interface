import React from 'react';
import {NavLink} from 'react-router-dom';

import './User.css';

function UserDetails({selectedUser, selectedUserData}) {
    return (
        <>
            {selectedUser ?
                <div className="user-details">
                    <div>
                        <label>Name:</label>
                        {JSON.parse(selectedUserData).name}
                    </div>
                    <div>
                        <label>Surname:</label>
                        {JSON.parse(selectedUserData).surname}
                    </div>
                    <div>
                        <label>Age:</label>
                        {JSON.parse(selectedUserData).age}
                    </div>
                </div>
                : <div>
                    Please select user first {}
                    <NavLink exact to="/users" activeClassName="selected">Users List</NavLink>
                </div>
            }
        </>
    );
}

export default UserDetails;