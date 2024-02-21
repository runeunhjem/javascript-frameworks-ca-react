import { Link } from "react-router-dom"; // Import Link component from react-router-dom

function CheckoutSuccessPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", minHeight: "60vh" }}>
      <h1>Checkout Successful!</h1>
      <p>Your order has been placed successfully.</p>
      {/* Link to navigate back to the store or home page */}
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          margin: "1em auto",
          padding: "10px 20px",
          backgroundColor: "#c92bc1",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}>
        Return to Store
      </Link>
    </div>
  );
}

export default CheckoutSuccessPage;
