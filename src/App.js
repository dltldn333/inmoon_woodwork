import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";
import Navigation from "./Navigation";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navigation />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
