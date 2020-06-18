import React from 'react';
import Categories from './categories';
import Brands from './brands';
import Colors from './colors';
import Prices from './prices';


function Index() {
    return (
        <div className="shop_sidebar_area">
            <Categories/>
            <Brands/>
            <Colors/>
            <Prices/>
        </div>
    );
}

export default Index;