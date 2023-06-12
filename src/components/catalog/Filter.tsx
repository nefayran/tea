import React from 'react';
import { Button } from 'react-bootstrap';
// import Data from './Data';

type Props = {
  filterItem: Function,
  setItem: Function,
  filters: Array<string>,
  items: Array<any>
};

export default function Filter({
  items, filterItem, setItem, filters,
} : Props) {
  return (
    <div>
      {filters.map((filter: string) => (
        <Button
          className="me-2"
          onClick={() => filterItem(filter)}
          key={filter}
          variant="accent"
        >
          {filter}
        </Button>
      ))}
      <Button
        variant="secondary"
        onClick={() => setItem(items)}
      >
        All
      </Button>
    </div>
  );
}
