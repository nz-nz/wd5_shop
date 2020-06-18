import React from 'react';
import * as ActionCreator from "../../../../../store/action_creator";
import { connect } from "react-redux";
import Item from "./item";
import {categoryFromWidgetAct} from "../../../../../store/action_creator";

class Index extends React.Component {
    componentDidMount() {
        this.props.loadColors();
    }

    handleClick = (e, id) => {
        if (this.props.filters?.color?.includes(id))
            return this.props.colorFromWidgetAct("");
        this.props.colorFromWidgetAct(id);
    }

    render() {
        const renderItem =() => {

            if (this.props.colors.length === 0) {
                console.log("NULL")
                return null;
            }

            return  this.props.colors.map((item)=>{
                const {
                    id,
                    color,
                } = item || {};

                return <Item
                    key = { id }
                    color = { color }
                    onClick = { (e) => this.handleClick(e, id) }
                    isActive = { this.props.filters?.color?.includes(id) }
                />

            })
        }

        return (
            <div className="widget color mb-50">
                <h6 className="widget-title mb-30">Color</h6>

                <div className="widget-desc">
                    <ul className="d-flex">
                        {
                            this.props.colors?.[0] && renderItem()
                        }
                    </ul>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (store) => {
    return {
        colors: store.app.colors,
        filters: store.app.filters,
    }
}

const mapDispatchToProps = (dispatcher) => {
    return {
        loadColors: () => dispatcher(ActionCreator.loadColors()),
        colorFromWidgetAct: (payload) => dispatcher(ActionCreator.colorFromWidgetAct(payload)),
    }
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Index);
export default connected;