import React from "react";

function Payment() {

  return (
    <div className="container">
      <form action ='/donate' method="POST">
        <input type="text" name="charity"></input>
        <input type="number" name="donation"></input>
        <button type="submit" className="donate-btn">Donate</button>
      </form>
    </div>
  );
}


export default Payment;