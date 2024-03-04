import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../hero/CheckoutBanner.module.css';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const ContactBanner = () => {
  return (
    <>
      <div className={styles.contactBanner}>
        <Row>
          <Col>
            <h1 className={styles.contactTitle}>Hi, how can we help?</h1>
            <h3 className={styles.contactDescription}>Help & Support</h3>
            <p>Have questions or need to report an issue with a product or the service? Weve got you covered.</p>
          </Col>
        </Row>
        <Row>
          <Col className='mt-5 mb-5'>
            <h4 className={styles.contactDescription}>Quick assists Answers is just one click away.</h4>
            <p>Most frequently asked questions:</p>
            <ListGroup>
              <ListGroup.Item>
                <Link>Dispatch & delivery</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                {' '}
                <Link>Returns</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link>Membership</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link>Orders</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link>Product info</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                {' '}
                <Link>Corporate</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ContactBanner;
