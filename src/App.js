import './App.css';
import Main from './components/Main';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div className="flex">
      <SideMenu/>
      <Main />
    </div>
  );
}

export default App;