import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Siderbar from '@/components/sidebar/Sidebar';
import Content from '@/components/page/Content';
import Header from '@/components/page/Header';
import routes from '@/router';
import Footer from '@/components/page/Footer';

export default function App() {
  return (
    <div className="App">
      <Container className="py-4">
        <Row>
          <Header />
        </Row>
        <Row className="pt-5">
          <Col xs="3">
            <Siderbar routes={routes} />
          </Col>
          <Col>
            <Content />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
