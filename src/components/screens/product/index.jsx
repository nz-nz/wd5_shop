import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    categoryFromWidgetAct,
    loadCatalog,
    loadCategories,
    loadProductImages,
    clearProductImagesAct,
} from '../../../store/action_creator';
import Breadcrumb from './breadcrumb';
import Thumbs from './thumbs';
import Description from './description';

function Index(props) {

    const goods = useSelector(store => store.app.goods);
    const categories = useSelector(store => store.app.categories);
    const images = useSelector(store => store.app.productImages);
    const dispatcher = useDispatch();
    let targetItem;
    let targetCategory;
    let categoryUrl;

    useEffect(()=>{
        dispatcher(loadProductImages(props.match.params.code));
    },[])

    const renderThumb = () => {
        return <Thumbs images={ images } />
    }

    if (Object.keys(goods).length == 0) {
        dispatcher(loadCatalog());
    }
    if (Object.keys(categories).length == 0) {
        dispatcher(loadCategories());
    }
    if (Object.keys(goods).length != 0) {
        targetItem = goods.filter(item => item.id == props.match.params.code)[0];
    }

    const {
        id,
        img_url,
        title,
        price,
        available,
        category,
    } = targetItem || {};

    if (Object.keys(categories).length != 0) {
        targetCategory = categories.filter(item => item.id == category)[0]?.title;
        categoryUrl = categories.filter(item => item.id == category)[0]?.url;
    }

    // console.log(targetItem);
    // console.log(targetCategory);

    const handleClick = (categoryId) => {
        dispatcher(categoryFromWidgetAct(categoryId));
        dispatcher(clearProductImagesAct());
    }


    // console.log(props.match.params.code);
    return (
        <div className="single-product-area section-padding-100 clearfix">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">

                        <Breadcrumb category={ targetCategory } url={ categoryUrl } title={ title } onClick={ () => handleClick(category) } />

                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-lg-7">

                        {
                            images?.[0] && renderThumb()
                        }

                    </div>
                    <div className="col-12 col-lg-5">

                        <Description title={ title } price={ price } id={ id }/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;