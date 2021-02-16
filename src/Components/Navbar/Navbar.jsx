import { AppBar, Toolbar, IconButton, Badge, ListItem } from "@material-ui/core"
import { ShoppingCart } from '@material-ui/icons'
import useStyle from './styles'
import { BrowserRouter as Router, useHistory, Link, Switch, Route, withRouter } from 'react-router-dom'

import Products from '../Products/Products';
import Registration from '../Registration/Registration';
import Login from '../Login/Login'
import Cart from '../Cart/Cart'
import Home from "../Home/Home";

import { products } from "../Products/productsData";
import usersData from "./users";

import { useEffect, useState } from "react";

const Navbar = () => {

  const history = useHistory();

  const [cartLength, setCartLength] = useState(0);
  const [cartData, setCartData] = useState([]);
  const [productsData, setProductsData] = useState(products);

  const [credentials, setCredentials] = useState({
    authenticated : false,
    username : '',
    password : ''
  });
  

  const [usersDb, setUsersDb] = useState(usersData);

  const verifyLoginAddition = (userToBeVerified) => {  
    console.log('Verify Login entered');  
    const foundUser = usersDb.filter(user => user.email === userToBeVerified.email && user.password === userToBeVerified.password);
    
    if(foundUser.length > 0) {
      let newCredentials = {
        username : foundUser.username,
        password : foundUser.password,
        authenticated : true
      }
      setCredentials(newCredentials);
      return true;
    } else {
      return false;
    }
  }

  const addUserToDb = (userToBeAdded) => {
    if(usersDb.filter(user => user.email === userToBeAdded.email).length === 0) {
      setUsersDb([...usersDb, userToBeAdded]);
    }
    
    setCredentials({
      username : userToBeAdded.username,
      password : userToBeAdded.password,
      authenticated : true
    })
    history.push('/products');
  }

  const addToCart = (productItemToAdd) => {

    if(!credentials.authenticated) {
      history.push("/login");
      return;
    }
      

    if( cartData.filter(cartItem => cartItem.productId === productItemToAdd.productId).length < 1) {
      let newCartItems = [...cartData];
      let existingProduct = productsData.filter(productItem => productItem.productId === productItemToAdd.productId)[0];
      newCartItems.push(existingProduct)
      setCartData(newCartItems);
    }
    
  }

  useEffect(() => {
    setCartLength(cartData.length);
  }, [cartData])

  

  const classes = useStyle()
  const authConfirm = localStorage.getItem("accessToken")


  const handleLogout = () => {
    setCredentials({
      authenticated : false,
      username : '',
      password : ''
    });

    setCartLength(0);
    setCartData([]);
    history.replace("/");
  }


  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <ListItem className={classes.brand} component={Link} to="/">
            ShopKart
          </ListItem>
          
          <div className={classes.links}>
            <ListItem className={classes.link} component={Link} to="/products">
              Products
            </ListItem>
            { !credentials.authenticated ? 
              <ListItem className={classes.link} component={Link} to="/login">
                Login
              </ListItem> : 
              <ListItem className={classes.link} onClick={handleLogout}>
                  Logout
              </ListItem>
             }
          </div>
          <IconButton className={classes.cartIcon} aria-label="add to cart" color="inherit" component={Link} to='/cart'>
              <Badge badgeContent={cartLength} color="secondary">
                <ShoppingCart />
              </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Switch>
          <Route path="/products">
          <Products 
              products={productsData} 
              updateProducts={setProductsData}
              addToCart={addToCart}
            />
          </Route>

          <Route path="/login">
            <Login 
              credentials={credentials} 
              updateCrendentials={setCredentials}
              verify={verifyLoginAddition}
            />
          </Route>

          <Route path="/registration">
            <Registration 
              addUser={addUserToDb}
            />
          </Route>

          <Route path="/cart">
            <Cart 
              cart={cartData}  
              updateCartsData={setCartData}
              updateCartLength={setCartLength} 
              credentials={credentials}
            />
          </Route>

          <Route path="/">
            <Home 
              credentials={credentials}
            />
          </Route>
        </Switch>
    </>
  )
}

export default withRouter(Navbar);
