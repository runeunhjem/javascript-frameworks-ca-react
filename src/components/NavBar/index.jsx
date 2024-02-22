import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import CartIcon from "../CartIcon";
import { useProducts } from "../../contexts/ProductContext"; // Adjust the import path as necessary

function NavBar({ itemCount }) {
  const { setSelectedTag } = useProducts(); // Use setSelectedTag from the context

  // Function to reset the category when home is clicked
  const handleHomeClick = () => setSelectedTag("");

  return (
    <nav className="navbar" id="navbar">
      <ul className="nav-links">
        <li>
          {/* Add onClick handler to reset category selection */}
          <NavLink to="/" onClick={handleHomeClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {/* Other navigation links can be added here */}
      </ul>
      <CartIcon itemCount={itemCount} />
    </nav>
  );
}

NavBar.propTypes = {
  itemCount: PropTypes.number, // itemCount is retained for displaying cart items
};

export default NavBar;
