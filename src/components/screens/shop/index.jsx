import React, {useEffect} from 'react';
import ProductArea from './product_area';
import ShopSidebar from './shop_sidebar';

function Index() {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <ShopSidebar/>
            <ProductArea/>
        </>
    );
}

export default Index;