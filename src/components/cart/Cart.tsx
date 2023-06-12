import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { BsFillCartFill } from 'react-icons/bs';
import { Button, Table } from 'react-bootstrap';
import { RootState } from '@/store';
import { removeItemFromCart } from '@/store/items/itemsActions';

export default function Cart() {
  // const itemsInCart: ICartItem[] = useSelector((state: RootState) => state.itemsReducer.cart);
  const items: IItem[] = useSelector((state: RootState) => state.itemsReducer.cart);
  const dispatch: Dispatch<any> = useDispatch();

  const removeitem = React.useCallback(
    (itemItem: IItem) => dispatch(removeItemFromCart(itemItem)),
    [dispatch, removeItemFromCart],
  );

  // Items loop view.
  const itemsView = items.map((item: IItem) => (
    <tr key={item.id}>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>
        {item.quantityInCart}
        <Button
          className="float-end"
          type="button"
          onClick={() => removeitem(item)}
          variant="accent"
        >
          Remove
        </Button>
      </td>
    </tr>
  ));

  return (
    <div className="mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          { itemsView }
        </tbody>
      </Table>
    </div>
  );
}
