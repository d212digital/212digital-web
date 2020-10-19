/* eslint-disable max-len */
import React from 'react';
import {
  Col, Row, Container, Card, CardBody,
} from 'reactstrap';
import StarIcon from 'mdi-react/StarIcon';

const Testimonials = () => (
  <section className="landing__section">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="landing__section-title">What our customers are saying</h3>
        </Col>
      </Row>
      <Row className="landing__testimonials">
        <Col lg={4} md={6}>
          <a
            href="https://iwanttights.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <CardBody className="landing__testimonial">
                <p className="landing__testimonial-name">by IWT</p>
                <div className="landing__testimonial-stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="landing__testimonial-review">We have used 212 Digital to create a react app from the ground up
                that will showcase our product offering and move us into mobile first PWA's. Our current website is on 
                Magento 2 which we will be migrating once completed. Great work so far.                   
                </p>
              </CardBody>
            </Card>
          </a>
        </Col>
        <Col lg={4} md={6}>
          {/* <a
            href="https://themeforest.net/item/easypro-developer-friendly-react-bootstrap-4-admin-template/reviews/21798550"
            target="_blank"
            rel="noopener noreferrer"
          > */}
            <Card>
              <CardBody className="landing__testimonial">
                <p className="landing__testimonial-name">by wibgyor</p>
                <div className="landing__testimonial-stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="landing__testimonial-review">The components have been deigned well, which is
                  enabling us to customise it quickly to our needs.
                </p>
              </CardBody>
            </Card>
          {/* </a> */}
        </Col>
        <Col lg={{ size: 4, offset: 0 }} md={{ size: 6, offset: 3 }}>
          {/* <a
            href="https://themeforest.net/item/easypro-developer-friendly-react-bootstrap-4-admin-template/reviews/21798550"
            target="_blank"
            rel="noopener noreferrer"
          > */}
            <Card>
              <CardBody className="landing__testimonial">
                <p className="landing__testimonial-name">by jd4ever</p>
                <div className="landing__testimonial-stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="landing__testimonial-review">{`I'm very happy with my app. This is a single-page
                react app through and through. Clean code and easy to work with`}
                </p>
              </CardBody>
            </Card>
          {/* </a> */}
        </Col>
      </Row>
    </Container>
  </section>
);

export default Testimonials;
