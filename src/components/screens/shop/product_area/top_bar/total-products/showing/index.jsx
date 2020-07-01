import React from 'react';

function Index(props) {

    return (
        <p>
            { `SHOWING ${ props.start }-${ props.end } OF ${ props.totalQty }` }
        </p>
    );
}

export default Index;