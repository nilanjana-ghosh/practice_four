import { useState } from "react";
import {REST_LOGO_URL} from "../utils/constants";


const Header = () => {

    const [loginButtonLabel, setLoginButtonLabel] = useState("SignIn");

    const clickHandler = () => {
        setLoginButtonLabel(loginButtonLabel === "SignIn" ? "SignOut" : "SignIn");

    };

    return (
        <div className="container">
            <div className="header-container">
                <div className="logo-div">
                    <img src={REST_LOGO_URL} alt="Logo" className="logo-img" />
                </div>
                <ul>
                    <li>Swiggy Corporate</li>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                </ul>
                <div>
                    <button onClick={() => { clickHandler() }}>{loginButtonLabel}</button>
                </div>
            </div>
        </div>
    );
};

export default Header;