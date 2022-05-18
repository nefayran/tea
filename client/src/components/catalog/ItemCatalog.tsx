import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { RootState } from '@/store';
import Item from './Item';
import { addItemToCart } from '@/store/items/itemsActions';
import Filter from './Filter';

type Props = {
  title: String,
};

export default function ItemCatalog({ title }: Props) {
  // Full list of items.
  const items: IItem[] = useSelector((state: RootState) => state.itemsReducer.items);
  // Filters Set.
  const filters = [...new Set(items.map((item) => item.type))];
  // Filtered items.
  const [filtered, setItem] = useState(items);
  // Filter item function.
  const filterItem = (filter: string) => {
    const newItem = items.filter((newVal) => newVal.type === filter);
    setItem(newItem);
  };
  // Items loop view.
  const itemsView = filtered.map((item: IItem) => (
    <Col key={item.id}>
      <Item
        item={item}
        additemToCart={addItemToCart}
      />
    </Col>
  ));

  return (
    <Container className="px-0">
      <Row>
        <h2>{title}</h2>
        <Filter
          items={items}
          filters={filters}
          filterItem={filterItem}
          setItem={setItem}
        />
      </Row>
      <Row>
        { itemsView }
      </Row>
    </Container>
  );
}
