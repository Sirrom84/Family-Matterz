<<<<<<< HEAD
<<<<<<< HEAD
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
=======
// import "./App.scss";
// import { BottomNav } from "./components/BottomNav/BottomNav";
// import { TopNav } from "./components/TopNav/TopNav";
// import { ChoreChart } from "./components/ChoreChart/ChoreChart";
// import { TimelineHome } from "./components/TimeLine/TimeLineHome";
// import { GroceryList } from "./components/GroceryList/GroceryList";
// import { Todo } from "./components/Todo/Todo";
// import { Survey } from "./components/Survey/Survey";
// // import Calender from "./components/Calender/Calender";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Calender2 from "./components/Calender/Calender2";
=======
>>>>>>> 7e76f7f35cc44a6f18c736cef02d76047911dbe2
import './App.scss';
import { BottomNav } from './components/BottomNav/BottomNav';
import { TopNav } from './components/TopNav/TopNav';
import { ChoreChart } from './components/ChoreChart/ChoreChart';
import { TimelineHome } from './components/TimeLine/TimeLineHome';
import { GroceryList } from './components/GroceryList/GroceryList';
import { Todo } from './components/Todo/Todo';
import { Survey } from './components/Survey/Survey';
import { Recipes } from './components/Recipies/Recipes';
import Calender2 from './components/Calender/Calender2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> master

function App() {
  return (
    <Router>
      <div className='App'>
        <TopNav />
        <Switch>
<<<<<<< HEAD
          <Route path="/" exact component={TimelineHome} />
          <Route path="/stats" component={ChoreChart} />
          <Route path="/grocerylist" component={GroceryList} />
          <Route path="/todo" component={Todo} />
          <Route path="/survey" component={Survey} />
<<<<<<< HEAD
          <Route path="/todolist" component={Todo} />
          <Route path="/calender" component={Calender} />
          <Route path="/recipes" component={Recipes} />
          {/* <Route path="/chatapp" component={ChatApp} /> */}
=======

          <Route path="/todolist" component={Todo} />
          <Route path="/calender" component={Calender2} />
//       <div className='App'>
//         <TopNav />
//         <Switch>
//           <Route path='/' exact component={TimelineHome} />
//           <Route path='/stats' component={ChoreChart} />
//           <Route path='/grocerylist' component={GroceryList} />
//           <Route path='/todo' component={Todo} />
//           <Route path='/survey' component={Survey} />
//           <Route path='/todolist' component={Todo} />
//           <Route path='/calender' component={Calender} />
=======
          <Route path='/' exact component={TimelineHome} />
          <Route path='/stats' component={ChoreChart} />
          <Route path='/grocerylist' component={GroceryList} />
          <Route path='/todo' component={Todo} />
          <Route path='/calender' component={Calender2} />
          <Route path='/survey' component={Survey} />
          <Route path='/todolist' component={Todo} />
>>>>>>> 7e76f7f35cc44a6f18c736cef02d76047911dbe2
          <Route path='/recipes' component={Recipes} />
>>>>>>> master
        </Switch>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
