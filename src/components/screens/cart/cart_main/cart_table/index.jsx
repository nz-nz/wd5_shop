import React from 'react';
import CartItem from './cart_item';
import {useSelector} from "react-redux";

function Index() {

    const cartList = useSelector(store => store.app.cart);

    const renderCartItem = () => {
        return Object.values(cartList).map(item => {
            const {
                id,
                img,
                title,
                price,
                cnt,
                max
            } = item
            return <CartItem
                key={ id }
                id={ id }
                img={ `http://test-api.ipromote.ru/img/${ img.large }` }
                title={ title }
                price={ price }
                cnt={ cnt }
                max={ max }
            />
        })
    }

    return (
        <div className="cart-table clearfix">
            <table className="table table-responsive" tabIndex="1"
                   style={ {overflow: "hidden", outline: "none"} }>

                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                </thead>

                <tbody>

                {
                    Object.keys(cartList).length !== 0 && renderCartItem()
                }

                {/*<CartItem/>*/}
                {/*<CartItem/>*/}
                {/*<CartItem/>*/}

                </tbody>

            </table>
        </div>
    );
}

export default Index;