import React from "react";

import {User} from "../User";
import './UsersList.css';

function UsersList({usersData, handleUserClick, selectedUser}) {
    return (
        <>
            {usersData.map((user, index) =>
                <User key={`user-${index}`} data={user} handleUserClick={handleUserClick} selectedUser={selectedUser}/>
            )}
        </>
    )
}

export default UsersList;