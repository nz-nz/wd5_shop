export const ROOT = "/";
export const SHOP = "/shop";
export const SHOP_CODE = `${ SHOP }/:code`;
export const PRODUCT_DETAILS = "/product-details"
export const PRODUCT_DETAILS_CODE = `${ PRODUCT_DETAILS }/:code`;
export const CART = "/cart";
export const CHECKOUT = "/checkout";

export const NAVI = [
    {
        url: ROOT,
        title: "HOME",
        sortOrder: 1,
    },
    {
        url: SHOP,
        title: "SHOP",
        sortOrder: 2,
        child: [
            {
                url: `${SHOP}`
            },
            {

            },
        ]
    },
    {
        url: `${ PRODUCT_DETAILS }/${ 1 }`,
        title: "PRODUCT",
        sortOrder: 3,
    },
    {
        url: CART,
        title: "CART",
        sortOrder: 4,
    },
    {
        url: CHECKOUT,
        title: "CHECKOUT",
        sortOrder: 5,
    },
]