import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartProduct.css";

import {
  Container,
  Card,
  Button,
  InputGroup,
  FormControl,
  Col,
  Row
} from "react-bootstrap";

export default function() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Container>
        <ul className="cartList">
          <li>
            <Card className="cartCard">
              <Row>
                <Col>
                  <Card.Img
                    variant="left"
                    src="http://placekitten.com/200/200"
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>$Price</Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => {
                        console.log("What up");
                      }}
                    >
                      Remove
                    </Button>
                    <InputGroup
                      className="mb-3"
                      style={{ width: "130px", alignContent: "center" }}
                    >
                      <InputGroup.Prepend>
                        <Button
                          variant="info"
                          onClick={() => setCounter(counter - 1)}
                        >
                          -
                        </Button>{" "}
                      </InputGroup.Prepend>
                      <FormControl
                        type="text"
                        value={counter}
                        aria-label="Input group example"
                        aria-describedby="btnGroupAddon"
                        onChange={({ target }) => setCounter(target.value)}
                      />
                      <InputGroup.Append>
                        <Button
                          variant="info"
                          onClick={() => console.log("why tho")}
                        >
                          +
                        </Button>{" "}
                      </InputGroup.Append>
                    </InputGroup>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </li>
        </ul>
      </Container>
    </>
  );
}
