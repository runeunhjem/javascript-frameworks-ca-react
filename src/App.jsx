import VisuallyHidden from "./VisuallyHidden";

function App() {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <VisuallyHidden>
        <p>This is important information for screen readers but not visually displayed.</p>
      </VisuallyHidden>
      {/* Other content */}
    </div>
  );
}

export default App;

