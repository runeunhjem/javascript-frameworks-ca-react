import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "../../../src/index.css";

function CartPage() {
  const { cartItems, updateItemQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (item, quantity) => {
    updateItemQuantity(item.id, quantity);
  };

  const handleCheckout = () => {
    clearCart();
    navigate("/success");
  };

  return (
    <div className="main-container" id="CartPage">
      <h1>Cart</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {" "}
        {/* Updated this line */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              flexBasis: "auto",
              maxWidth: "calc(100% - 40px)",
            }}>
            {" "}
            {/* Optional style adjustments */}
            <div style={{ cursor: "pointer" }} onClick={() => navigate(`/product/${item.id}`)}>
              <img
                src={item.image.url}
                alt={item.image.alt || item.title}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  width: "100px",
                  height: "150px",
                  objectFit: "cover",
                  margin: "20px",
                }}
              />
            </div>
            <div className="cart-card-content" style={{ alignItems: "start" }}>
              <h3 style={{ marginTop: "0px" }}>{item.title}</h3>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button onClick={() => handleQuantityChange(item, item.quantity - 1)}>-</button>
                <input
                  type="text" // Change to text to completely avoid numeric input default controls
                  pattern="\d*" // Ensures only numbers can be entered
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item, parseInt(e.target.value, 10))}
                  style={{ width: "50px", textAlign: "center" }}
                />
                <button onClick={() => handleQuantityChange(item, item.quantity + 1)}>+</button>
              </div>
              <p>Price per item: ${(item.discountedPrice / 100).toFixed(2)}</p>
              <p>Total: ${((item.discountedPrice * item.quantity) / 100).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</h2>
      <h2>Total: ${(cartItems.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0) / 100).toFixed(2)}</h2>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default CartPage;
