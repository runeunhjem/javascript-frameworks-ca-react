import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../CartContext";
import "../../../src/index.css";
import Reviews from "../../components/Reviews";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); // Use addToCart from the cart context

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${productId}`); // Make sure the URL is correct
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data.data); // Assuming the product data is correctly located at data.data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity: 1 }); // Add the product with a quantity to the cart
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  // Calculate discount if applicable
  const hasDiscount = product.discountedPrice < product.price;
  const discountPercentage = hasDiscount ? ((product.price - product.discountedPrice) / product.price) * 100 : 0;

  return (
    <div className="main-container" id="ProductPage">
      <h1>{product.title}</h1>
      <main className="product-main">
        <div
          className="product-details-container"
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            alignItems: "flex-start",
          }}>
          <div className="product-card">
            <img
              src={product.image.url}
              alt={product.image.alt || product.title}
              style={{ width: "100%", height: "auto" }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            {hasDiscount && <p>Discount: {discountPercentage.toFixed(2)}%</p>}
            <p>Price: ${(product.price / 100).toFixed(2)}</p>
            <p>Discounted Price: ${(product.discountedPrice / 100).toFixed(2)}</p>
            <p>Rating: {product.rating} stars</p>
            <button onClick={handleAddToCart}>Add to Cart</button> {/* Updated to use handleAddToCart */}
          </div>
          {product.reviews && product.reviews.length > 0 && (
            <div className="product-reviews">
              {/* <h4>Reviews</h4> */}
              <Reviews reviews={product.reviews} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
