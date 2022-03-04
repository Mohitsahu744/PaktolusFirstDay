import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { EmpView, Card } from "./pages/employee";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/employee" exact component={EmpView} />
        <Route path="/employee" exact component={Card} />
      </Switch>
    </Router>
  );
}

export default App;

