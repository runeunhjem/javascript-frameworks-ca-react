import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";
import { FilterVisibilityProvider } from "../../contexts/FilterVisibilityContext";
import * as S from "./index.styled";

function Layout({ children, toggleTheme }) {
  return (
    <S.PageWrapper>
      <FilterVisibilityProvider>
        <Header toggleTheme={toggleTheme} />
        <S.PageBody>{children}</S.PageBody>
        <Footer />
      </FilterVisibilityProvider>
    </S.PageWrapper>
  );
}

// Define prop types
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Layout;
