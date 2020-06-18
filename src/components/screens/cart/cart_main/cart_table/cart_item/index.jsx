import React from 'react';
import cart1 from '../../../../../../assets/img/bg-img/cart1.jpg';
function Index(props) {
    return (
        <tr>

            <td className="cart_product_img">
                <a href="#"><img src={ cart1 } alt="Product"/></a>
            </td>

            <td className="cart_product_desc">
                <h5>White Modern Chair</h5>
            </td>

            <td className="price">
                <span>$130</span>
            </td>

            <td className="qty">
                <div className="qty-btn d-flex">
                    <p>Qty</p>
                    <div className="quantity">
                        <span className="qty-minus" onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty > 1 ) effect.value--;return false;">
                            <i className="fa fa-minus" aria-hidden="true"></i>
                        </span>
                        <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="1"/>
                        <span className="qty-plus" onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </td>

        </tr>
    );
}

export default Index;