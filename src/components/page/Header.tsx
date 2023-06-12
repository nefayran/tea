import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SmallCart from '@/components/cart/SmallCart';

export default function Header() {
  return (
    <header className="header-wrapper">
      <Container className="px-0">
        <Row>
          <Col xs="9">
            <h1>Tea</h1>
          </Col>
          <Col>
            <div className="float-end">
              <SmallCart />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
