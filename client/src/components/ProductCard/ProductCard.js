import React from "react";
// import { storiesOf } from "@storybook/react";
// import axios from "axios";
import Card from "react-bootstrap/card";
import { Row, Col, Button } from "react-bootstrap";
import "./ProductCard.css";

// import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";

//Icons from Font Awesome - make sure you have the font-awesome packages installed. https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Basic Icons
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ p }) => {
  return (
    <div>
      <Card className="productCard">
        <a href={`/product?${p.id}`}>
          <Card.ImgOverlay>
            <Card.Title className="productName">
              {p.title} – ${p.price}
            </Card.Title>
          </Card.ImgOverlay>
          <Card.Img
            className="cardImage"
            variant="top"
            src={p.image1}
            alt="image"
          />

          <Card.Img className="cardImage" variant="top" src={p.image1} />
        </a>
        <Card.Body className="cardOpts">
          <Row>
            <Col className="cardCol">
              <AddToCart className="cardButton" item={p} />
            </Col>
            {/* <Col> */}
            {/* <Button className="cardButton" href="/product"> View Details </Button> */}
            {/* <Link className="cardButton" to={`/product?${p._id}`}> */}
            {/* View Details */}
            {/* </Link> */}
            <Col>
              <Button className="cardButton" href={`/product?${p._id}`}>
                View Details
                <FontAwesomeIcon icon={faEllipsisH} className="FAIcon" />
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ProductCard;
