import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", padding: "20px", textAlign: "center" }}>
      <div style={{ color: "GrayText" }}>
        &copy; {new Date().getFullYear()}  All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;