import React from "react";
import Client1 from "../../assets/client1.png";
import Client2 from "../../assets/client2.png";
import Client3 from "../../assets/client3.png";
import Client4 from "../../assets/client4.png";

const Client_Section = () => {
  return (
    <>
      <div className="client_section">
        <div className="client_logos">
          <img src={Client1} alt="Client Logo" className="client-logo" />
          <img src={Client2} alt="Client Logo" className="client-logo" />
          <img src={Client3} alt="Client Logo" className="client-logo" />
          <img src={Client4} alt="Client Logo" className="client-logo" />
          <img src={Client1} alt="Client Logo" className="client-logo" />
          <img src={Client2} alt="Client Logo" className="client-logo" />
          <img src={Client3} alt="Client Logo" className="client-logo" />
          <img src={Client4} alt="Client Logo" className="client-logo" />
        </div>
      </div>
    </>
  );
};

export default Client_Section;
