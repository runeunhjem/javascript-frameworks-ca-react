// NavBar/index.jsx
import PropTypes from "prop-types";
import CartIcon from "../CartIcon";
import { useProducts } from "../../contexts/ProductContext/useProducts";
import * as S from "./index.styled"; // Import styled components with alias S

function NavBar({ itemCount }) {
  const { setSelectedTag } = useProducts(); // Use setSelectedTag from the context

  // Function to reset the category when home is clicked
  const handleHomeClick = () => setSelectedTag("");

  return (
    <S.Navbar id="navbar">
      <S.NavLinks>
        <S.ListItem>
          {/* Add onClick handler to reset category selection */}
          <S.StyledNavLink to="/" onClick={handleHomeClick}>
            Home
          </S.StyledNavLink>
        </S.ListItem>
        <S.ListItem>
          <S.StyledNavLink to="/contact">Contact</S.StyledNavLink>
        </S.ListItem>
        {/* Other navigation links can be added here */}
      </S.NavLinks>
      <CartIcon itemCount={itemCount} />
    </S.Navbar>
  );
}

NavBar.propTypes = {
  itemCount: PropTypes.number, // itemCount is retained for displaying cart items
};

export default NavBar;
