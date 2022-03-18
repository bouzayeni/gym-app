import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

const Payment = () => {
  return (
      <div>
          <h1>hello</h1>
          <h3 style={{ paddingTop: "50px" }}>Payment</h3>
        <h1 style={{ color: "#9b101f", paddingBottom: "20px" }}>_________</h1>

          





    <PayPalButton
    options={{
        clientId: "AQKK6AEzQUxv81PYYjUiMWNHPD9S8WTokm2qwH8e1JV1S1IA4qJ9fhDLqUeo8achUkqmxUk2ZOBer24i",
        currency:"USD"
      }}
        amount="0.01"
        
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          console.log({details,data})
        }}
      />
      </div>
  )
}

export default Payment
