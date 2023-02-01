import React from 'react'
import { Table, Row, Col, Container } from 'react-bootstrap'

export const ExpensesListHeader = () => {
  return (
    <Container>
      <Row style={{ marginTop: "30px" }}>
        <Col xs={12} lg={12} className="col">
          <h4 style={{ textAlign: "left", marginTop: "40px", marginBottom: "50px" }}>Expenses List</h4>
          <Table>
            <thead>
              <tr>
                <th scope="col">Expense</th>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
                <th scope="col">Payment</th>
                <th scope="col">Amount</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}
