import React from 'react'
import { Button, Row, Table, Col, Container } from 'react-bootstrap'

export const ExpensesList = ({ expenses, handleClickDelete }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <h4 style={{ textAlign: "left", marginTop: "40px", marginBottom: "50px" }}>Expenses List</h4>
          <Table bordered style={{
            textAlign: "center",
            borderColor: "gray"
          }}>
            <thead style={{ background: "#AEBDCA" }}>
              <tr>
                <th scope="col">Expense</th>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
                <th scope="col">Payment</th>
                <th scope="col">Amount</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            {expenses.map(expense => (
              <tbody style={{
                justifyContent: "center"
              }} key={expense.id}>
                <tr className="align-middle">
                  <td scope='col'>{expense.name}</td>
                  <td scope='col'>{expense.date}</td>
                  <td scope='col'>{expense.category}</td>
                  <td scope='col'>{expense.paymentMethod}</td>
                  <td scope='col'>${expense.amount}</td>
                  <td scope='col'>
                    <Button style={{ background: "#AEBDCA", borderColor: "lightGray", color: "#000" }} variant='primary' onClick={() => handleClickDelete(expense.id)}><i class="fa-regular fa-trash-can"></i></Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Col>
      </Row >
    </Container >
  )
}
