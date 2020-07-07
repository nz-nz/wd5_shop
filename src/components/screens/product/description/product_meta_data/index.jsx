import React from 'react';


function Index(props) {
    return (
        <div className="product-meta-data">
            <div className="line"></div>
            <p className="product-price">
                ${ props.price }
            </p>
            <a>
                <h6>
                    { props.title }
                </h6>
            </a>
            <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="review">
                    <a href="#">Write A Review</a>
                </div>
            </div>
            <p className="avaibility"><i className="fa fa-circle"></i> In Stock</p>
        </div>
    );
}

export default Index;