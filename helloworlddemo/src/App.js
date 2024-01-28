
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
function App(props) {
  return (
    <div>
      <Header name="Ankit" address="Nagpur"/>
      <Header name="Rajan"/>
        <div className="App">
          <h1>Hello World!!!</h1>
          <h2>Welcome to react App from function component</h2>
        </div>
      <Footer id="check" name="Mycompany"/>
    </div>
  );
}

export default App;
