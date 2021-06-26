import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import { useStateValue } from "./store/StateProvider";
import { auth } from "./utils/firebase";

import "./App.css";

function App() {
  const [_, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      dispatch({ type: "SET_USER", user: authUser ? authUser : null });
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <div className="app-main">
            <Header />
            <Home />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
