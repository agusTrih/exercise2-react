import React from "react";
import PersonalData from "../../component/PersonalData/PersonalData";
import image from "../../assets/images/dt1.jpg";
function LandingPage() {
    let name = "Agus Trihanton";

    let address = "jln ujung harapan desa bahagian kecamatan babelan";
    return (
        <div>
            <PersonalData name={name} avatar={image} addres={address} />
        </div>
    );
}

export default LandingPage;
