import React from 'react';

function Index(props) {
    return (
        <li className={`page-item ${props.isActive && "active"}`} onClick={ props.onClick }><a className="page-link" >
            { props.children }
        </a></li>
    );
}

export default Index;