import { useEffect, useState } from 'react'
import { Container, Divider, Grid, Paper, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import CartItem from './CartItem/CartItem'
import Model from "../Model/Model";

import useStyles from './styles'

const Cart = (props) => {

  const history = useHistory();

  const [cartData, setCartData] = useState(props.cart);
  const [prices, setPrices] = useState({fixedPrice : 0, discountPrice : 0});
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  // increment the quantity of item in cart
  const incrementItemInCart = (item) => {

    let cartItems = [...cartData];
    let modifiedCartItemsList = cartItems.map(cartItem => {
      if(cartItem.productId === item.productId) {
        cartItem.quantity += 1;
      }
      return cartItem;
    });
    
    setCartData(modifiedCartItemsList);
    calculatePriceValues();
  }


  // decrement the item in cart
  const deductItemInCart = (item) => {

    let cartItems = [...cartData];
    let modifiedCartItemsList = cartItems.map(cartItem => {
      if(cartItem.productId == item.productId && item.quantity > 0) {
        cartItem.quantity -= 1;
      }
      return cartItem;
    });
    setCartData(modifiedCartItemsList);
    calculatePriceValues();
  }


  // remove item from cart
  const removeItemFromCart = (item) => {

    let cartItems = [...cartData];
    let removedCartItemList = cartItems.filter(cartItem => cartItem.productId !== item.productId);
    setCartData(removedCartItemList);
    props.updateCartLength(cartData.length);
  }

  const calculatePriceValues = () => {
    let fixedPrice = 0;
    let discountPrice = 0;
    console.log(cartData);
    cartData.forEach((dataItem) => {
      fixedPrice += ( dataItem.productPrice * dataItem.quantity );
      discountPrice += ( dataItem.discountPrice * dataItem.quantity );
    });

    setPrices({
      fixedPrice,
      discountPrice, 
    })
    setDeliveryCharge(prices.fixedPrice > 0 && prices.fixedPrice <= 2000 ? '₹100' : prices.fixedPrice == 0 ? 'None' : 'Free');
    // setDeliveryCharge( prices.fixedPrice > 2000 ? 'Free' : prices.fixedLength <= 2000 && prices.fixedLength > 0 ? '' : '0' );
    setTotalPrice(prices.fixedPrice - prices.discountPrice + ( prices.fixedPrice > 2000 ? 100 : 0));
  }

  useEffect(() => {
    if(!props.credentials.authenticated) {
      history.push("/login");
    }
  })

  useEffect(() => {
    props.updateCartLength(cartData.length);
    props.updateCartsData(cartData);
  }, [cartData]);
   
  useEffect(() => {
    calculatePriceValues();
  }, [prices.fixedPrice, prices.discountPrice, deliveryCharge, cartData]);

  const classes = useStyles();

  return (
    <Container>
      
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={7}>
          <Paper className={classes.card}>
            <Typography variant='h5'>My Cart</Typography>
            <Divider />
            { cartData.map((item) =>  <CartItem increment={incrementItemInCart} decrement={deductItemInCart} remove={removeItemFromCart} item={item} key={item.productId} />)}   
          </Paper>
          {cartData.length > 0 && <Model />}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={5}>
          <Paper className={classes.card}>
            <Typography variant="h5" className={classes.heading}>PRICE DETAILS</Typography>
            <Divider />
            <div className={classes.list}>
              <Typography variant="subtitle1">Price({ cartData.length} item)</Typography><span>₹{ prices.fixedPrice }</span>
            </div>
            <div className={classes.list}>
              <Typography variant="subtitle1">Discount</Typography><span>₹{ prices.discountPrice }</span>
            </div>
            <div className={classes.list}>
              <Typography variant="subtitle1">Delivery Charges</Typography><span>{ deliveryCharge }</span>
            </div>
            <Divider />
            <div className={classes.list}>
              <Typography variant="subtitle1">Total</Typography><span>₹{ totalPrice }</span>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart

