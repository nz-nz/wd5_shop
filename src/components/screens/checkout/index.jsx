import React from 'react';
import CheckoutDetails from './checkout_details';
import CartSummary from '../../cart_summary';
import CartSummaryTable from '../../cart_summary/summary_table';
import CartSummaryPayment from '../../cart_summary/payment_method';
import CartSummaryBtn from '../../cart_summary/cart_btn';
import {useSelector} from "react-redux";

function Index() {

    const cartList = useSelector(store => store.app.cart);

    let subtotal = 0;
    let delivery = 0;
    let total = 0;
    if (Object.keys(cartList).length !== 0) {
        cartList.forEach(item => {
            subtotal += item.price * item.cnt;
            total = (subtotal + delivery);
        })
    }

    return (
        <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-8">

                        <CheckoutDetails/>

                    </div>
                    <div className="col-12 col-lg-4">

                        <CartSummary>
                            <CartSummaryTable subtotal={ subtotal } delivery={ delivery === 0 ? "Free" : delivery } total={ total }/>
                            <CartSummaryPayment/>
                            <CartSummaryBtn/>
                        </CartSummary>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;