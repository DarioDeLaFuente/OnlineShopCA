import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactBanner from '../Components/hero/ContactBanner';
import global from '../Components/global/Container.module.css';
import Image from 'react-bootstrap/Image';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  });
  const [formErrors, setFormErrors] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (formData.fullName.length < 3) {
      errors.fullName = 'Full name must be at least 3 characters';
    }
    if (formData.subject.length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    }
    if (!isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (formData.body.length < 3) {
      errors.body = 'Body must be at least 3 characters';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log('Form submitted:', formData);
      setShowPopup(true);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Row className="m-5">
      <Col xs={12} md={12} lg={8}>
        <ContactBanner></ContactBanner>
        <Col xs={12} md={12} lg={8}>
          {showPopup && (
            <Row className={global.dataContainer}>
              <Col xs={12} md={12} lg={4}>
                <Image
                  className={global.imageContainer}
                  src="https://avatars.githubusercontent.com/u/33604162?s=400&u=006a2fa94303f75fddba0279639f0b4bf0458e13&v=4"
                  roundedCircle
                />
              </Col>
              <Col xs={12} md={12} lg={8}>
                <div className={global.txtContainer}>
                  <h4>Thank you for contacting us!</h4>
                  <p> We will get back to you as soon as possible.</p>
                </div>
              </Col>
              <span onClick={handleClosePopup}>&times;</span>
              <p>Form data:</p>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </Row>
          )}
        </Col>
      </Col>

      <Col xs={12} md={12} lg={4}>
        <h3>Contact Us</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              isInvalid={!!formErrors.fullName}
            />
            <Form.Control.Feedback type="invalid">{formErrors.fullName}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              isInvalid={!!formErrors.subject}
            />
            <Form.Control.Feedback type="invalid">{formErrors.subject}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              isInvalid={!!formErrors.email}
            />
            <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="body">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your message"
              name="body"
              value={formData.body}
              onChange={handleInputChange}
              isInvalid={!!formErrors.body}
            />
            <Form.Control.Feedback type="invalid">{formErrors.body}</Form.Control.Feedback>
          </Form.Group>
          <Button className="mt-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Contact;
