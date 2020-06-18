import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import * as ACT from './actions';

const initialState = {
    goods: {} , // список товаров подгружаемый с бэка
    categories: {}, // массив всех категорий
    brands: {}, // все бренды
    colors: {}, // все доступные в каталоге цвета (основные)
    priceRanges: {}, // диапазон цен.
    filters: {
        // category: {}, // фильтр по категории
        // brand: [], // фильтр по бренду
        // color: {}, // по цвету
        // price: {}, // по цене
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
            let arr = [];
            if (store.filters.brand)
                arr = [...store.filters.brand];
            if(!arr.includes(action.payload)){
                arr.push(action.payload);
            } else {
                arr = arr.filter(elem => elem != action.payload);
            }
            if (store.filters.brand){
                if (Object.keys(arr).length == 0) {
                    const obj = Object.fromEntries(Object.entries(store.filters).filter(([k,v])=>(k != "brand")));
                    return {
                        ...store,
                        filters: { ...obj }
                    };
                }
            }
            return {
                ...store,
                filters: { ...store.filters, brand: arr }
            };
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
    }
    return store;
}

export default (history) => combineReducers({
    router: connectRouter(history),
    app: rootReducer,
});