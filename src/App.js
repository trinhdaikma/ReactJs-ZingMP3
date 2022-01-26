import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import CaNhan from "./pages/CaNhan";
import Following from "./pages/Following";
import Home from "./pages/Home";
import Radio from "./pages/Radio";
import ZingChart from "./pages/ZingChart";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/canhan" component={CaNhan} />
          <Route path="/" exact component={Home} />
          <Route path="/chart" component={ZingChart} />
          <Route path="/radio" component={Radio} />
          <Route path="/following" component={Following} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
