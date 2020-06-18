import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import * as URL from "../../../../router/url";
import img_1 from "../../../../assets/img/bg-img/1.jpg";

Index.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    price: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    title: PropTypes.string,
    imgUrl: PropTypes.string,
};

function Index(props) {

    const {
        id,
        price = 0,
        title = "",
        imgUrl = "http://test-api.ipromote.ru/img/0325450_PE517970_S5.jpeg",
    } = props;

    return (
        <div className="single-products-catagory clearfix" style={{}}>
            <Link to={ `${ URL.SHOP }/${ id }` }>
                <img src={ imgUrl } alt="" style={ { paddingTop: "30%"}}/>
                <div className="hover-content">
                    <div className="line"></div>
                    <p>{ `From $${price}` }</p>
                    <h4>{ title }</h4>
                </div>
            </Link>
        </div>
    );
}

export default Index;