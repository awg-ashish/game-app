import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path={["/game/:id", "/"]} exact>
          <Home />
        </Route>
        <Route path={["/game/search/:id", "/search"]} exact>
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
