import PropTypes from "prop-types";

function VisuallyHidden({ children }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        margin: "-1px",
        padding: "0",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: "0",
      }}>
      {children}
    </div>
  );
}

// Define prop types
VisuallyHidden.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VisuallyHidden;
