import PropTypes from "prop-types";
import "./index.css";

const Checkmark = ({ visible, onComplete }) => {
  return (
    <div className={`checkmark ${visible ? "animate" : ""}`} onAnimationEnd={onComplete}>
      ✔️ {/* Or use an SVG/icon of your choice */}
    </div>
  );
};

Checkmark.propTypes = {
  visible: PropTypes.bool.isRequired,
  onComplete: PropTypes.func,
};

export default Checkmark;
