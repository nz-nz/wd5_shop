import React from 'react';
import Showing from './showing';
import ViewToggle from './view_toggle';
import { useSelector } from "react-redux";

function Index() {

    const totalQty = useSelector((store)=>store.app.itemsOnPageInfo.itemQtyAfterFiltering);
    const startItemOnPageZeroIndex = useSelector((store)=>store.app.itemsOnPageInfo.startItemOnPageZeroIndex);
    const {
        itemsOnPageIndex,
        viewOnPageList
    } = useSelector((store)=>store.app.viewOnPageDropDown);

    return (
        <div className="total-products">
            <Showing
                start={ (startItemOnPageZeroIndex + 1) > totalQty ? totalQty : (startItemOnPageZeroIndex + 1) }
                end={ (startItemOnPageZeroIndex + viewOnPageList[itemsOnPageIndex]) >= totalQty ? totalQty : (startItemOnPageZeroIndex + viewOnPageList[itemsOnPageIndex]) }
                totalQty={ totalQty }
            />
            <ViewToggle/>
        </div>
    );
}

export default Index;