import React from 'react';
import { Col, Row, Container } from 'reactstrap';

const Purchase = () => (
  <section className="landing__section">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="landing__section-title">Get in touch <b>212 Digital can deliver bespoke solutions </b> 
           so get in touch and save your time and nerves
          </h3>
          <div className="landing__center-btn">
            <a
              className="landing__btn landing__btn--gradient"
              target="_blank"
              rel="noopener noreferrer"
              href="https://212digital.co.uk/contact"
            >
              Let us do the hard work!  
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Purchase;
