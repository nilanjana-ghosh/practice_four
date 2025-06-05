import { LOGO } from "../utils/constants";
import { useState } from "react";
const loginButtonStyle = {
    // width: "100px",
    // padding: "10px",
    // background: "#e73336",
    // border: "#e73336",
    // color: "#fff"
};

const Header = () => {

    const [loginButtonLabel, setLoginButtonLabel] = useState("SignIn");

    const clickHandler = () => {
        setLoginButtonLabel(loginButtonLabel === "SignIn" ? "SignOut" : "SignIn");

    };

    return (
        <div className="container">
            <div className="header-container">
                <div className="logo-div">
                    <img src={LOGO} alt="Logo" className="logo-img" />
                </div>
                <ul>
                    <li>Swiggy Corporate</li>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                </ul>
                <div>
                    <button style={loginButtonStyle} onClick={() => { clickHandler() }}>{loginButtonLabel}</button>
                </div>
            </div>
        </div>
    );
};

export default Header;