<<<<<<< HEAD
import "./App.css";
import { BottomNav } from "./components/BottomNav/BottomNav";
import { TopNav } from "./components/TopNav/TopNav";
import { ChoreChart } from "./components/ChoreChart/ChoreChart";
import { TimelineHome } from "./components/TimeLine/TimeLineHome";
import { GroceryList } from "./components/GroceryList/GroceryList";
import { Todo } from "./components/TaskApp/Todo";
import Calender from "./components/Calender/Calender";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { dom } from "@fortawesome/fontawesome-svg-core";
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
          <Route path="/calender" component={Calender} />
=======
import './App.scss';

import { BottomNav } from './components/BottomNav/BottomNav';
import { TopNav } from './components/TopNav/TopNav';
import { ChoreChart } from './components/ChoreChart/ChoreChart';
import { TimelineHome } from './components/TimeLine/TimeLineHome';
import { GroceryList } from './components/GroceryList/GroceryList';
import { Todo } from './components/TaskApp/Todo';
import { Survey } from './components/Survey/Survey';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <TopNav />
        <Switch>
          <Route path='/' exact component={TimelineHome} />
          <Route path='/stats' component={ChoreChart} />
          <Route path='/grocerylist' component={GroceryList} />
          <Route path='/todo' component={Todo} />
          <Route path='/survey' component={Survey} />
          <Route path='/todolist' component={Todo} />

>>>>>>> a9062f3475b867829ee1f24ede5f4bf57fb90b58
        </Switch>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
