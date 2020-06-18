import React from 'react';
import CartTitle from './cart_title';
import CartTable from './cart_table';

function Index(props) {
    return (
        <>
            <CartTitle>
                Shopping Cart
            </CartTitle>
            <CartTable/>
        </>
    );
}

export default Index;