import React from 'react';
import { Col, Row, Container } from 'reactstrap';

const FeatureRequest = () => (
  <section className="landing__section">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="landing__section-title">Bespoke Projects</h3>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p className="landing__request">Need something not quite the "normal" get in touch, we can help.
            Also if you have any other suggestions <span role="img" aria-label="hammer and wrench">🛠️</span>, please,
            get in touch we always love feedback! 
          </p>
          <div className="landing__center-btn">
            <a
              className="landing__btn"
              href="https://212digital.co.uk/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us!
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default FeatureRequest;
