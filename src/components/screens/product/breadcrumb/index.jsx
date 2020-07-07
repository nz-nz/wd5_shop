import React, {useEffect} from 'react';
import * as URL from '../../../../router/url';
import { Link } from "react-router-dom";

function Index(props) {

    useEffect(() => {
        // console.log("hey I'am mounted");
        window.scroll(0,0);
    },[]);

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb mt-50">
                <li className="breadcrumb-item">
                    <Link to={ URL.NAVI[0].url }>{ URL.NAVI[0].title }</Link>
                </li>
                <li className="breadcrumb-item" onClick={ props.onClick }><Link to={ `${ URL.SHOP }/${ props.url }` }>
                    { props.category }
                </Link></li>
                <li className="breadcrumb-item active" aria-current="page">
                    { props.title }
                </li>
            </ol>
        </nav>
    );
}

export default Index;