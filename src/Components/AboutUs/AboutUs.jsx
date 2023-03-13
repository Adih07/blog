import React from "react";

const AboutUs = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
      <input
        style={{ color: "gold", background: "black", border: "1px solid gold" }}
        type="text"
        placeholder="Text"
      />
      <br />
      <div>
        <input
          style={{
            color: "gold",
            background: "black",
            border: "1px solid gold",
          }}
          type="number"
          placeholder="Number"
        />
      </div>
      <div>
        <input
          style={{
            color: "gold",
            background: "black",
            border: "1px solid gold",
          }}
          type="password"
        />
      </div>
      <div>
        <input type="checkbox" />
        ✔️
      </div>
      <div>
        <input style={{ border: "1px solid gold" }} type="color" />
      </div>
      <div>
        <input type="time" />
      </div>
      <button>Click me</button>
    </div>
  );
};

export default AboutUs;
