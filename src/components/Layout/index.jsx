import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";
import { FilterVisibilityProvider } from "../../contexts/FilterVisibilityContext";
import * as S from "./index.styled";
import FloatingButton from "../FloatingButton";

function Layout({ children, toggleTheme }) {
  return (
    <S.PageWrapper>
      <FilterVisibilityProvider>
        <Header toggleTheme={toggleTheme} />
        <S.PageBody>
          {children}
          <FloatingButton />
        </S.PageBody>
        <Footer />
      </FilterVisibilityProvider>
    </S.PageWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Layout;
