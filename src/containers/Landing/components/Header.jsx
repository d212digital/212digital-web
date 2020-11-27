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
          <h2 className="landing__header-title">Coding with passion using the latest technology stacks
            to deliver bespoke projects.
          </h2>
          <p className="landing__header-subhead">We always use the latest, stable and most 
          secure version of code for our solutions. 
          </p>
          {/* <Link className="landing__btn landing__btn--header" to="/documentation/introduction" target="_blank">
            Read documentation
          </Link> */}
          <button type="button" className="landing__btn landing__btn--header" onClick={onClick}>
            View Our Apps/Work
          </button>
          <Link className="landing__btn landing__btn--header" to="/log_in_photo" target="_blank">
            View Core Application
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
