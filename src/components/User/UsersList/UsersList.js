import React from "react";

import User from "../User";
import './UsersList.css';

function UsersList({usersData}) {
    return (
        <>
            {usersData.map((user, index) =>
                <User key={`user-${index}`} data={user}/>
            )}
        </>
    )
}

export default UsersList;