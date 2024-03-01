import * as S from "./index.styled";

function CheckoutSuccessPage() {
  return (
    <S.SuccessContainer>
      <S.SuccessTitle>Checkout Successful!</S.SuccessTitle>
      <S.SuccessMessage>Your order has been placed successfully.</S.SuccessMessage>
      <S.ReturnLink to="/">Return to Store</S.ReturnLink>
    </S.SuccessContainer>
  );
}

export default CheckoutSuccessPage;
