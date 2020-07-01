import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {viewToggleAct} from "../../../../../../../store/action_creator";


function Index() {
    const dispatcher = useDispatch();
    const isFullScreenItem = useSelector(store => store.app.viewToggle.isFullScreenItem );


    return (
        <div className="view d-flex" onClick={ () => dispatcher(viewToggleAct(!isFullScreenItem)) } style={ {cursor: "pointer"} }>
            {
                !!isFullScreenItem &&
                <>
                    <a><i className="fa fa-bars" aria-hidden="true"></i></a>
                    <a><i className="fa fa-th-large" aria-hidden="true"></i></a>
                </>
            }
            {
                !isFullScreenItem &&
                <>
                    <a><i className="fa fa-th-large" aria-hidden="true"></i></a>
                    <a><i className="fa fa-bars" aria-hidden="true"></i></a>
                </>
            }
        </div>
    );
}

export default Index;