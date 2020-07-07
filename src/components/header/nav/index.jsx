import React from 'react';
import { Link } from "react-router-dom";
import { NAVI } from "../../../router/url";
import { connect } from "react-redux";
import * as ActionCreator from "../../../store/action_creator";

class Index extends React.Component {


    render() {

        const handleClick = () => {
            this.props.clearAllFiltersAct();
            this.props.clearProductImagesAct();
        }

        const renderLink = () => {

            return  NAVI.map((item)=>{
                const {
                    url,
                    title,
                    sortOrder,
                } = item || {};

                let shortRout = this.props?.location.split('/').slice(0,2).join('/');
                let shortUrl = url.split('/').slice(0,2).join('/');
                console.log(shortRout," ",shortUrl)

                return (
                        <li className={ shortRout == shortUrl ? "active" : '' } key={ sortOrder } onClick={ handleClick }>
                            <Link to={ url }>{ title }</Link>
                        </li>
                )
            })
        }

        return (
            <nav className="amado-nav">
                <ul>
                    {
                        renderLink()
                    }
                </ul>
            </nav>
        );
    }

}

const mapStateToProps = (store) => {
    return {
        location: store.router.location.pathname,
    }
}

const mapDispatchToProps = (dispatcher) => {
    return {
        clearAllFiltersAct: () => dispatcher(ActionCreator.clearAllFiltersAct()),
        clearProductImagesAct: () => dispatcher(ActionCreator.clearProductImagesAct()),
    }
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Index);
export default connected;