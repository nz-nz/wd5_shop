import React from 'react';

function Index(props) {

    const {
        subtotal,
        delivery,
        total,
    } = props;

    return (
        <>
            <h5>Cart Total</h5>
            <ul className="summary-table">
                <li><span>subtotal:</span> <span>${ subtotal }</span></li>
                <li><span>delivery:</span> <span>{ delivery }</span></li>
                <li><span>total:</span> <span>${ total }</span></li>
            </ul>
        </>
    );
}

export default Index;