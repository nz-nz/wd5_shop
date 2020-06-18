import React from 'react';
import TotalProducts from './total-products';
import Sorting from './sorting';

function Index() {
    return (
        <div className="product-topbar d-xl-flex align-items-end justify-content-between">
            <TotalProducts/>
            <Sorting/>
        </div>
    );
}

export default Index;