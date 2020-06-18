import React from 'react';
import paypal_img from '../../../assets/img/core-img/paypal.png';

function Index() {
    return (
        <div className="payment-method">
            <div className="custom-control custom-checkbox mr-sm-2">
                <input type="checkbox" name="payment" className="custom-control-input" id="cod"/>
                <label className="custom-control-label" htmlFor="cod">Cash on Delivery</label>
            </div>
            <div className="custom-control custom-checkbox mr-sm-2">
                <input type="checkbox" name="payment" className="custom-control-input" id="paypal"/>
                <label className="custom-control-label" htmlFor="paypal">
                    Paypal
                    <img className="ml-15" src={ paypal_img } alt=""/>
                </label>
            </div>
        </div>
    );
}

export default Index;