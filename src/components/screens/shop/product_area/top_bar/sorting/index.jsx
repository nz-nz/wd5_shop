import React, { useState } from 'react';
import DropDown from './../../../../../dropdown';
import { useDispatch ,useSelector } from "react-redux";
import {
    updateItemsOnPageIndexAct,
    updateItemsOnPageAct,
    updateStartItemOnPageZeroIndexAct,
    clearAllFiltersAct
} from '../../../../../../store/action_creator';
import {useHistory} from "react-router";
import * as URL from "../../../../../../router/url";



function Index() {

    const sortBy = useSelector(store => store.app.sortByDropDown.sortByIndex);
    const sortByList = useSelector(store => store.app.sortByDropDown.sortByList);
    const viewOnPage = useSelector(store => store.app.viewOnPageDropDown.itemsOnPageIndex);
    const viewOnPageList = useSelector(store => store.app.viewOnPageDropDown.viewOnPageList);
    const dispatcher = useDispatch();
    const history = useHistory();

    const handleChangeDropDown = (index, name) => {
        switch (name) {
            case "sortBy":
                dispatcher(updateItemsOnPageIndexAct(index));
                break;
            case "View":
                dispatcher(updateItemsOnPageAct(index));
                dispatcher(updateStartItemOnPageZeroIndexAct(0));
                break;
        }
    }

    const handleClick = () => {
        history.push(URL.SHOP);
        dispatcher(clearAllFiltersAct());
    }

    return (
        <div className="product-sorting d-flex">
            <DropDown
                title="Sort&nbsp;by"
                name="sortBy"
                current={ sortBy }
                options={ sortByList }
                onChange={ handleChangeDropDown }
            />
            <DropDown
                title="View"
                name="View"
                current={ viewOnPage }
                options={ viewOnPageList }
                onChange={ handleChangeDropDown }
            />
            <a
                role="button"
                className="btn amado-btn"
                style={{color: "#ffffff", cursor: "pointer", marginBottom: "15px"}}
                onClick={ handleClick }
            >Сбросить фильтры</a>
        </div>
    );
}

export default Index;