import React, { useContext, useState, useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import { CartContext } from "../../state/cartContext";
// import CartProduct from "../Cart/CartProduct";

export default function AddToCart ({ item }) {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const cartContextValue = useContext(CartContext);
    console.log("Item added:",cartContextValue.cart, item);

    return (
<>
    {/* <Button ref={target} onClick={() => setShow(!show)}>
        Add to Cart
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {props => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay> */}
    
       <Button onClick={()=> {
           cartContextValue.setCart([...cartContextValue.cart, item]);
       }} >
           Add to Cart
       </Button>
</>
    )
};
