interface IItem {
  id: number
  title: string
  price: number,
  description: string,
  type: string,
  quantityInCart: number
}

type ItemsState = {
  items: IItem[],
  cart: ICartItem[],
};

type ItemAction = {
  type: string
  item: IItem
};

type DispatchType = (args: ItemAction) => ItemAction;
