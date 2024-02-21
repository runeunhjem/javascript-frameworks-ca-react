import { useState } from "react";
import "../../../src/index.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: "",
  });
  const [touchedFields, setTouchedFields] = useState({});
  const [validationMessages, setValidationMessages] = useState({});
  const [inputStyles, setInputStyles] = useState({});

  const updateInputStyles = (name, isValid) => {
    setInputStyles((prevStyles) => ({
      ...prevStyles,
      [name]: isValid ? "#4CAF50" : "#FF5722",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (value.trim() !== "" || touchedFields[name]) {
      updateInputStyles(name, value);
      checkFieldValidation(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouchedFields((prevState) => ({
      ...prevState,
      [name]: true,
    }));
    checkFieldValidation(name, value);
  };

  const checkFieldValidation = (name, value) => {
    const isValid = validateField(name, value);
    setInputStyles((prevStyles) => ({
      ...prevStyles,
      [name]: isValid ? "#4CAF50" : "#FF5722",
    }));
    const message = validateFormMessage(name, value, isValid);
    setValidationMessages((prevMessages) => ({
      ...prevMessages,
      [name]: message,
    }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return /\S+@\S+\.\S+/.test(value);
      case "fullName":
      case "subject":
      case "message":
        return value.trim().length >= 3;
      default:
        return false;
    }
  };

  const validateFormMessage = (name, value, isValid) => {
    if (value.trim() === "") {
      return ""; // No message if the field hasn't been touched
    }
    return isValid ? "" : `The ${camelCaseToTitle(name)} must be valid and contain at least 3 characters.`;
  };

  const camelCaseToTitle = (text) => {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.keys(formData).every((name) => validateField(name, formData[name]));
    if (isFormValid) {
      console.log("Form is valid, submitting data:", formData);
      // Reset the form
      setFormData({ fullName: "", subject: "", email: "", message: "" });
      setInputStyles({});
      setTouchedFields({});
      setValidationMessages({});
    }
  };

  return (
    <div className="main-container" id="ContactPage" style={{ padding: "2em", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1em" }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {Object.entries(formData).map(([name, value]) => (
          <div key={name} style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor={name} // Link label to input via id
              style={{ marginBottom: "8px", fontWeight: "bold", textAlign: "left" }}>
              {camelCaseToTitle(name)}
            </label>
            {name !== "message" ? (
              <input
                type={name === "email" ? "email" : "text"}
                id={name} // Provide an id that matches the htmlFor of the label
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  padding: "10px",
                  border: `2px solid ${inputStyles[name] || "#ccc"}`,
                  borderRadius: "4px",
                  outlineColor: inputStyles[name],
                }}
                placeholder={`Enter your ${camelCaseToTitle(name)}`}
                required
              />
            ) : (
              <textarea
                id={name} // Provide an id that matches the htmlFor of the label
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="5"
                style={{
                  padding: "10px",
                  border: `2px solid ${inputStyles[name] || "#ccc"}`,
                  borderRadius: "4px",
                  outlineColor: inputStyles[name],
                  resize: "vertical",
                }}
                placeholder="Enter your message"
                required></textarea>
            )}
            {touchedFields[name] && validationMessages[name] && (
              <div style={{ color: "#FF5722", marginTop: "5px" }}>{validationMessages[name]}</div>
            )}
          </div>
        ))}
        <button className="submit-button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
