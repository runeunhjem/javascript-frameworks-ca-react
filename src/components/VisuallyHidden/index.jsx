import PropTypes from "prop-types";
import * as S from "./index.styled.jsx"; // Adjust the path as needed

function VisuallyHidden({ children }) {
  return <S.VisuallyHiddenContainer>{children}</S.VisuallyHiddenContainer>;
}

// Define prop types
VisuallyHidden.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VisuallyHidden;
