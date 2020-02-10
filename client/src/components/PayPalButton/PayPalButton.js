import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

export default function PayButton({ cartSubtotal }) {
  return (
    <PayPalButton
      amount={cartSubtotal}
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={(details, data) => {
        alert("Transaction completed by " + details.payer.name.given_name);
        localStorage.removeItem("shoppingcart");
        window.location.reload();
        // OPTIONAL: Call your server to save the transaction
        return fetch("/paypal-transaction-complete", {
          method: "post",
          body: JSON.stringify({
            orderId: data.orderID
          })
        });
      }}
      options={{
        // The client ID needs to be the business ID from PayPal
        // This is needed to make sure the business gets the correct amount
        clientId:
          "AYNnwwpMGdWg6a4I_1BIF5AVtfFaOKbit8A2_7AvyR4zR6UPP5Z2ccMG-jShAlBvdVYcHmlffEjPKtTN"
      }}
    />
  );
}
