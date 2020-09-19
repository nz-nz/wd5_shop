import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {reducer as toastrReducer} from 'react-redux-toastr';
import * as ACT from './actions';

const initialState = {
    goods: {} , // список товаров подгружаемый с бэка
    categories: {}, // массив всех категорий
    brands: {}, // все бренды
    colors: {}, // все доступные в каталоге цвета (основные)
    priceRanges: {}, // диапазон цен.
    productImages: {},
    filters: {
        // category: {}, // фильтр по категории
        // brand: [], // фильтр по бренду
        // color: {}, // по цвету
        // price: {}, // по цене
    },
    cart: localStorage.cart && JSON.parse(localStorage.cart).length !== 0 ? JSON.parse(localStorage.cart) : [],
    // {
    //     id: 102,
    //     img: {
    //         small: Image1,
    //         large: "../assets/img/pro-big-3.jpg",
    //     },
    //     title: 'White Modern Chair',
    //     price: 130,
    //     cnt: 1,
    //     max: 5,
    //     updated_at: Date
    //     created_at: Date
    // },
    sortByDropDown: {
        sortByIndex: 0, // индекс для корректного отображения значения из массива sortByList
        sortByList: ["Date", "Newest", "Popular"],
        // activeSortBy: "", // "Date", "Newest", "Popular" - в зависимости от значения sortBy производится сортировка
    },
    viewOnPageDropDown: {
        itemsOnPageIndex: 0, // индекс для корректного отображения значения из массива viewOnPageList
        viewOnPageList: [12, 24, 48, 96],
    },
    viewToggle: {
        isFullScreenItem: 0,
    },
    itemsOnPageInfo: {
        itemQtyAfterFiltering: 0,
        startItemOnPageZeroIndex: 0,
    },
    isLoading: {}, // объект, характеризующий состояние загрузки данных с бэка, внутри будут ключи для каждого из урлов АПИ
};

function rootReducer(store = initialState, action) {
    switch (action.type) {
        case ACT.UPDATE_CATALOG:
            return { ...store, goods: action.payload };
        case ACT.UPDATE_CATEGORIES:
            return { ...store, categories: action.payload };
        case ACT.UPDATE_BRANDS:
            return { ...store, brands: action.payload };
        case ACT.UPDATE_COLORS:
            return { ...store, colors: action.payload };
        case ACT.UPDATE_PRICE_RANGES:
            return { ...store, priceRanges: action.payload };
        case ACT.UPDATE_FILTERS:
            return {
                ...store,
                filters: { ...store.filters, ...action.payload }
            };
        case ACT.UPDATE_BRAND_FILTERS:
            let brandFiltersArr = [];
            if (store.filters.brand)
                brandFiltersArr = [...store.filters.brand];
            if(!brandFiltersArr.includes(action.payload)){
                brandFiltersArr.push(action.payload);
            } else {
                brandFiltersArr = brandFiltersArr.filter(elem => elem !== action.payload);
            }
            if (store.filters.brand){
                if (Object.keys(brandFiltersArr).length === 0) {
                    const obj = Object.fromEntries(
                        Object.entries(store.filters).filter(([k,v])=>(k !== "brand"))
                    );
                    return {
                        ...store,
                        filters: { ...obj }
                    };
                }
            }
            return {
                ...store,
                filters: { ...store.filters, brand: brandFiltersArr }
            };
        case ACT.UPDATE_PRODUCT_IMAGES:
            return { ...store, productImages: action.payload };
        case ACT.CLEAR_PRODUCT_IMAGES:
            return { ...store, productImages: null };
        case ACT.CLEAR_ALL_FILTERS:
            console.log("clear all filters")
            return {
                ...store,
                filters: {},
            }
        case ACT.UPDATE_LOADING_STATUS:
            return {
                ...store,
                isLoading: { ...store.isLoading, ...action.payload }
            };
        case ACT.UPDATE_SORT_BY_INDEX:
            return {
                ...store,
                sortByDropDown:  { ...store.sortByDropDown, sortByIndex: action.payload, },
            }
        case ACT.UPDATE_ITEMS_ON_PAGE_INDEX:
            return {
                ...store,
                viewOnPageDropDown:  { ...store.viewOnPageDropDown, itemsOnPageIndex: action.payload, },
            }
        case ACT.UPDATE_TOTAL_GOODS_QTY:
            return {
                ...store,
                itemsOnPageInfo: { ...store.itemsOnPageInfo, itemQtyAfterFiltering: action.payload, }
            }
        case ACT.UPDATE_START_ITEM_ON_PAGE_ZERO_INDEX:
            return {
                ...store,
                itemsOnPageInfo: { ...store.itemsOnPageInfo, startItemOnPageZeroIndex: action.payload, }
            }
        case ACT.VIEW_TOGGLE:
            return {
                ...store,
                viewToggle: { ...store.viewToggle, isFullScreenItem: action.payload, }
            }
        case ACT.ADD_ITEM_TO_CART:
            let storeCartBuffer1 = [];
            storeCartBuffer1 = store.cart;
            const cartArr = [];
            if (localStorage.cart && JSON.parse(localStorage.cart).length !== 0) {
                storeCartBuffer1 = JSON.parse(localStorage.cart);
                console.log("ADD_ITEM_TO_CART");
                console.log(storeCartBuffer1);
            }
            if (Object.keys(storeCartBuffer1).length === 0) {
                cartArr.push(Object.values(action.payload)[0]);
                localStorage.setItem('cart', JSON.stringify(cartArr));
                return {
                    ...store,
                    cart: cartArr,
                }
            }

            cartArr = storeCartBuffer1.map(item => {
                if (item.id === Object.values(action.payload)[0].id) {
                    item.cnt += +Object.values(action.payload)[0].cnt;
                    item.updated_at = Object.values(action.payload)[0].updated_at;
                    item.updated_at_timestamp = Object.values(action.payload)[0].updated_at_timestamp;
                }
                return item;
            });
            if (!cartArr.find(item => item.id === Object.values(action.payload)[0].id))
                cartArr.push(Object.values(action.payload)[0]);

            localStorage.setItem('cart', JSON.stringify(cartArr));

            return {
                ...store,
                cart: cartArr,
            }
        case ACT.UPDATE_CART:
            let storeCartBuffer2 = [];
            storeCartBuffer2 = store.cart;
            let cartUpdateArr = [];
            if (localStorage.cart && JSON.parse(localStorage.cart).length !== 0) {
                storeCartBuffer2 = JSON.parse(localStorage.cart);
                console.log("ADD_ITEM_TO_CART");
                console.log(storeCartBuffer2);
            }
            storeCartBuffer2.forEach(item => {
                if (item.id === Object.values(action.payload)[0].id) {
                    item.cnt = +Object.values(action.payload)[0].cnt;
                    item.updated_at = Object.values(action.payload)[0].updated_at;
                    item.updated_at_timestamp = Object.values(action.payload)[0].updated_at_timestamp;
                }
                if (item.cnt !== 0) {
                    cartUpdateArr.push(item);
                }
            });

            localStorage.setItem('cart', JSON.stringify(cartUpdateArr));

            return {
                ...store,
                cart: cartUpdateArr,
            }
    }
    return store;
}

export default (history) => combineReducers({
    router: connectRouter(history),
    app: rootReducer,
    toastr: toastrReducer // <- Mounted at toastr.
});