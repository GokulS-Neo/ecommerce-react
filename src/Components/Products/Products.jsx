import { Grid } from '@material-ui/core'
import useStyles from './styles'
import axios from 'axios';
import { useState, useEffect } from 'react'
import Product from './Product/Product'
import { products as productData } from "./productsData"
import { useHistory } from 'react-router-dom';

const Products = (props) => {

  const [products, setProducts] = useState(props.products);
  

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        { products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.productId}>
            <Product  product={product} addToCart={props.addToCart} />
        </Grid> 
        ))}
      </Grid>
    </div>
  )
}

export default Products
