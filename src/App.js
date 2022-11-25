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
      <nav class="navbar navbar-expand-md navbar-light bg-light">
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
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="true">
                Shop
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">All Products</a>
                <a class="dropdown-item" href="#">Popular Items</a>
                <a class="dropdown-item" href="#">New Arrivals</a>
              </div>
            </li>
            <li>
            <Button variant="contained"><ShoppingCartIcon/> Cart {}</Button>
            </li>
          </ul>
        </div>
      </nav>
      <Template/>
    </div>
  )
}

function Template(){
  return (
    <div className='template'>
      <h2 className='fh2'>Shop in style</h2>
      <p className='para'>with this shop homepage template</p>
      <Product/>
    </div>
  )
}

function Product() {
  const productList = [{
    image:'url',
    sale:null,
    name:'Fancy product',
    rating:null,
    price:'$40.00 - $80.00',
    button:'View options',
  },
  {
    image:'url',
    sale:'Sale',
    name:'Special Item',
    rating:'⭐⭐⭐⭐⭐',
    price:'$20.00 $18.00',
    button:'Add to cart',
  },
  {
    image:'url',
    sale:'Sale',
    name:'Sale Item',
    rating:null,
    price:'$40.00 $25.00',
    button:'Add to cart',
  },{
    image:'url',
    sale:null,
    name:'Popular Item',
    rating:'⭐⭐⭐⭐⭐',
    price:'$40.00',
    button:'Add to cart',
  },{
    image:'url',
    sale:'Sale',
    name:'Sale Item',
    rating:null,
    price:'$50.00 $25.00',
    button:'Add to cart',
  },{
    image:'url',
    sale:null,
    name:'Fancy product',
    rating:null,
    price:'$120.00 - $280.00',
    button:'View options',
  },{
    image:'url',
    sale:'Sale',
    name:'Special Item',
    rating:'⭐⭐⭐⭐⭐',
    price:'$20.00 $18.00',
    button:'Add to cart',
  },{
    image:'url',
    sale:null,
    name:'Popular Item',
    rating:'⭐⭐⭐⭐⭐',
    price:'$40.00',
    button:'Add to cart',
  }];
  return(
    <div>
      
    </div>
  )
}