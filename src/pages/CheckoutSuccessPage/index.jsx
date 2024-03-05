import { useEffect } from "react";
import * as S from "./index.styled";

function CheckoutSuccessPage() {
  useEffect(() => {
    document.title = "Checkout Success";
  }, []);
  return (
    <S.SuccessContainer>
      <S.SuccessTitle>Checkout Successful!</S.SuccessTitle>
      <S.SuccessMessage>Your order has been placed successfully.</S.SuccessMessage>
      <S.ReturnLink to="/">Return to Store</S.ReturnLink>
    </S.SuccessContainer>
  );
}

export default CheckoutSuccessPage;
