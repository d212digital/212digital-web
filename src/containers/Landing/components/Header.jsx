import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const background = `${process.env.PUBLIC_URL}/img/landing/header_bg.png`;
const img = `${process.env.PUBLIC_URL}/img/landing/macbook.png`;

const Header = ({ onClick }) => (
  <div className="landing__header" style={{ backgroundImage: `url(${background})` }}>
    <Container>
      <Row>
        <Col md={12}>
          <h2 className="landing__header-title">212 Digital - coded with passion & using the latest technology stacks
            to deliver bespoke projects.
          </h2>
          <p className="landing__header-subhead">212 Digital always use the latest, stable and most 
          secure version of code for our solutions. 
          </p>
          <Link className="landing__btn landing__btn--header" to="/documentation/introduction" target="_blank">
            Check out the docs
          </Link>
          <button type="button" className="landing__btn landing__btn--header" onClick={onClick}>
            Go to demo
          </button>
          <Link className="landing__btn landing__btn--header" to="/dashboard_default" target="_blank">
            Live demo
          </Link>
          <img className="landing__header-img" src={img} alt="macbook" />
        </Col>
      </Row>
    </Container>
  </div>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
