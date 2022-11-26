import './App.css';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
function App() {
  const productLists = [{
    image:'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
    sale:null,
    name:'Fancy product',
    rating:null,
    price:'$40.00 - $80.00',
    offerprice:null,
    button:'View options',
  },
  {
    image:'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
    sale:'Sale',
    name:'Special Item',
    rating:'⭐⭐⭐⭐⭐',
    price:'$20.00',
    offerprice:'$18.00',
    button:'Add to cart',
  },
  {
    image:'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
    sale:'Sale',
    name:'Sale Item',
    rating:null,
    price:'$40.00',
    offerprice:'$25.00',
    button:'Add to cart',
  },{
    image:'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
    sale:null,
    name:'Popular Item',
    rating:'⭐⭐⭐⭐⭐',
    price:'$40.00',
    offerprice:null,
    button:'Add to cart',
  },{
    image:'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
    sale:'Sale',
    name:'Sale Item',
    rating:null,
    price:'$50.00',
    offerprice:'$25.00',
    button:'Add to cart',
  },{
    image:'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
    sale:null,
    name:'Fancy product',
    rating:null,
    price:'$120.00 - $280.00',
    offerprice:null,
    button:'View options',
  },{
    image:'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
    sale:'Sale',
    name:'Special Item',
    rating:'⭐⭐⭐⭐⭐',
    price:'$20.00',
    offerprice:'$18.00',
    button:'Add to cart',
  },{
    image:'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
    sale:null,
    name:'Popular Item',
    rating:'⭐⭐⭐⭐⭐',
    price:'$40.00',
    offerprice:null,
    button:'Add to cart',
  }];
  
  return (
    <div className="App">
      
      <Header/>
      <Template/>
      <div className='product-container'>
      {productLists.map(prl =><Product product={prl}/>)}
      </div>
      
      
    </div>
  );
}

function Header() {
  return(
    <div className='header'>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">Shoping Website</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="true">
                Shop
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">All Products</a>
                <a className="dropdown-item" href="#">Popular Items</a>
                <a className="dropdown-item" href="#">New Arrivals</a>
              </div>
            </li>
            <li>
            <Button className='cart' variant="contained"><ShoppingCartIcon/> Cart {}</Button>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
  )
}

function Template(){
  
  return (
    <div className='template'>
      <h2 className='fh2'>Shop in style</h2>
      <p className='para'>with this shop homepage template</p>
    </div>
  )
}

function Product({product}) {
  
  return(
    <div className='product-card'>
      <Badge badgeContent={product.sale} color="primary">
      <img className='product-image' src={product.image} alt={product.name}/>
      </Badge>
      <h3>{product.name}</h3>
      <p>{product.rating}</p>
      <p> <s>{product.offerprice}</s> {product.price}</p>
      <Button className='add card' variant="contained">{product.button}</Button>
    </div>
  )
  
}

export default App;