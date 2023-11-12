import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:ss3702679@gmail.com">
        <Button>Contact: ss3702679@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
