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
            } = this.props;

            if (this.props.goods.length === 0) {
                console.log("NULL")
                return null;
            }
            let arr = goods;
            if (filters.category && Object.keys(filters.category).length !== 0){
                console.log("filter category");
                arr = arr.filter(item => item.category == filters.category);
            }
            if (filters.brand && Object.keys(filters.brand).length !== 0)  {
                console.log("filter brand");
                arr = arr.filter(item => filters.brand.includes(item.brand));
            }
            if (filters.color && Object.keys(filters.color).length !== 0) {
                console.log("filter color");
                arr = arr.filter(item => item.colors == filters.color);
            }
            if (filters.price && Object.keys(filters.price).length !== 0) {
                console.log("filter price");
                arr = arr.filter(item => (item.price >= filters.price[0] && item.price <= filters.price[1]));
            }

            console.log(arr)
            return  arr.map((item, index)=>{
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
    }
}

const mapDispatchToProps = (dispatcher) => {
    return {
        // вызывает внутри себя в action_creator - updateCatalogAct: (payload) => dispatcher(ActionCreators.updateCatalogAct(payload)),
        loadCatalog: () => dispatcher(ActionCreator.loadCatalog()),
    }
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Index);
export default connected;