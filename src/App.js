import './App.css';
import Tasks from './components/Tasks';
import SideMenu from './components/SideMenu';

function App() {
  return (
      <div className="flex">
        <SideMenu />
        <Tasks />
      </div>
  );
}

export default App;
