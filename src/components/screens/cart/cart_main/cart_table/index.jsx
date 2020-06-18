import React from 'react';
import CartItem from './cart_item';

function Index() {
    return (
        <div className="cart-table clearfix">
            <table className="table table-responsive" tabIndex="1"
                   style={ {overflow: "hidden", outline: "none"} }>

                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                </thead>

                <tbody>

                <CartItem/>
                <CartItem/>
                <CartItem/>

                </tbody>

            </table>
        </div>
    );
}

export default Index;