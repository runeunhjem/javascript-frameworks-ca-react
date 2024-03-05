import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext/useCart";
import Reviews from "../../components/Reviews";
import * as S from "./index.styled";
import RenderStars from "../../components/RenderStars";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${productId}`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    document.title = product ? `${product.title} - Our Store` : "Product not found";
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity: 1 });
    }
  };

  const handleGoToCheckout = () => {
    navigate("/cart");
  };

  if (loading) return <S.MainContainer>Loading...</S.MainContainer>;
  if (error) return <S.MainContainer>Error: {error}</S.MainContainer>;
  if (!product) return <S.MainContainer>Product not found</S.MainContainer>;

  const hasDiscount = product.discountedPrice < product.price;
  const discountPercentage = hasDiscount ? ((product.price - product.discountedPrice) / product.price) * 100 : 0;

  return (
    <S.MainContainer>
      <S.ProductDetailsContainer>
        <S.ImageContainer>
          <S.ProductImage src={product.image.url} alt={product.image.alt || product.title} />
        </S.ImageContainer>
        <S.DetailsContainer>
          <S.RatingContainer aria-label={`Rating: ${product.rating} out of 5`}>
            <S.ProductTitle>{product.title}</S.ProductTitle>
            <div style={{ display: "flex", alignItems: "center" }}>
              <RenderStars rating={product.rating} />
              <S.StarAverage>({product.rating.toFixed(1)} stars)</S.StarAverage>
            </div>
          </S.RatingContainer>
          <S.ProductDescription>{product.description}</S.ProductDescription>
          <S.InfoContainer>
            {hasDiscount && <S.DiscountInfo>Discount: {discountPercentage.toFixed(2)}%</S.DiscountInfo>}
            <S.PriceInfo $hasDiscount={hasDiscount}>Price: ${(product.price / 10).toFixed(2)}</S.PriceInfo>
            {hasDiscount && <S.DiscountedPrice>Now: ${(product.discountedPrice / 10).toFixed(2)}</S.DiscountedPrice>}
          </S.InfoContainer>
          <S.ButtonContainer>
            <S.AddToCartButton onClick={handleAddToCart}>Add to Cart</S.AddToCartButton>
            <S.GoToCheckoutButton onClick={handleGoToCheckout}>Go to Checkout</S.GoToCheckoutButton>
          </S.ButtonContainer>
        </S.DetailsContainer>
      </S.ProductDetailsContainer>
      <S.ProductRatingsContainer>
        {product.reviews && product.reviews.length > 0 ? (
          <S.ProductReviews>
            <S.RatingInfo>
              Rating: {product.rating} stars based on {product.reviews.length} reviews
            </S.RatingInfo>
            <Reviews reviews={product.reviews} />
          </S.ProductReviews>
        ) : (
          <S.NoReviewsMessage>No reviews yet.</S.NoReviewsMessage>
        )}
      </S.ProductRatingsContainer>
    </S.MainContainer>
  );
}

export default ProductPage;
