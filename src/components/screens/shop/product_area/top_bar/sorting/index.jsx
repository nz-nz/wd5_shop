import React from 'react';
import SortBy from './sort_by';
import ViewNum from './view_num';

function Index(props) {
    return (
        <div className="product-sorting d-flex">
            <SortBy/>
            <ViewNum/>
        </div>
    );
}

export default Index;