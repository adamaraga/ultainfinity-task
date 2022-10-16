import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "./assets/styles/scss/main.scss";
import Account from "./pages/Account";

function App(): JSX.Element {
  return (
    <div className="app">
      <Account />
    </div>
  );
}

export default App;
