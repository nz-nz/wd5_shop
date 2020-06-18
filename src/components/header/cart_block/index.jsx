import React from 'react';
import cart_img from '../../../assets/img/core-img/cart.png';
import favorites_img from '../../../assets/img/core-img/favorites.png';
import search_img from '../../../assets/img/core-img/search.png';
import * as URL from "../../../router/url";
import {Link} from "react-router-dom";


function Index() {
    return (
        <div className="cart-fav-search mb-100">
            <Link to={ URL.CART }>
                <img src={ cart_img } alt=""/> Cart <span>(0)</span>
            </Link>
            <a href="#" className="fav-nav"><img src={ favorites_img } alt=""/> Favourite</a>
            <a href="#" className="search-nav"><img src={ search_img } alt=""/> Search</a>
        </div>
    );
}

export default Index;