import React from 'react';
import ProductMetaData from './product_meta_data';
import ShortOverview from './short_overview';
import CartItem from './cart_item';

function Index(props) {
    return (
        <div className="single_product_desc">
            <ProductMetaData title={ props.title } price={ props.price } />
            <ShortOverview>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa
                officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur,
                autem, nostrum pariatur enim?
            </ShortOverview>
            <CartItem id={ props.id }/>
        </div>
    );
}

export default Index;