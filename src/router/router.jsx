import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as URL from './url';

const RootPage = lazy(() => import('../components/screens/home'));
const ShopPage = lazy(() => import('../components/screens/shop'));
const ProductPage = lazy(() => import('../components/screens/product'));
const CartPage = lazy(() => import('../components/screens/cart'));
const CheckoutPage = lazy(() => import('../components/screens/checkout'));

export default (
    <Switch>
        {
            /*
            exact - булевый пропс, означает, что маршрут должен отработать именно на указанном пути,
            т.е. "/" как бы включен внутрь любого более широкого урла, наприиер "/details", соответственно
            мы хотим сказать чтобы отработал именно "/"

            path - путь URL в строке запроса в браузере

            component - компонент React  который надо загрузить для данного урла
             */
        }
        <Route exact path={ URL.ROOT } component={ RootPage } />
        <Route path={ URL.SHOP } component={ ShopPage } />
        <Route exact path={ URL.PRODUCT_DETAILS_CODE } component={ ProductPage } />
        <Route exact path={ URL.CART } component={ CartPage } />
        <Route exact path={ URL.CHECKOUT } component={ CheckoutPage } />
    </Switch>
);