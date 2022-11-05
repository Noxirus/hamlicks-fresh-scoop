import logo from './Images/Hamlicks_LOGOCropped.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {console.log("This is testing if the app has any reference at all")}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hamlicks is currently under maintenance! Please come back occasionally for updates.
        </p>
      </header>
    </div>
  );
}

export default App;
