import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header/>
    </div>
  );
}

export default App;

function Header() {
  return(
    <div className='header'>
      <ul className='navbar-nav'>
        <li className="nav-item">
          <a className="nav-link" href="#">Start BootStrap</a>
        </li>
        <div className='navbar-menu'>
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li>
        </div>
      </ul>
    </div>
  )
}