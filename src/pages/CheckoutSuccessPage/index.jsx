import { useEffect } from "react";
import * as S from "./index.styled";

function CheckoutSuccessPage() {
  useEffect(() => {
    document.title = "CGG | Checkout Success";

    let metaDescription = document.querySelector("meta[name='description']");

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.getElementsByTagName("head")[0].appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "Thank you for your purchase! Your transaction has been successfully completed. Check your email for order details and shipping information."
    );
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
