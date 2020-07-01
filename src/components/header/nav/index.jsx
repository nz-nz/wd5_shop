import React from 'react';
import { Link } from "react-router-dom";
import { NAVI } from "../../../router/url";
import {connect} from "react-redux";
import * as ActionCreator from "../../../store/action_creator";
import * as URL from '../../../router/url';

class Index extends React.Component {

    render() {

        const renderLink = () => {

            return  NAVI.map((item)=>{
                const {
                    url,
                    title,
                    sortOrder,
                } = item || {};

                let shortRout = this.props?.location.split('/').slice(0,2).join('/');
                // console.log(shortRout," ",url)

                return (
                        <li className={ shortRout == url ? "active" : '' } key={ sortOrder } onClick={ this.props.clearAllFiltersAct }>
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
    }
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Index);
export default connected;