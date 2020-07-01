import React from 'react';
import Item from './item';
import * as ActionCreator from "../../../../../store/action_creator";
import {connect} from "react-redux";
import {string} from "prop-types";

class Index extends React.Component {

    componentDidMount() {
        this.props.loadCategories();
    }

    render() {


        const renderItem =() => {

            if (this.props.categories.length === 0) {
                console.log("NULL")
                return null;
            }

            return  this.props.categories.map((item)=>{
                const {
                    id,
                    title,
                } = item || {};
                const titleEng = item["5"];

                return <Item
                    key = { id }
                    id = { id }
                    title = { title }
                    titleEng = { titleEng }
                    isActive = { this.props.location.split('/').pop() == titleEng && this.props.filters?.category?.includes(id) }
                />

            })
        }

        return (
            <div className="widget catagory mb-50">

                <h6 className="widget-title mb-30">Categories</h6>

                <div className="catagories-menu">
                    <ul>
                        { this.props.categories?.[0] && renderItem() }
                    </ul>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (store) => {
    return {
        categories: store.app.categories,
        filters: store.app.filters,
        location: store.router.location.pathname,
    }
}

const mapDispatchToProps = (dispatcher) => {
    return {
        loadCategories: () => dispatcher(ActionCreator.loadCategories()),
    }
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Index);
export default connected;