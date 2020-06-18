import React from 'react';

function Index() {
    return (
        <a id="scrollUp" href="#top" style={ {position: "fixed", zIndex: 2147483647, display: "none"} }>
            <i className="fa fa-angle-up" aria-hidden="true"></i>
        </a>
    );
}

export default Index;