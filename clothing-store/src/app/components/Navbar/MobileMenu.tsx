"use client";

import { BiMenuAltLeft } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import "./styles.scss";
import { useState } from "react";
import Link from "next/link";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Products", url: "/products" },
  { id: 3, title: "Contact", url: "/" },
  { id: 4, title: "Cart (3)", url: "/cart" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      {!open ? (
        <BiMenuAltLeft className="icon" onClick={() => setOpen(true)} />
      ) : (
        <GrClose className="icon" onClick={() => setOpen(false)} />
      )}
      {open && (
        <div className="mobile-menu-container">
          {links.map((item) => (
            <Link
              className="mobile-menu-text"
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
              className="mobile-menu-text"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          ) : (
            <Link
              href="/orders"
              className="mobile-menu-text"
              onClick={() => setOpen(false)}
            >
              Orders
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
