import { useEffect } from "react";
import { useCart } from "../../contexts/CartContext/useCart";
import { useNavigate } from "react-router-dom";
import * as S from "./index.styled";

function CheckoutPage() {
  const { cartItems, updateItemQuantity, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "CGG | Checkout";
    // Remove items with quantity less than 1 immediately after cartItems change
    cartItems.forEach((item) => {
      if (item.quantity < 1) {
        removeItem(item.id);
      }
    });
  }, [cartItems, removeItem]);

  const handleQuantityChange = (item, quantity) => {
    if (quantity < 1) {
      removeItem(item.id);
    } else {
      updateItemQuantity(item.id, quantity);
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.discountedPrice || item.price) * item.quantity, 0);

  const handleCheckout = () => {
    clearCart();
    navigate("/success");
  };

  return (
    <S.MainContainer>
      <S.Title>Checkout</S.Title>
      <S.ItemsContainer>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <S.ItemCard key={item.id}>
              <S.ItemImageContainer onClick={() => navigate(`/product/${item.id}`)}>
                <S.ItemImage src={item.image.url} alt={item.image.alt || `Productimage of ${item.title}`} />
              </S.ItemImageContainer>
              <S.ItemDetails>
                <S.ItemDetailsHeader>
                  <S.ItemTitle>{item.title}</S.ItemTitle>
                  <S.QuantityAndRemoveContainer>
                    <S.QuantityControl>
                      <S.QuantityButton onClick={() => handleQuantityChange(item, item.quantity - 1)}>-</S.QuantityButton>

                      {/* Visually hidden label for accessibility */}
                      <label
                        htmlFor={`quantity-${item.id}`}
                        style={{
                          position: "absolute",
                          width: "1px",
                          height: "1px",
                          margin: "-1px",
                          padding: "0",
                          overflow: "hidden",
                          clip: "rect(0,0,0,0)",
                          border: "0",
                        }}>
                        Quantity
                      </label>

                      <S.QuantityInput
                        id={`quantity-${item.id}`} // Unique ID for each input
                        type="text" // Change type to "number" for proper validation and semantics
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
                  <span>Price per item: ${(item.discountedPrice / 10 || item.price / 10).toFixed(2)}</span>
                  <span>
                    Total: ${((item.discountedPrice * item.quantity) / 10 || (item.price * item.quantity) / 10).toFixed(2)}
                  </span>
                </S.PriceDetails>
              </S.ItemDetails>
            </S.ItemCard>
          ))
        ) : (
          <S.EmptyCartMessage>Your cart is empty.</S.EmptyCartMessage>
        )}
      </S.ItemsContainer>
      {cartItems.length > 0 && (
        <>
          <S.TotalDetails>
            <S.TotalItems>Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</S.TotalItems>
            <S.TotalPrice>Total: ${(totalPrice / 10).toFixed(2)}</S.TotalPrice>
          </S.TotalDetails>
          <S.CheckoutButton onClick={handleCheckout}>Proceed to Checkout</S.CheckoutButton>
        </>
      )}
    </S.MainContainer>
  );
}

export default CheckoutPage;
