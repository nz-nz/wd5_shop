import React from 'react';
import * as ActionCreator from "../../../../../store/action_creator";
import { connect } from "react-redux";
import Item from "./item";

class Index extends React.Component {
    componentDidMount() {
        this.props.loadBrands();
    }

    render() {
        const renderItem =() => {

            if (this.props.brands.length === 0) {
                console.log("NULL")
                return null;
            }

            return  this.props.brands.map((item)=>{
                const {
                    id,
                    title,
                } = item || {};

                return <Item
                    key = { id }
                    id = { id }
                    title = { title }
                    isActive = { this.props.filters?.brand?.includes(id) }
                />

            })
        }

        return (
            <div className="widget brands mb-50">
                <h6 className="widget-title mb-30">Brands</h6>

                <div className="widget-desc">
                    {
                        this.props.brands?.[0] && renderItem()
                    }
                </div>
            </div>
        );
    }

}


const mapStateToProps = (store) => {
    return {
        brands: store.app.brands,
        filters: store.app.filters,
        location: store.router.location.pathname,
    }
}

const mapDispatchToProps = (dispatcher) => {
    return {
        loadBrands: () => dispatcher(ActionCreator.loadBrands()),
    }
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Index);
export default connected;