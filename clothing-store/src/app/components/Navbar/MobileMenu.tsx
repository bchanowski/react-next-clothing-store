"use client";

import { BiMenuAltLeft } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import "./styles.scss";
import { useState } from "react";
import Link from "next/link";
import { links } from "./data";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <>
      {!open ? (
        <BiMenuAltLeft className="icon" onClick={() => setOpen(true)} />
      ) : (
        <GrClose className="icon" onClick={() => setOpen(false)} />
      )}
      {open && (
        <div className="mobile-menu-container">
          {links.map((item) => (
            <Link
              className="navbar-text mobile-text"
              href={item.url}
              key={item.id}
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link
              href="/login"
              className="navbar-text"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          ) : (
            <Link
              href="/orders"
              className="navbar-text"
              onClick={() => setOpen(false)}
            >
              Orders
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default MobileMenu;
