import logo from './logo.svg';
import './App.css';
import View from './view/View';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <View label="Roman numerals" />
      </header>
    </div>
  );
}

export default App;
