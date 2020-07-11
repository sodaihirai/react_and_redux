import React from "react";
import Link from "./Link"

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" label="Accordion" />
      <Link href="/list" label="Search" />
      <Link href="/dropdown" label="Dropdown" />
      <Link href="/translate" label="Translate" />
    </div>
  );
};

export default Header;
