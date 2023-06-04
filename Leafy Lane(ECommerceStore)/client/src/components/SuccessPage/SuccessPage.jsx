import React from "react";
import "./SuccessPage.scss";
import axios from "axios";

export default function SuccessPage() {
  const handleClick = () => {
    const data = {
      name: "John Doe",
      jsonField: {
        key1: "value1",
        key2: "value2",
      },
    };
    axios
      .post("http://localhost:1337/api/orders", {
        data: {
          stripeid: data.name,
          products:data.jsonField,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          Payment Successful!
        </h1>
        <p style={{ fontSize: "18px", color: "#555", marginBottom: "20px" }}>
          Thank you for your purchase.
        </p>
        {/* <img
        src="path_to_success_image.png"
        alt="Success"
        style={{ width: '200px', marginBottom: '30px' }}
      /> */}
        <button
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            background: "linear-gradient(to left, #9384D1, #C9A7EB)",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer",
            border: "0",
          }}
          onClick={() => {
            handleClick();
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
