import React from 'react';
import { Col, Row, Container } from 'reactstrap';

const background = `${process.env.PUBLIC_URL}/img/landing/design_code_bg.png`;
const designAndCodeImg = `${process.env.PUBLIC_URL}/img/landing/design_and_code.svg`;
const macbookImg = `${process.env.PUBLIC_URL}/img/landing/feedback_macbook.png`;

const Feedback = () => (
  <div className="landing__feedback" style={{ backgroundImage: `url(${background})` }}>
    <Container>
      <Row>
        <Col md={12}>
          <h2 className="landing__feedback-title"><b>Did you know?</b></h2>
          <p className="landing__feedback-subhead">
            212 Digital can deliver a wide range of solutions from Admin dashboards using Authentication with Firebase,
            Google and Facebook accounts; chat, email, todo apps, and fully functional front and backend 
            eCommerce Stores built in React using Firebase Firestore.
            <br/><br/>
            In addition to our modern full stack development approach we have years of experience in delivering websites
            created in Wordpress and Magento 2. Whether its getting you the software you need, or building it from scratch,
            we're with you every step of the way! 
          </p>
          <div className="landing__feedback-form">
            <a
              className="landing__btn landing__btn--feedback"
              href="https://212digital.co.uk/contact"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get Started!
            </a>
          </div>
          <img className="landing__feedback-design-img" src={designAndCodeImg} alt="design and code" />
          <img className="landing__feedback-macbook-img" src={macbookImg} alt="macbook" />
          
        </Col>
      </Row>
    </Container>
  </div>
);

export default Feedback;
