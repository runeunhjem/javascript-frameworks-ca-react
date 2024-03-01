import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 2em;
  max-width: 600px;
  margin: auto;
  text-align: center;
`;

export const FormTitle = styled.h1`
  margin-bottom: 1em;
  font-size: var(--font-size-xlarge);
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: var(--font-size-xsmall);
  margin-bottom: 8px;
  font-weight: bold;
  text-align: left;
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid ${(props) => props.inputColor || "#ccc"};
  border-radius: 4px;
  outline-color: ${(props) => props.inputColor};
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 2px solid ${(props) => props.inputColor || "#ccc"};
  border-radius: 4px;
  outline-color: ${(props) => props.inputColor};
  resize: vertical;
`;

export const ValidationMessage = styled.div`
  text-align: left;
  font-size: var(--font-size-xsmall);
  color: #ff5722;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  background: ${(props) => (props.isSubmitted ? "var(--color-success)" : props.theme.viewProductButton)};
  color: ${(props) => (props.isSubmitted ? "var(--color-white)" : props.theme.text)};
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: var(--font-size-xsmall);
  transition: background-color 0.2s ease-in-out;
  box-shadow: ${(props) => props.theme.navLinkShadow};
`;
