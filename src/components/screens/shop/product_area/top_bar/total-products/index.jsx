import React from 'react';
import Showing from './showing';
import ViewToggle from './view_toggle';

function Index() {
    return (
        <div className="total-products">
            <Showing>
                Showing 1-8 0f 25
            </Showing>
            <ViewToggle/>
        </div>
    );
}

export default Index;