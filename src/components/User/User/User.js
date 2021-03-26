import React from "react";
import './User.css';

function User({data}) {
    return (
        <div className="user-row">{data.name} {data.surname}</div>
    )
}

export default User;