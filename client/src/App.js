import './App.css';
import { BottomNav } from './components/BottomNav';
import { TopNav } from './components/TopNav';
function App() {
  return (
    <div className='App'>
      <TopNav></TopNav>
      <h1>Family Matterz</h1>
      <BottomNav />
    </div>
  );
}

export default App;
