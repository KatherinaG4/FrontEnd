import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPages from "./components/LodingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} component={LandingPages} />
        <section>
          <Switch>
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/register"} component={Register} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
