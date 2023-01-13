import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../Passengers/Passenger.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Payment() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Form submission logic here
  }

  return (
    <>
      <Button className="Paymentbtn" onClick={() => setIsOpen(true)}>
        Make Payments
      </Button>

      <Modal show={isOpen} onHide={() => setIsOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="mpesa">M-PESA PAYMENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Go to Lipa na Mpesa</li>
            <li>Select Paybill Option</li>
            <li>Enter paybill No.{}</li>
            <li>Enter Account No.{}</li>
          </ul>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter the mpesa code and hit submit"
                value={inputValue}
                onChange={handleChange}
              />
            </Form.Group>
            <br></br>
            <Button type="submit">Confirm</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
