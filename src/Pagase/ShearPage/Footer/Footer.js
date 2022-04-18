import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-light p-5">
      <p>
        <small>Coppyright @ {year} </small>
      </p>
    </div>
  );
};

export default Footer;
