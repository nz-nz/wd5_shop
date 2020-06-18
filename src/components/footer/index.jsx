import React from 'react';
import logo2 from '../../assets/img/core-img/logo2.png'
import { Link } from "react-router-dom";
import * as URL from '../../router/url';
import { connect } from "react-redux";
import { NAVI } from "../../router/url";

class Index extends React.Component {

    render() {
        const renderLink = () => {

            return  NAVI.map((item)=>{
                const {
                    url,
                    title,
                    sortOrder,
                } = item || {};

                const shortRout = this.props?.location.split('/').slice(0,2).join('/');
                // console.log(shortRout," ",url)

                let className = "nav-item";
                if (shortRout == url)
                    className += " active";

                return (
                    <li className={ className } key={ sortOrder }>
                        <Link className="nav-link" to={ url }>{ title }</Link>
                    </li>
                )
            })
        }

        return (
            <footer className="footer_area clearfix">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-4">
                            <div className="single_widget_area">
                                <div className="footer-logo mr-50">
                                    <Link to={ URL.ROOT }><img src={ logo2 } alt=""/></Link>
                                </div>
                                <p className="copywrite">
                                    Copyright ©
                                    <script>document.write(new Date().getFullYear());</script>
                                    2020 All rights reserved | This template is made with
                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                    by
                                    <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="single_widget_area">
                                <div className="footer_menu">
                                    <nav className="navbar navbar-expand-lg justify-content-end">
                                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                data-target="#footerNavContent" aria-controls="footerNavContent"
                                                aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
                                        <div className="collapse navbar-collapse" id="footerNavContent">
                                            <ul className="navbar-nav ml-auto">
                                                {
                                                    renderLink()
                                                }
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

}

const mapStateToProps = (store) => {
    return {
        location: store.router.location.pathname,
    }
}

const connected = connect(mapStateToProps)(Index);
export default connected;