import React, { useState } from 'react';
import DropDown from './../../../../../dropdown';
import { useDispatch ,useSelector } from "react-redux";
import { updateItemsOnPageAct} from '../../../../../../store/action_creator';

const sortByList = ["Date", "Newest", "Popular"];

function Index() {

    const [sortBy, setSortBy] = useState(0);
    const viewOnPage = useSelector(store => store.app.viewOnPageDropDown.itemsOnPageIndex);
    const viewOnPageList = useSelector(store => store.app.viewOnPageDropDown.viewOnPageList);
    const dispatcher = useDispatch();

    const handleChangeDropDown = (index, name) => {
        switch (name) {
            case "sortBy":
                setSortBy(index);
                break;
            case "View":
                dispatcher(updateItemsOnPageAct(index));
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