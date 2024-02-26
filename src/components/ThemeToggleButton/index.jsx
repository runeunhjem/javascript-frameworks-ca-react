import PropTypes from "prop-types"; // Import PropTypes
import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden"; // Import VisuallyHidden component

// The actual switch that will be hidden and replaced by the Slider below
const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

// The slider that will visually represent the switch
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 4px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-pink-light);
  transition: 0.4s;
  border-radius: 14px;
  padding: 0 6px;
  height: 26px;
  box-shadow: 1px 1px 6px 0px var(--color-gray-dark);

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 5px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

// The container that holds the switch
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 34px;
  justify-self: flex-end;

  ${Checkbox}:checked + ${Slider} {
    background-color: var(--color-gray-dark);
    box-shadow: 1px 1px 3px 1px var(--color-gray);
  }

  ${Checkbox}:checked + ${Slider}:before {
    background-color: var(--color-gray-light);
    transform: translateX(16px);
  }
`;

// Exporting the functional component that uses the styled components
const ThemeSwitch = ({ toggleTheme }) => (
  <Switch>
    {/* VisuallyHidden component used to label the checkbox input */}
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
