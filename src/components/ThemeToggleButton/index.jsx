import PropTypes from "prop-types";
import VisuallyHidden from "../VisuallyHidden";
import { Switch, Checkbox, Slider } from "./index.styled.jsx";
import "./index.css";

const ThemeSwitch = ({ toggleTheme }) => (
  <Switch>
    <VisuallyHidden>
      <label htmlFor="theme-switch-checkbox">Toggle theme</label>
    </VisuallyHidden>
    <Checkbox id="theme-switch-checkbox" type="checkbox" onChange={toggleTheme} />
    <Slider />
  </Switch>
);

// Define propTypes for ThemeSwitch component
ThemeSwitch.propTypes = {
  toggleTheme: PropTypes.func.isRequired, // Ensures toggleTheme is a function and is required
};

export default ThemeSwitch;
