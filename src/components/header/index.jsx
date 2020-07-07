import React, {useState} from 'react';
import Logo from './logo';
import MobileNav from './mobile_nav';
import Nav from './nav';
import Buttons from './buttons';
import CartBlock from './cart_block';
import Social from './social';

function Index() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={ isOpen ? "header-area clearfix bp-xs-on" : "header-area clearfix"}>
            <Logo/>
            <MobileNav onClick={ () => setIsOpen(!isOpen) }/>
            <Nav/>
            <Buttons/>
            <CartBlock/>
            <Social/>
        </header>
    );
}

export default Index;