import { Link } from "react-router-dom"; // Import the Link component
import NavBar from "../NavBar";

function Header() {
  return (
    <header className="header-container">
      <Link to="/">
        <img className="header-logo" src="/header-logo-cgg.svg" alt="Illustration of the cgg logo" />
      </Link>
      <NavBar />
    </header>
  );
}

export default Header;
