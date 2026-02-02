import React from "react";
import { useState } from "react";
import QRCode from "react-qr-code";
const index = () => {
  const [qrcode, setqrcode] = useState("");
  const [input, setinput] = useState("");

  function handlegenerate() {
    setqrcode(input)
    setinput('')
  }

  return (
    <div>
      <h1>QR-Code Generator</h1>
      <div>
        <input
          onChange={(e) => setinput(e.target.value)}
          type="text"
          placeholder="Enter value"
          name="qr-code"
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handlegenerate}
        >
          Generate
        </button>
      </div>

      <div>
        <QRCode id="qr-code-value" value={qrcode} size={400} bgColor="#fff"/>
      </div>
    </div>
  );
};

export default index;
