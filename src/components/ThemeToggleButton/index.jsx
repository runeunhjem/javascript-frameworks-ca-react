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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-pink-light);
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

// The container that holds the switch
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 1em;
  justify-self: flex-end;

  ${Checkbox}:checked + ${Slider} {
    background-color: var(--color-gray-dark);
  }

  ${Checkbox}:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;

// Exporting the functional component that uses the styled components
const ThemeSwitch = ({ toggleTheme }) => (
  <>
    <VisuallyHidden htmlFor="theme-switch-checkbox">Toggle theme</VisuallyHidden>
    <Switch>
      <Checkbox id="theme-switch-checkbox" type="checkbox" onChange={toggleTheme} />
      <Slider />
    </Switch>
  </>
);


// Define propTypes for ThemeSwitch component
ThemeSwitch.propTypes = {
  toggleTheme: PropTypes.func.isRequired, // Ensures toggleTheme is a function and is required
};

export default ThemeSwitch;
