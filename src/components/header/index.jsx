import React from 'react';
import Logo from './logo';
import MobileNav from './mobile_nav';
import Nav from './nav';
import Buttons from './buttons';
import CartBlock from './cart_block';
import Social from './social';

function Index() {
    return (
        <header className="header-area clearfix">
            <Logo/>
            <MobileNav/>
            <Nav/>
            <Buttons/>
            <CartBlock/>
            <Social/>
        </header>
    );
}

export default Index;