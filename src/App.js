import './App.css';
import DayList from './component/DayList';
import Header from './component/Header';

function App() {
  console.log("boot");
  return (
  <div className="App">
    <Header />
    <DayList />
  </div>
  );
}

export default App;
