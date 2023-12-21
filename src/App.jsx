import "./App.css";
import { Button } from "./components/Button.jsx";
import { Alert } from "./components/Alert.jsx";
function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button bgColor="primary" text="Primary" />
        <Button bgColor="secondary" text="Secondary" />
      </div>
      <hr />
      <br />
      <div className="alert-components-section">
        <Alert alertBox="error" alertText="This is error alert box" />
        <br />
        <Alert alertBox="warning" alertText="This is warning alert box" />
        <br />
        <Alert alertBox="info" alertText="This is info alert box" />
        <br />
        <Alert alertBox="success" alertText="This is success alert box" />
      </div>
    </div>
  );
}

export default App;
