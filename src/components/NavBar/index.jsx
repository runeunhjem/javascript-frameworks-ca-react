import PropTypes from "prop-types";
import CartIcon from "../CartIcon";
import { useProducts } from "../../hooks/useProducts";
import * as S from "./index.styled";

function NavBar({ itemCount }) {
  const { setSelectedTag, setSelectedRating, setSelectedPriceRange, setSelectedDiscountRange } = useProducts();

  // const { setSelectedTag } = useProducts();

  const handleHomeClick = () => {
    setSelectedTag("");
    setSelectedRating(0);
    setSelectedPriceRange("");
    setSelectedDiscountRange("");
  };
  // const handleHomeClick = () => setSelectedTag("");

  return (
    <S.Navbar id="navbar">
      <S.NavLinks>
        <S.ListItem>
          <S.StyledNavLink to="/" onClick={handleHomeClick}>
            Home
          </S.StyledNavLink>
        </S.ListItem>
        <S.ListItem>
          <S.StyledNavLink to="/contact">Contact</S.StyledNavLink>
        </S.ListItem>
      </S.NavLinks>
      <CartIcon itemCount={itemCount} />
    </S.Navbar>
  );
}

NavBar.propTypes = {
  itemCount: PropTypes.number,
};

export default NavBar;
