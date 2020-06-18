import React from 'react';
import logo from '../../../assets/img/core-img/logo.png'
import * as URL from "../../../router/url";
import {Link} from "react-router-dom";

function Index() {
    return (
        <div className="logo">
            <Link to={ URL.ROOT }>
                <img src={ logo } alt="" />
            </Link>
        </div>
    );
}

export default Index;