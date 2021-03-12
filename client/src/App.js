import "./App.css";
<<<<<<< HEAD
import { BottomNav } from "./components/BottomNav/BottomNav";
import { TopNav } from "./components/TopNav/TopNav";
import { ChoreChart } from "./components/ChoreChart/ChoreChart";
import { TimelineHome } from "./components/TimeLine/TimeLineHome";
import { GroceryList } from "./components/GroceryList/GroceryList";
import MyCalender from "./components/Calender/Calender";

function App() {
  return (
    <div className="App">
      <TopNav />
      <div className="grid-container">
        <div className="two">
          <TimelineHome />
        </div>
        <div className="three">
          <ChoreChart />
        </div>
        <div className="four">
          <GroceryList />
          <div className="five">
            <MyCalender />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
=======
import {BottomNav} from "./components/BottomNav/BottomNav";
import {TopNav} from "./components/TopNav/TopNav";
import {ChoreChart} from "./components/ChoreChart/ChoreChart";
import {TimelineHome} from "./components/TimeLine/TimeLineHome";
import {GroceryList} from "./components/GroceryList/GroceryList";
import {Todo} from "./components/TaskApp/Todo";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<TopNav />
				<Switch>
					<Route path="/" exact component={TimelineHome} />
					<Route path="/stats" component={ChoreChart} />
					<Route path="/grocerylist" component={GroceryList} />
					<Route path="/todolist" component={Todo} />
				</Switch>
				<BottomNav />
			</div>
		</Router>
	);
>>>>>>> fe794d9b5779ae737603db5cf939299cd4bf8aae
}

export default App;
