export const addProductToCart = (product) => ({
    type: 'ADD_PRODUCT_TO_CART',
    payload: product,
});


export const removeFromCart = (product) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: product,
    };
  };
  export const resetCart = () => {
    return {
      type: 'RESET_STATE',
    };
  };
  