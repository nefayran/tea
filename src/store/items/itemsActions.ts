import * as actionTypes from '@/store/actionTypes';

/* Simulate HTTP request */
export function simulateHttpRequest(action: ItemAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

/* Add item to cart */
export function addItemToCart(item: IItem) {
  const action: ItemAction = {
    type: actionTypes.ADD_ITEM_TO_CART,
    item,
  };

  return simulateHttpRequest(action);
}

/* Remove item from cart */
export function removeItemFromCart(item: IItem) {
  const action: ItemAction = {
    type: actionTypes.REMOVE_ITEM_FROM_CART,
    item,
  };
  return simulateHttpRequest(action);
}
