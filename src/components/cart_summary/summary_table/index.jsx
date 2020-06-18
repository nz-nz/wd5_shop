import React from 'react';

function Index() {
    return (
        <>
            <h5>Cart Total</h5>
            <ul className="summary-table">
                <li><span>subtotal:</span> <span>$140.00</span></li>
                <li><span>delivery:</span> <span>Free</span></li>
                <li><span>total:</span> <span>$140.00</span></li>
            </ul>
        </>
    );
}

export default Index;