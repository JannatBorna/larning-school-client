import React from 'react';
import { Form } from 'react-bootstrap';
import contactImage from '../../../image/contact/contact-2.jpg';
import './Contact.css';

const Contact = () => {
    return (
      <div>
        <h2 className='contact_header'>Contact Us</h2>
        <div className="contact_section my-5">
          <div>
            <img src={contactImage} alt="" />
          </div>
          
          
          <div>
              <h2 className='message_text text-start'>SEND YOUR MESSAGE</h2>
            <Form>
              <Form.Group
                className="mb-3 w-75"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="name"
                  placeholder="Your name/Company's name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 w-75"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group
                className="mb-3 w-75"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" placeholder="Message" rows={3} />
              </Form.Group>

              <button className="contact_button">Submit</button>
            </Form>
          </div>

          
        </div>
      </div>
    );
};

export default Contact;