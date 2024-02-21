import PropTypes from "prop-types"; // First, import PropTypes
import { NavLink } from "react-router-dom";
import CartIcon from "../CartIcon";
// import SearchBar from "./SearchBar";

// eslint-disable-next-line no-unused-vars
function NavBar({ itemCount, products }) {
  return (
    <nav className="navbar" id="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {/* Include the SearchBar component with products as props */}
        <li>{/* <SearchBar products={products} /> */}</li>
      </ul>
      <CartIcon itemCount={itemCount} />
    </nav>
  );
}

// Here, we define the propTypes for the NavBar component
NavBar.propTypes = {
  itemCount: PropTypes.number, // Assuming itemCount is a number
  products: PropTypes.array, // Assuming products is an array
};

export default NavBar;
