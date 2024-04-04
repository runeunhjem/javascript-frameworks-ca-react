import { useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import * as S from "./index.styled";

function CheckoutPage() {
  const { cartItems, updateItemQuantity, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "CGG | Checkout";
    cartItems.forEach((item) => {
      if (item.quantity < 1) {
        removeItem(item.id);
      }
    });

    let metaDescription = document.querySelector("meta[name='description']");

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.getElementsByTagName("head")[0].appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "Review your cart and proceed to checkout. Securely complete your purchase and get ready to enjoy your new items!"
    );
  }, [cartItems, removeItem]);


  const handleQuantityChange = (item, quantity) => {
    if (quantity < 1) {
      removeItem(item.id);
    } else {
      updateItemQuantity(item.id, quantity);
    }
  };

  const totalSavings = cartItems.reduce(
    (acc, item) => acc + ((item.price - (item.discountedPrice || item.price)) * item.quantity) / 10,
    0
  );

  const totalPrice = cartItems.reduce((acc, item) => acc + ((item.discountedPrice || item.price) * item.quantity) / 10, 0);

  const handleCheckout = () => {
    clearCart();
    navigate("/success");
  };

  return (
    <S.MainContainer>
      <S.Title>Checkout</S.Title>
      {cartItems.length > 0 && <S.ClearCartButton onClick={clearCart}>( Clear Cart )</S.ClearCartButton>}
      <S.ItemsContainer>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            const itemSavings = ((item.price - (item.discountedPrice || item.price)) * item.quantity) / 10;
            return (
              <S.ItemCard key={item.id}>
                <S.ItemImageContainer onClick={() => navigate(`/product/${item.id}`)}>
                  <S.ItemImage src={item.image.url} alt={item.image.alt || `Product image of ${item.title}`} />
                </S.ItemImageContainer>
                <S.ItemDetails>
                  <S.ItemDetailsHeader>
                    <S.ItemTitle>{item.title}</S.ItemTitle>
                    <S.QuantityAndRemoveContainer>
                      <S.QuantityControl>
                        <S.QuantityButton onClick={() => handleQuantityChange(item, item.quantity - 1)}>-</S.QuantityButton>
                        <S.VisuallyHiddenLabel htmlFor={`quantity-${item.id}`}>
                          Quantity for {item.title}
                        </S.VisuallyHiddenLabel>
                        <S.QuantityInput
                          id={`quantity-${item.id}`}
                          type="text"
                          min="0"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item, Number(e.target.value))}
                        />
                        <S.QuantityButton onClick={() => handleQuantityChange(item, item.quantity + 1)}>+</S.QuantityButton>
                      </S.QuantityControl>
                      <S.RemoveButton onClick={() => removeItem(item.id)}>Remove</S.RemoveButton>
                    </S.QuantityAndRemoveContainer>
                  </S.ItemDetailsHeader>
                  <S.PriceDetails>
                    <S.PricePerItemWrapper>
                      {item.discountedPrice > 0 && item.discountedPrice < item.price && (
                        <S.DiscountPerItem>
                          -{Math.round(((item.price - item.discountedPrice) / item.price) * 100)}% $
                          {((item.price - item.discountedPrice) / 10).toFixed(2)}
                        </S.DiscountPerItem>
                      )}
                      <S.PricePerItem>Price: ${(item.discountedPrice / 10 || item.price / 10).toFixed(2)}</S.PricePerItem>
                    </S.PricePerItemWrapper>
                    <S.TotalPricePerItem>
                      {itemSavings > 0 && <S.Savings>Saved: ${itemSavings.toFixed(2)}</S.Savings>}
                      <S.Totals>Total: ${(((item.discountedPrice || item.price) * item.quantity) / 10).toFixed(2)}</S.Totals>
                    </S.TotalPricePerItem>
                  </S.PriceDetails>
                </S.ItemDetails>
              </S.ItemCard>
            );
          })
        ) : (
          <>
            <S.EmptyCartMessage>Your cart is empty.</S.EmptyCartMessage>
            <S.ReturnLink to="/">Return to Store</S.ReturnLink>
          </>
        )}
      </S.ItemsContainer>
      {cartItems.length > 0 && (
        <>
          <S.TotalDetails>
            <S.TotalItems>Number of Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</S.TotalItems>
            <S.TotalSavings>Savings: ${totalSavings.toFixed(2)}</S.TotalSavings>
            <S.TotalPrice>Price: ${totalPrice.toFixed(2)}</S.TotalPrice>
          </S.TotalDetails>
          <S.CheckoutButton onClick={handleCheckout}>Proceed to Checkout</S.CheckoutButton>
        </>
      )}
    </S.MainContainer>
  );
}

export default CheckoutPage;
