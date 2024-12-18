export function filterReducer(state = productsFiltarInitialState, action) {
    if (action.type === "SetProducts") {
        return { ...state, allProducts: action.payload, products: action.payload };
    }

    if (action.type === "Filter") {
        return {
            ...state,
            products: state.allProducts.filter((product) => product.liked),
        };
    }

    if (action.type === "ShowAll") {
        return { ...state, products: state.allProducts };
    }

    return state;
}

export const productsFiltarInitialState = {
    allProducts: [],
    products: [],
};


export function selectFilter(state) {
    return state.filter.products;
}