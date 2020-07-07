import * as ACT from './actions'

export function loadData(url, func, typeForLoadingStatus) {
    const requestUrl = url;

    return (dispatcher) => {
        dispatcher(updateLoadingStatus({ [typeForLoadingStatus]: true }));

        const data = fetch(requestUrl);

        data
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                dispatcher(func(data.data));
                dispatcher(updateLoadingStatus({ [typeForLoadingStatus]: false }));
            })
            .catch((e) => {
                dispatcher(updateLoadingStatus({ [typeForLoadingStatus]: false }));
                console.log("ERROR while loading data from url", e);
             });
    }
}

export function loadCatalog() {

    const requestUrl = `http://test-api.ipromote.ru/API/CATALOG/FIND`;

    return (dispatcher) => {
        dispatcher(loadData(requestUrl, updateCatalogAct, "goods"));
    }
}

export function loadCategories() {

    const requestUrl = `http://test-api.ipromote.ru/API/CATEGORY/FIND`;

    return (dispatcher) => {
        dispatcher(loadData(requestUrl, updateCategoriesAct, "categories"));
    }
}

export function loadBrands() {

    const requestUrl = `http://test-api.ipromote.ru/API/BRAND/FIND`;

    return (dispatcher) => {
        dispatcher(loadData(requestUrl, updateBrandsAct, "brands"));
    }
}

export function loadColors() {

    const requestUrl = `http://test-api.ipromote.ru/API/COLOR/FIND`;

    return (dispatcher) => {
        dispatcher(loadData(requestUrl, updateColorsAct, "colors"));
    }
}

export function loadPriceRanges() {

    const requestUrl = `http://test-api.ipromote.ru/API/CATALOG/RANGE`;

    return (dispatcher) => {
        dispatcher(loadData(requestUrl, updatePriceRangesAct, "priceRanges"));
    }
}

export function loadProductImages(imageId) {

    const requestUrl = `http://test-api.ipromote.ru/API/IMAGE/FIND?cid=${imageId}`;

    return (dispatcher) => {
        dispatcher(loadData(requestUrl, updateProductImagesAct, "productImages"));
    }
}

export function updateProductImagesAct(payload) {
    return {
        type: ACT.UPDATE_PRODUCT_IMAGES,
        payload,
    }
}

export function clearProductImagesAct() {
    return {
        type: ACT.CLEAR_PRODUCT_IMAGES,
    }
}

export function updateCatalogAct(payload) {
    return {
        type: ACT.UPDATE_CATALOG,
        payload,
    }
}

export function updateCategoriesAct(payload) {
    return {
        type: ACT.UPDATE_CATEGORIES,
        payload,
    }
}

export function updateBrandsAct(payload) {
    return {
        type: ACT.UPDATE_BRANDS,
        payload,
    }
}

export function updateColorsAct(payload) {
    return {
        type: ACT.UPDATE_COLORS,
        payload,
    }
}

export function updatePriceRangesAct(payload) {
    return {
        type: ACT.UPDATE_PRICE_RANGES,
        payload,
    }
}

export function updateLoadingStatus(payload) {
    return {
        type: ACT.UPDATE_LOADING_STATUS,
        payload,
    }
}

export function categoryFromWidgetAct(payload) {
    return {
        type: ACT.UPDATE_FILTERS,
        payload: { category: payload, }
    }
}

export function brandFromWidgetAct(payload) {
    return {
        type: ACT.UPDATE_BRAND_FILTERS,
        payload,
    }
}

export function colorFromWidgetAct(payload) {
    return {
        type: ACT.UPDATE_FILTERS,
        payload: { color: payload },
    }
}

export function priceRangeFromWidgetAct(payload) {
    return {
        type: ACT.UPDATE_FILTERS,
        payload: { price: payload },
    }
}

export function clearAllFiltersAct() {
    return {
        type: ACT.CLEAR_ALL_FILTERS,
    }
}

export function updateItemsOnPageAct(payload) {
    return {
        type: ACT.UPDATE_ITEMS_ON_PAGE_INDEX,
        payload,
    }
}

export function updateItemsOnPageIndexAct(payload) {
    return {
        type: ACT.UPDATE_SORT_BY_INDEX,
        payload,
    }
}
export function updateTotalGoodsQtyAct(payload) {
    return {
        type: ACT.UPDATE_TOTAL_GOODS_QTY,
        payload,
    }
}

export function updateStartItemOnPageZeroIndexAct(payload) {
    return {
        type: ACT.UPDATE_START_ITEM_ON_PAGE_ZERO_INDEX,
        payload,
    }
}

export function viewToggleAct(payload) {
    return {
        type: ACT.VIEW_TOGGLE,
        payload,
    }
}

export function addItemToCartAct(payload) {
    return {
        type: ACT.ADD_ITEM_TO_CART,
        payload,
    }
}

export function updateCartAct(payload) {
    return {
        type: ACT.UPDATE_CART,
        payload,
    }
}