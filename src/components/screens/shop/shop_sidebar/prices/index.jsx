import React from 'react';
import * as ActionCreator from "../../../../../store/action_creator";
import { connect } from "react-redux";
import Item from "./item";

class Index extends React.Component {
    componentDidMount() {
        this.props.loadPriceRanges();
    }

    render() {

        const renderItem = () => {

            if (this.props.priceRanges.length === 0) {
                console.log("NULL")
                return null;
            }

            const {
                id,
                priceMin,
                priceMax,
            } = this.props.priceRanges[0] || {};

            return  <Item
                key = { id }
                priceMin = { priceMin }
                priceMax = { priceMax }
                isFilterNotEmpty = { !!this.props.filters.price && Object.keys(this.props.filters?.price).length !== 0 }
            />
        }

        return (
            <div className="widget price mb-50">
                <h6 className="widget-title mb-30">Price</h6>

                {
                    this.props.priceRanges?.[0] && renderItem()
                }

            </div>
        );
    }

}

const mapStateToProps = (store) => {
    return {
        priceRanges: store.app.priceRanges,
        filters: store.app.filters,
    }
}

const mapDispatchToProps = (dispatcher) => {
    return {
        loadPriceRanges: () => dispatcher(ActionCreator.loadPriceRanges()),
    }
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Index);
export default connected;