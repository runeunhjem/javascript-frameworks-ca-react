import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

function CartIcon() {
  const { cartItems } = useCart(); // Use the useCart hook to access cart items

  // Calculate the total number of items in the cart
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={{ position: "relative", display: "inline-block", marginRight: "20px" }}>
      <Link to="/cart">
        {/* 🛒 */}
        <img
          src="/cart.svg"
          alt="Cart icon"
          className="cart-icon"
          style={{ width: "30px", height: "30px", filter: "invert(100%)" }}
        />
        {itemCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-12px",
              right: "-20px",
              height: "22px",
              width: "22px",
              backgroundColor: "white",
              color: "#c92bc1",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {itemCount}
          </span>
        )}
      </Link>
    </div>
  );
}

export default CartIcon;
