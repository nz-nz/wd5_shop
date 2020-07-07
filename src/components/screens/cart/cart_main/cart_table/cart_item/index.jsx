import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {updateCartAct} from '../../../../../../store/action_creator';
// import cart1 from '../../../../../../assets/img/bg-img/cart1.jpg';
function Index(props) {

    const [qty, setQty] = useState(1);
    const dispatcher = useDispatch();

    const {
        id,
        img,
        title,
        price,
        cnt,
        max,
    } = props;

    useEffect(() => {
        setQty(cnt);
    }, [])

    const updateCart = (createdAtTimestamp, id, cnt) => {
        dispatcher(updateCartAct({
            [createdAtTimestamp]: {
                id: id,
                cnt: cnt,
            }
        }));
    }

    const handleClick = (e, name) => {
        const createdAt = new Date();
        const createdAtTimestamp = createdAt.getTime();
        if (name === 'plus') {
            const value = +qty + 1;
            setQty(value);
            updateCart(createdAtTimestamp, id, value);
        }
        else if(qty > 0) {
            const value = +qty - 1;
            setQty(value);
            updateCart(createdAtTimestamp, id, value);
        }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const createdAt = new Date();
        const createdAtTimestamp = createdAt.getTime();
        setQty(value);
        updateCart(createdAtTimestamp, id, value);
    }

    let style = {};
    if (qty > +max)
        style = { backgroundColor: "#ff7675" };

    return (
        <tr>

            <td className="cart_product_img">
                <a href="#"><img src={ img } alt="Product"/></a>
            </td>

            <td className="cart_product_desc">
                <h5>{ title }</h5>
            </td>

            <td className="price">
                <span>${ price }</span>
            </td>

            <td className="qty">
                <div className="qty-btn d-flex" >
                    <p style={ style }>
                        Qty
                    </p>
                    <div className="quantity" >
                        <span className="qty-minus" onClick={ (e) => handleClick(e, 'minus') }>
                            <i className="fa fa-minus" aria-hidden="true"></i>
                        </span>
                        <input style={ style }
                               value={ qty <= 0 ? 0 : qty }
                               onChange={ handleChange }
                               type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity"/>
                        <span className="qty-plus" onClick={ (e) => handleClick(e, 'plus')}>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </td>

        </tr>
    );
}

export default Index;