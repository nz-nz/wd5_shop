import React from 'react';
import logo from '../../../assets/img/core-img/logo.png';
import { Link } from "react-router-dom";
import { NAVI } from "../../../router/url";

function Index(props) {
    return (
        <div className="mobile-nav">
            <div className="amado-navbar-brand">
                <Link to={ NAVI[0]['url'] }><img src={ logo } alt=""/></Link>
            </div>
            <div className="amado-navbar-toggler" onClick={ props.onClick }>
                <span></span><span></span><span></span>
            </div>
        </div>
    );
}

export default Index;