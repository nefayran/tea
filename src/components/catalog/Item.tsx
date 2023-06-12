import * as React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { Button, Card } from 'react-bootstrap';

type Props = {
  item: IItem
  additemToCart: (item: IItem) => void
};

export default function Item({ item, additemToCart } : Props) {
  const dispatch: Dispatch<any> = useDispatch();

  const additem = React.useCallback(
    (itemItem: IItem) => dispatch(additemToCart(itemItem)),
    [dispatch, additemToCart],
  );

  return (
    <Card border="secondary" style={{ width: '18rem' }} className="mt-2">
      <Card.Body className="bg-secondary">
        <Card.Title>
          {item.title}
          {' '}
          -
          {' '}
          {item.type}
          {' '}
          Tea
        </Card.Title>
        <Card.Subtitle className="mb-2 text-danger">
          {item.price}
          $
        </Card.Subtitle>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Button className="float-end" type="button" onClick={() => additem(item)} variant="accent">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
