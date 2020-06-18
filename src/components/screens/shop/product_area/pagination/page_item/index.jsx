import React from 'react';

function Index(props) {
    return (
        <li className="page-item"><a className="page-link" href="#">
            { props.children }
        </a></li>
    );
}

export default Index;