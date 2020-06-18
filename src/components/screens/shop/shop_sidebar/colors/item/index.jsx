import React from 'react';

function Index(props) {

    const {
        color = '',
        isActive = false,
    } = props;
    let style = { backgroundColor: `#${ color }`, cursor: "pointer"}
    if (isActive)
        style = { backgroundColor: `#${ color }`, boxShadow: `0 0 0 4px #${ color }, 0 0 0 5px gray`, cursor: "pointer"};

    return (
        <li><a style={ style } onClick={ props.onClick }/></li>
    );
}

export default Index;