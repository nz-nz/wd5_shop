import React from 'react';
import CheckoutDetails from './checkout_details';
import CartSummary from '../../cart_summary';
import CartSummaryTable from '../../cart_summary/summary_table';
import CartSummaryPayment from '../../cart_summary/payment_method';
import CartSummaryBtn from '../../cart_summary/cart_btn';

function Index(props) {
    return (
        <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-8">

                        <CheckoutDetails/>

                    </div>
                    <div className="col-12 col-lg-4">

                        <CartSummary>
                            <CartSummaryTable/>
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