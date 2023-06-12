import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Siderbar({ routes } : any) {
  const navRoutes = routes.map((route: any) => (
    <Nav.Item key={route.title}>
      <Nav.Link as={NavLink} to={route.path}>{route.title}</Nav.Link>
    </Nav.Item>
  ));

  return (
    <div className="sidebar">
      <Nav className="flex-column">
        { navRoutes }
      </Nav>
    </div>
  );
}

Siderbar.defaultProps = {
  routes: [],
};

Siderbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

export default Siderbar;
