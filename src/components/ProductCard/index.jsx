// import PropTypes from "prop-types";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../contexts/CartContext";
// import "./index.css";

// function ProductCard({ product }) {
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const [isAdded, setIsAdded] = useState(false);

//   // const imageUrl = product.image ? product.image.url : "https://via.placeholder.com/300";
//   const imageAlt = product.image && product.title ? product.title : "";

//   const discountPercentage =
//     product.price > product.discountedPrice
//       ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
//       : 0;

//   const handleNavigate = () => navigate(`/product/${product.id}`);

//   const handleAddToCart = (event) => {
//     event.stopPropagation();
//     setIsAdded(true);
//     addToCart(product);
//     setTimeout(() => setIsAdded(false), 1000);
//   };

//   const roundRating = (rating) => Math.round(rating * 2) / 2;

//   const renderStars = () => {
//     const roundedRating = roundRating(product.rating);
//     let stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (i <= Math.floor(roundedRating)) {
//         stars.push(<i key={i} className="star bi bi-star-fill" aria-hidden="true"></i>);
//       }
//       else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
//         stars.push(<i key={i} className="star bi bi-star-half" aria-hidden="true"></i>);
//       } else {
//         stars.push(<i key={i} className="star bi bi-star" aria-hidden="true"></i>);
//       }
//     }
//     return stars;
//   };

//   return (
//     <div className="product-card" aria-label={`Product card for ${product.title}`}>
//       <div className="image-container" role="img" aria-label={imageAlt}>
//         <img
//           src={product.image ? product.image.url : "https://via.placeholder.com/50"}
//           alt={product.image && product.title ? product.image.alt || product.title : "Product image unavailable"}
//           className="product-image"
//         />

//         <button
//           onClick={handleAddToCart}
//           className={`add-to-cart-button ${isAdded ? "added" : ""}`}
//           aria-label={`Add ${product.title} to cart`}>
//           Add to Cart
//         </button>
//         {discountPercentage > 0 && <div className="discount-tag">Save: {discountPercentage}%</div>}
//       </div>
//       <h2 className="product-title">{product.title}</h2>
//       <p className="product-description">{product.description}</p>
//       <p className="normal-price">Normal price: ${(product.price / 100).toFixed(2)}</p>
//       <p className={`discounted-price ${discountPercentage > 0 ? "" : "invisible"}`}>
//         {discountPercentage > 0 ? `Discounted Price: ${(product.discountedPrice / 100).toFixed(2)}` : ""}
//       </p>
//       <p className="tags">Categories: {product.tags.map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1)).join(", ")}</p>
//       <div className="rating-container" aria-label={`Rating: ${product.rating} out of 5`}>
//         <span className="rating-text">Rating:</span>
//         <div className="stars">{renderStars()}</div>
//       </div>
//       <button onClick={handleNavigate} className="view-product" aria-label={`View ${product.title}`}>
//         View Product
//       </button>
//     </div>
//   );
// }

// // Define the prop types for ProductCard
// ProductCard.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     image: PropTypes.shape({
//       url: PropTypes.string,
//       alt: PropTypes.string,
//     }),
//     price: PropTypes.number.isRequired,
//     discountedPrice: PropTypes.number,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string,
//     rating: PropTypes.number,
//     tags: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
// };

// export default ProductCard;

import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import * as S from "./index.styled";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const imageAlt = product.image && product.title ? product.title : "";

  const discountPercentage =
    product.price > product.discountedPrice
      ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
      : 0;

  const handleNavigate = () => navigate(`/product/${product.id}`);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    setIsAdded(true);
    addToCart(product);
    setTimeout(() => setIsAdded(false), 1000);
  };

  const roundRating = (rating) => Math.round(rating * 2) / 2;

  const renderStars = () => {
    const roundedRating = roundRating(product.rating);
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(roundedRating)) {
        stars.push(<i key={i} className="bi bi-star-fill" aria-hidden="true"></i>);
      } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
        stars.push(<i key={i} className="bi bi-star-half" aria-hidden="true"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star" aria-hidden="true"></i>);
      }
    }
    return stars;
  };

  return (
    <S.Card aria-label={`Product card for ${product.title}`}>
      <S.ImageContainer role="img" aria-label={imageAlt}>
        <S.ProductImage src={product.image ? product.image.url : "https://via.placeholder.com/300"} alt={imageAlt} />
        <S.AddToCartButton
          onClick={handleAddToCart}
          className={isAdded ? "added" : ""}
          aria-label={`Add ${product.title} to cart`}>
          Add to Cart
        </S.AddToCartButton>
        {discountPercentage > 0 && <S.DiscountTag>Save: {discountPercentage}%</S.DiscountTag>}
      </S.ImageContainer>
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ProductDescription>{product.description}</S.ProductDescription>
      <S.Price className="normal-price">Normal price: ${(product.price / 100).toFixed(2)}</S.Price>
      <S.Price className={`discounted-price ${discountPercentage > 0 ? "" : "invisible"}`}>
        {discountPercentage > 0 ? `Discounted Price: ${(product.discountedPrice / 100).toFixed(2)}` : ""}
      </S.Price>
      <S.Tags>Categories: {product.tags.map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1)).join(", ")}</S.Tags>
      <S.RatingContainer aria-label={`Rating: ${product.rating} out of 5`}>
        <S.RatingText>Rating:</S.RatingText>
        <S.Stars>{renderStars()}</S.Stars>
      </S.RatingContainer>
      <S.ViewProductButton onClick={handleNavigate} aria-label={`View ${product.title}`}>
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
  }).isRequired,
};

export default ProductCard;
