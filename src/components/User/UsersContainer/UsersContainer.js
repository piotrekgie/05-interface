import React, {useEffect, useState} from "react";

import './UserContainer.css';
import Search from "../Search";
import UsersList from "../UsersList";

function UsersContainer() {
    const [users, setUsers] = useState([]);
    const getUsersData = () => {
        fetch(
            'users.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).then((response) => {
            return response.json();
        }).then((data) => {
            setUsers(data);
        })
    }

    useEffect(() => {
        getUsersData();
    }, [])

    return (
        <div>
            <Search/>
            {users && users.length &&
                <UsersList usersData={users}/>
            }
        </div>
    )
}

export default UsersContainer;