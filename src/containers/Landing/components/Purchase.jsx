import React from 'react';
import { Col, Row, Container } from 'reactstrap';

const Purchase = () => (
  <section className="landing__section">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="landing__section-title">Get in touch <b>212 Digital can deliver bespoke solutions </b> 
           so why not save your time and nerves today!
          </h3>
          <div className="landing__center-btn">
            <a
              className="landing__btn landing__btn--gradient"
              target="_blank"
              rel="noopener noreferrer"
              href="tel:07702790586"
            >
              Click to call us and find out how we can help!  
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Purchase;
