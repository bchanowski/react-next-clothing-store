import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <Link className="title" href="/">
          CLOTHEE
        </Link>
      </div>
      <div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
