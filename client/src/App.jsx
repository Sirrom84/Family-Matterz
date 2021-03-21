import "./App.scss";
import TopNav from "./components/TopNav/TopNav";
import { DashBoard } from "./components/DashBoard/Dashboard";
import { GroceryList } from "./components/GroceryList/GroceryList";
import { Todo } from "./components/Todo/Todo";
import { Survey } from "./components/Survey/Survey";
import { Recipes } from "./components/Recipies/Recipes";
import { Ingredients } from "./components/Recipies/Ingredients";
import Calendar from "./components/Calendar/Calendar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import ChatAppV2 from "./components/ChatAppV2/ChatAppV2";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Switch>
          <Route path="/" exact component={DashBoard} />
          <Route path="/welcome" component={Login} />

          <Route path="/grocerylist" component={GroceryList} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/survey" component={Survey} />
          <Route path="/todolist" component={Todo} />
          <Route path="/recipes/:id/ingredients" component={Ingredients} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/chatApp" component={ChatAppV2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
