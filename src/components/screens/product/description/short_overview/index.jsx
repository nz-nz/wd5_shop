import React from 'react';

function Index(props) {
    return (
        <div className="short_overview my-5">
            <p>{ props.children }</p>
        </div>
    );
}

export default Index;