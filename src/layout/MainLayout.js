import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MainLayout = ({ children }) => {
  return (
    <Container fluid='md'>
      <h1>Main Layout</h1>
      {children}
    </Container>
  );
};

export default MainLayout;
