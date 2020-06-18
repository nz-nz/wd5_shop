import React from 'react';

function Index(props) {
    return (
        <div className="cart-title mt-50">
            <h2>
                { props.children }
            </h2>
        </div>
    );
}

export default Index;