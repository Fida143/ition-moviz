import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <footer className="footer">
      &copy; Copyright {`${new Date().getFullYear()}`} -- Ition-Moviz
    </footer>
  );
};

export default footer;
