import React from 'react';
import TopBar from './top_bar';
import ProductItem from './product_item';
import Pagination from './pagination';
import * as ActionCreator from "../../../../store/action_creator";
import {connect} from "react-redux";


class Index extends React.Component {

    componentDidMount() {
        this.props.loadCatalog();
    }

    render() {

        const renderCard = () => {
            const {
                goods,
                filters,
                itemsOnPageIndex,
                viewOnPageList,
                startItem,
                updateTotalGoodsQty,
                sortByIndex,
                sortByList,
            } = this.props;

            if (this.props.goods.length === 0) {
                console.log("NULL")
                return null;
            }
            let arr = goods;
            updateTotalGoodsQty(arr.length);
            if (filters.category && Object.keys(filters.category).length !== 0){
                console.log("filter category");
                arr = arr.filter(item => item.category == filters.category);
                updateTotalGoodsQty(arr.length);
            }
            if (filters.brand && Object.keys(filters.brand).length !== 0)  {
                console.log("filter brand");
                arr = arr.filter(item => filters.brand.includes(item.brand));
                updateTotalGoodsQty(arr.length);
            }
            if (filters.color && Object.keys(filters.color).length !== 0) {
                console.log("filter color");
                arr = arr.filter(item => item.colors == filters.color);
                updateTotalGoodsQty(arr.length);
            }
            if (filters.price && Object.keys(filters.price).length !== 0) {
                console.log("filter price");
                arr = arr.filter(item => (item.price >= filters.price[0] && item.price <= filters.price[1]));
                updateTotalGoodsQty(arr.length);
            }
            if (sortByList[sortByIndex] == "Date") {
                console.log("Sort by Date");
                arr = arr.map(item => {
                    item.unixTime = new Date(item.dt_in).getTime();
                    return item;
                }).sort((a, b) => (a.unixTime - b.unixTime));
            }
            if (sortByList[sortByIndex] == "Newest") {
                console.log("Sort by Newest");
                arr = arr.map(item => {
                    item.unixTime = new Date(item.dt_in).getTime();
                    return item;
                }).sort((a, b) => (b.unixTime - a.unixTime));
            }
            if (sortByList[sortByIndex] == "Popular") {
                console.log("Notice _ Sort by Popular _ is Under construction");
            }
            console.log(arr);
            // console.log(viewOnPageList[itemsOnPageIndex]);
            return  arr.slice(startItem, (startItem + viewOnPageList[itemsOnPageIndex])).map((item)=>{
                const {
                    id,
                    title,
                    price,
                    img_url,
                } = item || {};

                    return <ProductItem
                        key = { id }
                        id = { id }
                        price = { price }
                        title = { title }
                        imgUrl1 = { `http://test-api.ipromote.ru/img/${ img_url }` }
                        isFullScreenItem = { this.props.isFullScreenItem }
                    />

            })
        }

        return (
            <div className="amado_product_area section-padding-100">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">

                            <TopBar/>

                        </div>
                    </div>

                    <div className="row">

                        { this.props.goods?.[0] && renderCard() }

                    </div>

                    <div className="row">
                        <div className="col-12">

                            <Pagination/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (store) => {
    return {
        goods: store.app.goods,
        filters: store.app.filters,
        isFullScreenItem: store.app.viewToggle.isFullScreenItem,
        itemsOnPageIndex: store.app.viewOnPageDropDown.itemsOnPageIndex,
        viewOnPageList: store.app.viewOnPageDropDown.viewOnPageList,
        startItem: store.app.itemsOnPageInfo.startItemOnPageZeroIndex,
        sortByIndex: store.app.sortByDropDown.sortByIndex,
        sortByList: store.app.sortByDropDown.sortByList,
    }
}

const mapDispatchToProps = (dispatcher) => {
    return {
        // вызывает внутри себя в action_creator - updateCatalogAct: (payload) => dispatcher(ActionCreators.updateCatalogAct(payload)),
        loadCatalog: () => dispatcher(ActionCreator.loadCatalog()),
        updateTotalGoodsQty: (qty) => dispatcher(ActionCreator.updateTotalGoodsQtyAct(qty)),
    }
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Index);
export default connected;