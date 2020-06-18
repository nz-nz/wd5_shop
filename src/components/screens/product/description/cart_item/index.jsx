import React from 'react';

function Index(props) {
    return (
        <form className="cart clearfix" method="post">
            <div className="cart-btn d-flex mb-50">
                <p>Qty</p>
                <div className="quantity">
                    <span className="qty-minus" onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty > 1 ) effect.value--;return false;">
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </span>
                    <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="1"/>
                    <span className="qty-plus" onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;">
                        <i className="fa fa-caret-up" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <button type="submit" name="addtocart" value="5" className="btn amado-btn">Add to cart
            </button>
        </form>
    );
}

export default Index;