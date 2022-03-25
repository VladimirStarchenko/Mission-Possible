import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";

toast.configure();

function Payment() {


  // async function handleToken(token, addresses) {
  //   const response = await axios.post(
  //     "https://ry7v05l6on.sse.codesandbox.io/checkout",
  //     { token, }
  //   );
  //   const { status } = response.data;
  //   console.log("Response:", response.data);
  //   if (status === "success") {
  //     toast("Success! Check email for details", { type: "success" });
  //   } else {
  //     toast("Something went wrong", { type: "error" });
  //   }
  // }
  // const x = document.getElementById('Donation').value;
  return (
    <div className="container">
      <div className="product">
        {/* <h1>{product.name}</h1>
        <h3>${product.price}</h3> */}
        <input id = 'Donation' type ='number'></input>
      </div>
      <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        // token={handleToken}
        amount={101}
        name="Example Charity"
        billingAddress
        shippingAddress>            
      <button>Donate</button>
      </StripeCheckout>
    </div>
  );
}


export default Payment;