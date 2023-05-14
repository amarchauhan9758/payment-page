import logo from './logo.svg';
import './App.css';
import PlanSelectionPage from './components/PlanSelectionPage/PlanSelectionPage';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
    <Header/>
    <PlanSelectionPage/>
    </div>
  );
}

export default App;
