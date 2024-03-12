import PropTypes from "prop-types";
import * as S from "./index.styled.jsx";

function VisuallyHidden({ children }) {
  return <S.VisuallyHiddenContainer>{children}</S.VisuallyHiddenContainer>;
}

VisuallyHidden.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VisuallyHidden;
