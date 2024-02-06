import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import global from '../Components/global/Container.module.css';

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
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Container className={global.container}>
      <h1>Contact Us</h1>
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
