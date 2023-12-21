import "./App.css";
import Button from "./components/Button.jsx";
import Alert from "./components/Alert.jsx";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button style="primary" />
        <Button style="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert type="error" />
        <Alert type="warning" />
        <Alert type="info" />
        <Alert type="success" />
      </div>
    </div>
  );
}

export default App;
