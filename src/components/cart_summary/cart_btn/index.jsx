import React from 'react';
import { Link } from "react-router-dom";
import * as URL from "../../../router/url";

function Index() {
    return (
        <div className="cart-btn mt-100">
            <Link to={ URL.CHECKOUT } className="btn amado-btn w-100">Checkout</Link>
        </div>
    );
}

export default Index;