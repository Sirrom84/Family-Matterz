
import "./App.scss";
import {BottomNav} from "./components/BottomNav/BottomNav";
import {TopNav} from "./components/TopNav/TopNav";
import {ChoreChart} from "./components/ChoreChart/ChoreChart";
import {TimelineHome} from "./components/TimeLine/TimeLineHome";
import {GroceryList} from "./components/GroceryList/GroceryList";
import {Todo} from "./components/Todo/Todo";
import {Survey} from "./components/Survey/Survey";
import {Recipes} from "./components/Recipies/Recipes";
import {Ingredients} from "./components/Recipies/Ingredients";
import Calender2 from "./components/Calender/Calender2";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Numbers from "./components/Numbers/Numbers";
import Login from "./components/Login/Login";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={TimelineHome} />
					<Route path="/welcome" component={Login} />
					<Route path="/stats" component={ChoreChart} />
					<Route path="/grocerylist" component={GroceryList} />
					<Route path="/calender" component={Calender2} />
					<Route path="/survey" component={Survey} />
					<Route path="/todolist" component={Todo} />
					<Route path="/recipes/:id/ingredients" component={Ingredients} />
					<Route path="/recipes" component={Recipes} />
					<Route path="/numbers" component={Numbers} />
				</Switch>
				{/* <BottomNav /> */}
			</div>
		</Router>
	);
}

export default App;
