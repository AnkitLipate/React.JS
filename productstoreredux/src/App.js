import './App.css';
import {Switch, Route} from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={ProductList}/>
        <Route path="/product/:productId" component={ProductDetails}/>
        <Route>404 Page not found</Route>
      </Switch>
    </div>
  );
}

export default App;
