import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import * as S from "./index.styled";
import RenderStars from "../RenderStars";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const imageAlt = product.image && product.title ? product.title : "";

  const discountPercentage =
    product.price > product.discountedPrice
      ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
      : 0;
  const hasDiscount = product.discountedPrice < product.price;

  const handleNavigate = () => navigate(`/product/${product.id}`);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    setIsAdded(true);
    addToCart(product);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <S.Card aria-label={`Product card for ${product.title}`}>
      <S.ImageContainer role="img" aria-label={imageAlt}>
        <S.ProductImage
          onClick={handleNavigate}
          aria-label={`View ${product.title}`}
          src={product.image ? product.image.url : "https://via.placeholder.com/300"}
          alt={imageAlt}
        />
        <S.AddToCartButton
          onClick={handleAddToCart}
          className={isAdded ? "added" : ""}
          aria-label={`Add ${product.title} to cart`}
        >
          {isAdded ? "Added ✔️" : "Add to Cart"}
        </S.AddToCartButton>
        {discountPercentage > 0 && <S.DiscountTag>Save: {discountPercentage}%</S.DiscountTag>}
      </S.ImageContainer>
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.InfoWrapper>
        <S.RatingContainer aria-label={`Rating: ${product.rating} out of 5`}>
          <RenderStars rating={product.rating} />
          <S.NumberOfReviews>({product.reviews.length})</S.NumberOfReviews>
        </S.RatingContainer>
        <S.Price $isDiscounted={hasDiscount}>
          {hasDiscount ? `NOW: $${(product.discountedPrice / 10).toFixed(2)}` : `Price: $${(product.price / 10).toFixed(2)}`}
        </S.Price>
      </S.InfoWrapper>
      <S.ViewProductButton className="view-product" onClick={handleNavigate} aria-label={`View ${product.title}`}>
        View Product
      </S.ViewProductButton>
    </S.Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    }),
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    rating: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string,
        user: PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
          username: PropTypes.string.isRequired,
        }),
      })
    ),
  }).isRequired,
};

export default ProductCard;
