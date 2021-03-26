import React, {useEffect, useState} from "react";

import './UserContainer.css';
import Search from "../Search";
import UsersList from "../UsersList";

function UsersContainer({handleUserClick, selectedUser}) {
    const [usersJson, setUsersJson] = useState([]);
    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('');

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
            setUsersJson(data);
            setUsers(data);
        })
    }

    const searchHandle = (e) => {
        if (e.key === 'Enter') {
            const value = e.target.value.toLowerCase();
            let filterUsers = usersJson;

            if (value !== '') {
                filterUsers = usersJson.filter((data) => {
                    if (data.name.toLowerCase().includes(value) || data.surname.toLowerCase().includes(value)) {
                        return data;
                    }
                })
            }

            setUsers(filterUsers);
        }
    }

    const clearSearch = () => {
        setSearchValue('');
        setUsers(usersJson);
    }

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    }

    useEffect(() => {
        getUsersData();
    }, [])

    return (
        <>
            <div>
                <Search
                    usersData={users}
                    searchHandle={(e) => searchHandle(e)}
                    searchChange={(e) => handleSearchChange(e)}
                    searchValue={searchValue}
                    clearSearch={clearSearch}
                />
                {users && users.length &&
                    <UsersList usersData={users} handleUserClick={handleUserClick} selectedUser={selectedUser}/>
                }
            </div>
        </>
    )
}

export default UsersContainer;