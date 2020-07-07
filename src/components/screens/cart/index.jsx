import React from 'react';
import CartMain from './cart_main';
import CartSummary from '../../cart_summary';
import CartSummaryTable from '../../cart_summary/summary_table';
import CartSummaryBtn from '../../cart_summary/cart_btn';
import { useSelector } from "react-redux";

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

                        <CartMain/>

                    </div>
                    <div className="col-12 col-lg-4">

                        <CartSummary>
                            <CartSummaryTable subtotal={ subtotal } delivery={ delivery === 0 ? "Free" : delivery } total={ total }/>
                            <CartSummaryBtn/>
                        </CartSummary>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;