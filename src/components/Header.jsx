import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>WebHive.</h1>
      <main>
        <HashLink to={"/WebHive/#home"}>Home</HashLink>
        <Link to={"/WebHive/contact"}>Contact</Link>
        <HashLink to={"/WebHive/#about"}>About</HashLink>
        <HashLink to={"/WebHive/#brands"}>Brands</HashLink>
        <Link to={"/WebHive/services"}>Services</Link>
      </main>
    </nav>
  );
};

export default Header;
