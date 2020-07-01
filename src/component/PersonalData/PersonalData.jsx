import React from "react";

function PersonalData({ name, avatar, addres }) {
    return (
        <div>
            <h1>{name}</h1>
            <img alt="profil" width="50px" src={avatar} />
            <p>{addres}</p>
        </div>
    );
}

export default PersonalData;
