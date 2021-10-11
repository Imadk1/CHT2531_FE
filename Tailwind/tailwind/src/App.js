import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="bg-red-500 px-4 py-2 m-2 rounded-md hover:bg-red-700 cursor-pointer">
          <b>Hello World</b>
        </h2>
      </header>
    </>
  );
}

export default App;
