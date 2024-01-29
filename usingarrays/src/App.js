import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import MobileList from './component/MobileList'
function App() {
  var namearr = ["Iphone 15", "samsung notes", "google pixel", "  samsung guru"]
  return (
    <div>
      <Header/>
      <MobileList arr={namearr}/>
    </div>
  );
}

export default App;
