import "./App.scss";
import { BottomNav } from "./components/BottomNav/BottomNav";
import { TopNav } from "./components/TopNav/TopNav";
import { ChoreChart } from "./components/ChoreChart/ChoreChart";
import { TimelineHome } from "./components/TimeLine/TimeLineHome";
import { GroceryList } from "./components/GroceryList/GroceryList";
import { Todo } from "./components/Todo/Todo";
import { Survey } from "./components/Survey/Survey";
import Calender from "./components/Calender/Calender";
import { Recipes } from "./components/Recipies/Recipes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ChatApp from "./components/Chatapp/ChatApp";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Switch>
          <Route path="/" exact component={TimelineHome} />
          <Route path="/stats" component={ChoreChart} />
          <Route path="/grocerylist" component={GroceryList} />
          <Route path="/todo" component={Todo} />
          <Route path="/survey" component={Survey} />
          <Route path="/todolist" component={Todo} />
          <Route path="/calender" component={Calender} />
          <Route path="/recipes" component={Recipes} />
          {/* <Route path="/chatapp" component={ChatApp} /> */}
        </Switch>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
