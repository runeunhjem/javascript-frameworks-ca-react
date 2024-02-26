import Header from "../Header";
import Footer from "../Footer";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

// Define prop types
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
