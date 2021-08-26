import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exect path="/shop" component={ShopPage} />
        <Route exect path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
