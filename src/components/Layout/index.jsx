import Header from "../Header";
import Footer from "../Footer";
import PropTypes from "prop-types";
import { FilterVisibilityProvider } from "../../contexts/FilterVisibilityContext";

function Layout({ children }) {
  return (
    <div>
      <FilterVisibilityProvider>
        <Header />
        {children}
        <Footer />
      </FilterVisibilityProvider>
    </div>
  );
}

// Define prop types
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
