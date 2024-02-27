import Header from "../Header";
import Footer from "../Footer";
import PropTypes from "prop-types";
import { FilterVisibilityProvider } from "../../contexts/FilterVisibilityContext";
import "./index.css";

function Layout({ children }) {
  return (
    <div className="pageWrapper">
      <FilterVisibilityProvider>
        <Header />
        <main className="pageBody">{children}</main>
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
