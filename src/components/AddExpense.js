import React from 'react';
import { useState } from 'react';
//import { Form } from 'react-bootstrap';
import { Button, FormControl, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';


export const AddExpense = ({ handleClickSave, expenseNameRef, expenseAmountRef, expenseDateRef, expenseCategoryRef, expensePaymentMethodRef }) => {

  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const expense = { expenseName, expenseAmount, expenseDate, expenseCategory, paymentMethod };
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <Form onSubmit={handleSubmit}>
            <Row style={{ marginBottom: "40px" }}>
              <Col xs={12} lg={4} className="col">
                <Form.Control
                  type="input"
                  ref={expenseNameRef}
                  name="expenseName"
                  //id="expenseName"
                  placeholder="Expense"
                  required="true"
                />
              </Col>
              <Col xs={12} lg={4} className="col">
                <Form.Control
                  type="number"
                  ref={expenseAmountRef}
                  name="expenseAmount"
                  min="1"
                  step=".01"
                  placeholder="Amount"
                  //id="expenseAmount"
                  required="true"
                />
              </Col>
              <Col xs={12} lg={4} className="col">
                <FormControl controlid='form.Category' as='select'
                  ref={expenseCategoryRef}
                  name="expenseCategory"
                  //id="expenseCategory"
                  required="true"
                >
                  <option value="" disabled selected hidden>Category</option>
                  <option value="Food">Food</option>
                  <option value="Personal Care">Personal Care</option>
                  <option value="Medical">Medical</option>
                  <option value="Subscriptions">Subscriptions</option>
                  <option value="Housing">Housing</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Kids">Kids</option>
                  <option value="Fun">Fun</option>
                  <option value="Gifts">Gifts</option>
                  <option value="Utilities">Utilities</option>
                  <option value="Insurance">Insurance</option>
                  <option value="House Supplies">House Supplies</option>
                  <option value="Pets">Pets</option>
                  <option value="Debt">Debt</option>
                  <option value="Other">Other</option>
                </FormControl>
              </Col>
            </Row>
            <Row style={{ marginBottom: "40px" }}>
              <Col xs={12} lg={6} className="col">
                <Form.Control controlid='form.PaymentMethod' as='select'
                  ref={expensePaymentMethodRef}
                  name="payment"
                  //id="paymentMethod"
                  className="payment-method"
                  required="true"
                >
                  <option value="" disabled selected hidden>Payment Method</option>
                  <option value="Card">Card</option>
                  <option value="Cash">Cash</option>
                  <option value="Cryptocoin">Cryptocoin</option>
                  <option value="Other">Other</option>
                </Form.Control>
              </Col>
              <Col xs={12} lg={6} className="col">
                <Form.Control
                  type="date"
                  ref={expenseDateRef}
                  name="expenseDate"
                  //id="expenseDate"
                  placeholder="Choose date"
                  required="true"
                />
              </Col>
            </Row>
            <Row>
              <Col className="col">
                <div className="d-flex justify-content-center">
                  <Button style={{
                    height: "40px", width: "80px", textAlign: "center", background: "#AEBDCA", color: "#000", borderColor: "lightGray", justifyContent: "center"
                  }} onClick={handleClickSave}>Save</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}


