import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import CheckIcon from 'mdi-react/CheckIcon';

const feat01 = `${process.env.PUBLIC_URL}/img/landing/features/01_new.png`;
const feat02 = `${process.env.PUBLIC_URL}/img/landing/features/02_new.png`;
const feat03 = `${process.env.PUBLIC_URL}/img/landing/features/03_new.png`;
const feat04 = `${process.env.PUBLIC_URL}/img/landing/features/04_new.png`;
const feat05 = `${process.env.PUBLIC_URL}/img/landing/features/05_new.png`;
const feat06 = `${process.env.PUBLIC_URL}/img/landing/features/06_new.png`;
const feat07 = `${process.env.PUBLIC_URL}/img/landing/features/07_new.png`;
const feat08 = `${process.env.PUBLIC_URL}/img/landing/features/08_new.png`;
const feat09 = `${process.env.PUBLIC_URL}/img/landing/features/09_new.png`;
const feat10 = `${process.env.PUBLIC_URL}/img/landing/features/stripe.png`;
const feat11 = `${process.env.PUBLIC_URL}/img/landing/features/saga.png`;
const feat12 = `${process.env.PUBLIC_URL}/img/landing/features/graphql.png`;
const feat13 = `${process.env.PUBLIC_URL}/img/landing/features/01_new.png`;

const Features = () => (
  <section className="landing__section">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="landing__section-title">Core developement methods</h3>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="landing__features-wrap">
            <div className="landing__feature">
              <div className="landing__feature-img-wrap">
                <img className="landing__feature-img--autorization" src={feat09} alt="" />
              </div>
              <p className="landing__feature-title">Authentication</p>
              <p className="landing__feature-caption">
                Authentication with Firebase, Google and Facebook accounts
              </p>
            </div>
            <div className="landing__feature">
            <div className="landing__feature-img-wrap">
                <img className="landing__feature-img--autorization" src={feat09} alt="" />
              </div>
              <p className="landing__feature-title">Firestore</p>
              <p className="landing__feature-caption">
                No SQL Datatbase Management with Firebase firestore
              </p>
            </div>
            <div className="landing__feature">
            <div className="landing__feature-img-wrap">
                <img className="landing__feature-img--autorization" src={feat11} alt="" />
              </div>
              <p className="landing__feature-title">Redux Saga</p>
              <p className="landing__feature-caption">
                Application Middleware for application side effects
              </p>
            </div>
            <div className="landing__feature">
              <div className="landing__feature-img-wrap">
                <img src={feat01} alt="" />
              </div>
              <p className="landing__feature-title">React App</p>
              <p className="landing__feature-caption">A JavaScript library for building user interfaces</p>
            </div>
            <div className="landing__feature">
              <div className="landing__feature-img-wrap">
                <img src={feat12} alt="" />
              </div>
              <p className="landing__feature-title">GraphQL</p>
              <p className="landing__feature-caption">API Query & Manipulation Language</p>
            </div>
            <div className="landing__feature">
              <div className="landing__feature-img-wrap">
                <img src={feat13} alt="" />
              </div>
              <p className="landing__feature-title">React Suspense</p>
              <p className="landing__feature-caption">For data fetching and suspended rendering</p>
            </div>
            <div className="landing__feature">
              <div className="landing__feature-img-wrap">
                <img src={feat02} alt="" />
              </div>
              <p className="landing__feature-title">Redux Form</p>
              <p className="landing__feature-caption">It helps us write apps that behave consistently</p>
            </div>
            <div className="landing__feature">
              <div className="landing__feature-img-wrap">
                <img src={feat10} alt="" />
              </div>
              <p className="landing__feature-title">Stripe API</p>
              <p className="landing__feature-caption">Online Payment processing and management suite</p>
            </div>
            <div className="landing__feature">
              <div className="landing__feature-img-wrap">
                <img src={feat08} alt="" />
              </div>
              <p className="landing__feature-title">React-Hot-Loader</p>
              <p className="landing__feature-caption">Tweak React components in real time!</p>
            </div>
            <div className="landing__feature">
              <div className="landing__feature-img-wrap">
                <img src={feat03} alt="" />
              </div>
              <p className="landing__feature-title">Editable content</p>
              <p className="landing__feature-caption">Our solutions allow you to edit content in real time</p>
            </div>
            <div className="landing__feature">
              <div className="landing__feature-img-wrap">
                <img src={feat04} alt="" />
              </div>
              <p className="landing__feature-title">Multilanguage</p>
              <p className="landing__feature-caption">Create multilanguage services easily</p>
            </div>
            <div className="landing__feature">
              <div className="landing__feature-img-wrap">
                <img src={feat06} alt="" />
              </div>
              <p className="landing__feature-title">Full Documentation</p>
              <p className="landing__feature-caption">Find the answers to common questions</p>
            </div>
            
            <div className="landing__feature">
              <div className="landing__feature-img-wrap">
                <img src={feat07} alt="" />
              </div>
              <p className="landing__feature-title">Form Validation</p>
              <p className="landing__feature-caption">Ensures consistent data input using form validation</p>
            </div>
            <div className="landing__feature">
              <div className="landing__feature-img-wrap">
                <img src={feat05} alt="" />
              </div>
              <p className="landing__feature-title">Connect existing data</p>
              <p className="landing__feature-caption">Connect our apps to your existing data sets</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h4 className="landing__additional-title">… and much more</h4>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="landing__features-wrap landing__features-wrap--more">
            <p className="landing__feature-more"><CheckIcon /> Dark & Light Layouts</p>
            <p className="landing__feature-more"><CheckIcon /> Helpful Documentation</p>
            <p className="landing__feature-more"><CheckIcon /> Chat App</p>
            <p className="landing__feature-more"><CheckIcon /> Todo App</p>
            <p className="landing__feature-more"><CheckIcon /> Easy to Customize</p>
            <p className="landing__feature-more"><CheckIcon /> Fully Responsive</p>
            <p className="landing__feature-more"><CheckIcon /> Calendar app</p>
            <p className="landing__feature-more"><CheckIcon /> 200+ UI Elements</p>
            <p className="landing__feature-more"><CheckIcon /> Sass Prepros</p>
            <p className="landing__feature-more"><CheckIcon /> Email App</p>
            <p className="landing__feature-more"><CheckIcon /> Shopping Basket</p>
            <p className="landing__feature-more"><CheckIcon /> eCommerce Shops</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Features;
