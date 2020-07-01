import React, { useState } from 'react';
import DropDown from './../../../../../dropdown';
import { useDispatch ,useSelector } from "react-redux";
import { updateItemsOnPageIndexAct, updateItemsOnPageAct, updateStartItemOnPageZeroIndexAct} from '../../../../../../store/action_creator';



function Index() {

    const sortBy = useSelector(store => store.app.sortByDropDown.sortByIndex);
    const sortByList = useSelector(store => store.app.sortByDropDown.sortByList);
    const viewOnPage = useSelector(store => store.app.viewOnPageDropDown.itemsOnPageIndex);
    const viewOnPageList = useSelector(store => store.app.viewOnPageDropDown.viewOnPageList);
    const dispatcher = useDispatch();

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
        </div>
    );
}

export default Index;