import React from 'react';

function Index(props) {
    return (
        <div className="cart-summary">
            { props.children }
        </div>
    );
}

export default Index;