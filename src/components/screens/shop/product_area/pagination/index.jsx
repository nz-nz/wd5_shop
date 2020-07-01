import React from 'react';
import PageItem from './page_item';
import * as ActionCreator from '../../../../../store/action_creator';
import { useDispatch, useSelector } from "react-redux";

function Index() {

    const dispatcher = useDispatch();
    const qty = useSelector(store => store.app.itemsOnPageInfo.itemQtyAfterFiltering);
    const viewOnPageList = useSelector(store => store.app.viewOnPageDropDown.viewOnPageList);
    const itemsOnPageIndex = useSelector(store => store.app.viewOnPageDropDown.itemsOnPageIndex);
    const startItemOnPageZeroIndex = useSelector(store => store.app.itemsOnPageInfo.startItemOnPageZeroIndex);
    const startItemOnPage = startItemOnPageZeroIndex + 1;

    const handleClick = (e, item) => {
        dispatcher(ActionCreator.updateStartItemOnPageZeroIndexAct((item - 1) * viewOnPageList[itemsOnPageIndex]))
    }

    function pagination(qty) {
        let arr = [];
        let i = 1;
        while (qty > 0) {
            arr.push(i);
            i++;
            qty -= viewOnPageList[itemsOnPageIndex];
        }
        // console.log(arr)
        return  arr.map(item => {
            return <PageItem
                key={ item }
                isActive={ Math.floor(startItemOnPage/viewOnPageList[itemsOnPageIndex] + 1) == item }
                onClick={ (e) => handleClick(e, item) }
            >
                0{item}.
            </PageItem>;
        });
    }

    return (
        <nav aria-label="navigation">
            <ul className="pagination justify-content-end mt-50">
                {
                    pagination(qty)
                }
            </ul>
        </nav>
    );
}

export default Index;