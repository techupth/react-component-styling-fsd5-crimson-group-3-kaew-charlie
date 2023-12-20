import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button style="primary" />
        <Button style="secondary" />
        <Button style="tertiary" />
        <Button style="else" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert topic="error" />
        <Alert topic="warning" />
        <Alert topic="info" />
        <Alert topic="success" />
      </div>
    </div>
  );
}

export default App;
