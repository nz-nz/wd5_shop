import React from 'react';
import product1 from '../../../../../assets/img/product-img/product1.jpg';
import product2 from '../../../../../assets/img/product-img/product2.jpg';
import cart from '../../../../../assets/img/core-img/cart.png';
import * as URL from "../../../../../router/url";
import {Link} from "react-router-dom";

function Index(props) {
    const {
        id,
        price = 0,
        title = "",
        imgUrl1 = "http://test-api.ipromote.ru/img/Ikea-.png",
        imgUrl2 = product2,
        isFullScreenItem,
    } = props;

    return (
        <div className={ !!isFullScreenItem ? "col-12 col-sm-12 col-md-12 col-xl-12" : "col-12 col-sm-6 col-md-12 col-xl-6" }>
            <div className="single-product-wrapper">
                <div className="product-img">
                    <img src={ imgUrl1 } alt=""/>
                        <img className="hover-img" src={ imgUrl2 } alt=""/>
                </div>

                <div className="product-description d-flex align-items-center justify-content-between">
                    <div className="product-meta-data">
                        <div className="line"></div>
                        <p className="product-price">{ `$${ price }` }</p>
                        <Link to={ `${ URL.PRODUCT_DETAILS }/${ id }` }>
                            <h6>{ title }</h6>
                        </Link>
                    </div>
                    <div className="ratings-cart text-right">
                        <div className="ratings">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <div className="cart">
                            <Link to={ `${ URL.PRODUCT_DETAILS }/${ id }` } data-toggle="tooltip" data-placement="left" title="" data-original-title="Add to Cart">
                                <img src={ cart } alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;