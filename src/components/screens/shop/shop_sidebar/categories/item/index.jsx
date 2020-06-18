import React from 'react';
import {Link} from "react-router-dom";
import * as URL from "../../../../../../router/url";
import {useDispatch, useSelector} from "react-redux";
import {categoryFromWidgetAct} from "../../../../../../store/action_creator";

function Index(props) {

    const dispatcher = useDispatch();
    const filterCategory = useSelector((store)=>(store.app.filters.category || []));


    const {
        id,
        isActive = false,
        title = '',
        titleEng = '',
    } = props;

    const handleClick = (e, id) => {
        if (filterCategory.includes(id))
            return  dispatcher(categoryFromWidgetAct(""));
        dispatcher(categoryFromWidgetAct(id));
        console.log(filterCategory);
    }

    return (
        <li className={ isActive ? "active" : '' } onClick={ (e) => handleClick(e, id) }>
            <Link to={ `${ URL.SHOP }/${ titleEng }` }>
                { title }
            </Link>
        </li>
    );
}

export default Index;