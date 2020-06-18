import React from 'react';
import CartMain from './cart_main';
import CartSummary from '../../cart_summary';
import CartSummaryTable from '../../cart_summary/summary_table';
import CartSummaryBtn from '../../cart_summary/cart_btn';

function Index() {
    return (
        <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-8">

                        <CartMain/>

                    </div>
                    <div className="col-12 col-lg-4">

                        <CartSummary>
                            <CartSummaryTable/>
                            <CartSummaryBtn/>
                        </CartSummary>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;