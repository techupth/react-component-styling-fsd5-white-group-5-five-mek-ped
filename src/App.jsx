import "./App.css";
import Button from "./components/Button.jsx";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button style="primary" />
        <Button style="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
      </div>
    </div>
  );
}

export default App;
