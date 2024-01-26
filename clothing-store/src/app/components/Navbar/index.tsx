import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { links } from "./data";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <Link className="title" href="/">
          CLOTHEE
        </Link>
      </div>
      <div className="navbar-options">
        {links.map((item) => (
          <Link className="navbar-text" href={item.url} key={item.id}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="mobile-menu">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
