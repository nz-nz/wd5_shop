import React from 'react';
import pro_big_1 from '../../../../assets/img/product-img/pro-big-1.jpg';
import pro_big_2 from '../../../../assets/img/product-img/pro-big-2.jpg';
import pro_big_3 from '../../../../assets/img/product-img/pro-big-3.jpg';
import pro_big_4 from '../../../../assets/img/product-img/pro-big-4.jpg';

function Index() {
    return (
        <div className="single_product_thumb">
            <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li className="" data-target="#product_details_slider" data-slide-to="0"
                        style={ {backgroundImage: `url( ${pro_big_1} )`} }>
                    </li>
                    <li data-target="#product_details_slider" data-slide-to="1"
                        style={ {backgroundImage: `url( ${pro_big_2} )`} }
                        className="active">
                    </li>
                    <li data-target="#product_details_slider" data-slide-to="2"
                        style={ {backgroundImage: `url( ${pro_big_3} )`} } className="">
                    </li>
                    <li data-target="#product_details_slider" data-slide-to="3"
                        style={ {backgroundImage: `url( ${pro_big_4} )`} } className="">
                    </li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <a className="gallery_img" href={ pro_big_1 }>
                            <img className="d-block w-100" src={ pro_big_1 }
                                 alt="First slide"/>
                        </a>
                    </div>
                    <div className="carousel-item active">
                        <a className="gallery_img" href={ pro_big_2 }>
                            <img className="d-block w-100" src={ pro_big_2 }
                                 alt="Second slide"/>
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a className="gallery_img" href={ pro_big_3 }>
                            <img className="d-block w-100" src={ pro_big_3 }
                                 alt="Third slide"/>
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a className="gallery_img" href={ pro_big_4 }>
                            <img className="d-block w-100" src={ pro_big_4 }
                                 alt="Fourth slide"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;