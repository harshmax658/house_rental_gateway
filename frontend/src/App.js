import HomePage from "./Pages/Home/HomePage";
import { AppStyle } from "./App._style";
import Card from "./components/Card/Card";

function App() {
  return (
    <AppStyle>
      <HomePage />
      <Card />
    </AppStyle>
  );
}

export default App;
