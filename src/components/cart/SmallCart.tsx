import React from 'react';
import { useSelector } from 'react-redux';
import { BsFillCartFill } from 'react-icons/bs';
import { Col, Row } from 'react-bootstrap';
import { RootState } from '@/store';

export default function SmallCart() {
  const itemsInCart: IItem[] = useSelector((state: RootState) => state.itemsReducer.cart);
  const sum = itemsInCart.reduce((acc, value) => acc + value.price * value.quantityInCart, 0);

  return (
    <div className="mt-4">
      <Row>
        <Col className="px-0 pt-1">
          <span>
            { sum }
            $
          </span>
        </Col>
        <Col>
          <BsFillCartFill size={30} />
        </Col>
      </Row>
    </div>
  );
}
