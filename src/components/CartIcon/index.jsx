// index.jsx
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import * as S from "./index.styled"; // Import styled components with alias S

function CartIcon() {
  const { cartItems } = useCart();

  // Calculate the total number of items in the cart
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <S.IconContainer>
      <Link to="/cart">
        <S.CartImage src="/cart.svg" alt="Cart icon" />
        {itemCount > 0 && <S.ItemCountBadge>{itemCount}</S.ItemCountBadge>}
      </Link>
    </S.IconContainer>
  );
}

export default CartIcon;
