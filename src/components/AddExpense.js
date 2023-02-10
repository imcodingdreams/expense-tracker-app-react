import React from 'react';
import { useState } from 'react';
import { Button, FormControl, Row, Col, InputGroup } from 'react-bootstrap';
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
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12} lg={4} className="col">
                <InputGroup>
                  <FormControl className='mb-4'
                    type="input"
                    ref={expenseNameRef}
                    name="expenseName"
                    placeholder="Expense"
                  />
                </InputGroup>
              </Col>
              <Col xs={12} lg={4} className="col">
                <FormControl className='mb-4'
                  type="number"
                  ref={expenseAmountRef}
                  name="expenseAmount"
                  min="1"
                  step=".01"
                  placeholder="Amount"
                />
              </Col>
              <Col xs={12} lg={4} className="col">
                <FormControl className='mb-4'
                  controlid='form.Category'
                  as='select'
                  ref={expenseCategoryRef}
                  name="expenseCategory"
                >
                  <option value="" disabled hidden>Category</option>
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
              <Col xs={12} lg={6} className="col">
                <FormControl className='mb-4'
                  controlid='form.PaymentMethod'
                  as='select'
                  ref={expensePaymentMethodRef}
                  name="paymentMethod"
                >
                  <option value="" disabled hidden>Payment Method</option>
                  <option value="Card">Card</option>
                  <option value="Cash">Cash</option>
                  <option value="Cryptocoin">Cryptocoin</option>
                  <option value="Other">Other</option>
                </FormControl>
              </Col>
              <Col xs={12} lg={6} className="col">
                <FormControl className='mb-5'
                  type="date"
                  ref={expenseDateRef}
                  name="expenseDate"
                  placeholder="Choose date"
                />
              </Col>
            </Row>
            <Row>
              <Col className="col">
                <div className="d-flex justify-content-center">
                  <Button style={{
                    height: "40px",
                    width: "80px",
                    textAlign: "center",
                    background: "#AEBDCA",
                    color: "#000",
                    borderColor: "lightGray",
                    justifyContent: "center",
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


