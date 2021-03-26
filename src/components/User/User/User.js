import React from "react";
import './User.css';

function User({data, handleUserClick, selectedUser}) {
    return (
        <div className={`user-row ${parseInt(selectedUser) === data.id ? 'selected' : ''}`} onClick={handleUserClick} data-user-id={data.id} data-user={JSON.stringify(data)}>{data.name} {data.surname}</div>
    )
}

export default User;