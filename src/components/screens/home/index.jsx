import React from 'react';
import { connect } from 'react-redux';
import * as ActionCreator from '../../../store/action_creator';
import ProductCardPreview from './product_card_preview';

class Index extends React.Component{

    componentDidMount() {
        this.props.loadCatalog();
    }

    render() {

        // const renderCard = () => {
        //     const aaa = this.props.goods;
        //     console.log(aaa[10]["title"])
        //
        // }

        const renderCard = () => {
            if (this.props.goods.length === 0) {
                console.log("NULL")
                return null;
            }
            return  this.props.goods.map((item, index)=>{
                const {
                    id,
                    title,
                    price,
                    img_url,
                } = item || {};

                if(index%6 === 0 || index === 40){
                    return <ProductCardPreview
                        key = { id }
                        id = { id }
                        price = { price }
                        title = { title }
                        imgUrl = { `http://test-api.ipromote.ru/img/${ img_url }` }
                    />
                }

            })
        }

        return (
            <div className="products-catagories-area clearfix">
                <div className="amado-pro-catagory clearfix" style={ {display: "flex", flexWrap: "wrap"} }>

                    { this.props.goods?.[0] && renderCard() }


                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        goods: store.app.goods,
    }
}

const mapDispatchToProps = (dispatcher) => {
    return {
        // вызывает внутри себя в action_creator - updateCatalogAct: (payload) => dispatcher(ActionCreators.updateCatalogAct(payload)),
        loadCatalog: () => dispatcher(ActionCreator.loadCatalog()),
    }
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Index);
export default connected;