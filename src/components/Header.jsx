import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/coffee-demo">
                    <h2>Place for Logo</h2>
                </Link>
            </div>
        </header>
    );
}

export default Header;