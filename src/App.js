import logo from "./logo.svg";
import "./App.css";
import { i18n } from "./translate/i18n";
import { Routes } from "./Routes";

function App() {
  return (
    <div className="App">
      <Routes />
      {/* <header className="App-header">
        <h1>{i18n.t("titles.app")}</h1>
        <p>{i18n.t("messages.app")}</p>
        <button>{i18n.t("buttons.save")}</button>
        <small>{i18n.t("messages.small")}</small>
      </header> */}
    </div>
  );
}

export default App;
