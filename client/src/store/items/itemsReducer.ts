import * as actionTypes from '@/store/actionTypes';

const initialState: ItemsState = {
  items: [
    {
      id: 1,
      title: 'Pu-er',
      price: 560,
      description: 'is a variety of fermented tea traditionally produced in Yunnan Province, China.',
      type: 'Black',
      quantityInCart: 0,
    },
    {
      id: 2,
      title: 'Tieguanyin',
      price: 350,
      description: 'Variety of Chinese oolong tea that originated in the 19th century in Anxi in Fujian province.',
      type: 'Green',
      quantityInCart: 0,
    },
  ],
  cart: [],
};

const itemsReducer = (
  state: ItemsState = initialState,
  action: ItemAction,
): ItemsState => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART: {
      const newItemInCart: IItem = {
        ...action.item,
        quantityInCart: 1,
      };
      // Find some item in cart:
      const itemInCart: IItem | undefined = state.cart.find(
        (item) => item.id === action.item.id,
      );
      // If found something in cart just up quantity.
      if (itemInCart) {
        newItemInCart.quantityInCart += itemInCart.quantityInCart;
      }
      // Filter items from current.
      const otherCart: IItem[] = state.cart.filter(
        (item) => item.id !== action.item.id,
      );
      return {
        ...state,
        cart: otherCart.concat(newItemInCart),
      };
    }
    case actionTypes.REMOVE_ITEM_FROM_CART: {
      const newItemInCart: IItem = {
        ...action.item,
      };
      // Find some item in cart:
      const itemInCart: IItem | undefined = state.cart.find(
        (item) => item.id === action.item.id,
      );
      // If found something in cart just less quantity.
      if (itemInCart && itemInCart.quantityInCart > 0) {
        newItemInCart.quantityInCart = itemInCart.quantityInCart - 1;
      }
      // Filter items from current.
      const otherCart: IItem[] = state.cart.filter(
        (item) => item.id !== action.item.id,
      );
      return {
        ...state,
        cart: otherCart.concat(newItemInCart),
      };
    }
    default: {
      return {
        ...state,
        items: state.items,
      };
    }
  }
};

export default itemsReducer;
