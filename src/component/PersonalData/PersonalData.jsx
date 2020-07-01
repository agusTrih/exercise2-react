import React from "react";
import "./personaldata.css";
function PersonalData({ name, avatar, addres }) {
    return (
        <div className="cards">
            <div className="card">
                <img src={avatar} alt="Avatar" style={{ width: "100%" }} />
                <div className="container">
                    <h4>
                        <b>{name}</b>
                    </h4>
                    <p>{addres}</p>
                </div>
            </div>
        </div>
    );
}

export default PersonalData;
