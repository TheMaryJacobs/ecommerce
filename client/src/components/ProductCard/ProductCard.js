import React, { useEffect, useState } from "react";
// import { storiesOf } from "@storybook/react";
import axios from "axios";
import Card from "react-bootstrap/card";
import { Row, Nav, Container } from "react-bootstrap";
import "./ProductCard.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
const ProductCard = ({ p }) => {
  return (
    <div>
      <Card className="productCard">
        <Card.ImgOverlay>
          <Card.Title className="productName">{p.title}</Card.Title>
        </Card.ImgOverlay>
        <Card.Img variant="top" src={p.image} />
        <Card.Body className="cardOpts">
          <Row className="cardRow">
            <Nav.Item className="addToCart">
              <Nav.Link href="#">Add to Cart</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="viewDetails" href="/productdetail">
                View Details
              </Nav.Link>
            </Nav.Item>
          </Row>
        </Card.Body>
      </Card>
      <p>{p.price}</p>
    </div>
  );
};
export default ProductCard;
