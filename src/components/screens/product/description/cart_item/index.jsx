import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { addItemToCartAct } from '../../../../../store/action_creator';
import {toastr} from "react-redux-toastr";

function Index(props) {
    const [qty, setQty] = useState(1);

    const goods = useSelector(store => store.app.goods);
    const dispatcher = useDispatch();
    let targetItem;

    if (Object.keys(goods).length !== 0) {
        targetItem = goods.filter(item => item.id == props.id)[0];
    }

    const {
        id,
        img_url,
        title,
        price,
        available,
    } = targetItem || {};

    const handleChange = (e) => {
        const value = e.target.value;
        setQty(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const createdAt = new Date();
        const createdAtTimestamp = createdAt.getTime();
        dispatcher(addItemToCartAct({
            [createdAtTimestamp]: {
                id: id,
                img: {
                    small: '',
                    large: img_url,
                },
                title: title,
                price: price,
                cnt: qty,
                max: available,
                created_at: createdAt,
                created_at_timestamp: createdAtTimestamp,
                updated_at: createdAt,
                updated_at_timestamp: createdAtTimestamp,
            }
        }));
        toastr.success('Товар добавлен!', title);
    }

    // console.log(goods);
    console.log(targetItem);

    return (
        <form className="cart clearfix" onSubmit={ handleSubmit }>
            <div className="cart-btn d-flex mb-50">
                <p>Qty</p>
                <div className="quantity">
                    <span className="qty-minus" onClick={ () => (qty <= 1 ? '' : setQty( +qty - 1)) }>
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </span>
                    <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value={ qty } onChange={ handleChange }/>
                    <span className="qty-plus" onClick={ () => setQty( +qty + 1) }>
                        <i className="fa fa-caret-up" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <button type="submit" name="addtocart" value="5" className="btn amado-btn" onSubmit={ handleSubmit }>Add to cart
            </button>
        </form>
    );
}

export default Index;