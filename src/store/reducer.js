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
    }
    return store;
}

export default (history) => combineReducers({
    router: connectRouter(history),
    app: rootReducer,
});