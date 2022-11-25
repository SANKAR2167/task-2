import './App.css';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Shoping Website</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">All Products</a>
                <a class="dropdown-item" href="#">Popular Items</a>
                <a class="dropdown-item" href="#">New Arrivals</a>
              </div>
            </li>
          </ul>
        </div>
        <Button variant="contained"><ShoppingCartIcon/> Cart {}</Button>
      </nav>
    </div>
  )
}