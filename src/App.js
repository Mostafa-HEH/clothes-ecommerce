import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exect path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
