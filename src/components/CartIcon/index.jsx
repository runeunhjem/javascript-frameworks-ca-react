import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import * as S from "./index.styled";

function CartIcon() {
  const { cartItems } = useCart();

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
