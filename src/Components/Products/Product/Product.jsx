import { Card, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import { AddShoppingCart, Favorite } from '@material-ui/icons'
import { useEffect, useState } from 'react'

import useStyles from './styles'
const Product = (props) => {

  const classes = useStyles();

  const [classesforIcon, setclassesforIcon] = useState([classes.floatRight]);

  const [itemFavorite, setItemFavorite] = useState(false);
  
  const favoriteIconEnabled = [classes.floatRight, classes.bgRed].join(' ');
  const favoriteIcondisabled = [classes.floatRight].join(' ');

  
  const { productName, image, productPrice, productReview} = props.product;
  
  return (
    <Card className={classes.root}>
      <IconButton className={itemFavorite ? favoriteIconEnabled : favoriteIcondisabled} onClick={() => setItemFavorite(prevState => !prevState)}>
        <Favorite />
      </IconButton>
      <CardMedia className={classes.media}
        image={image}
      />
      <CardContent className= {classes.content}>
        <Typography variant="body1">{ productName }</Typography>     
        <Typography variant="subtitle1">₹{ productPrice }</Typography>  
        <Typography variant="button" className={classes.review}>{ productReview }</Typography>
        <IconButton className={classes.floatRight} onClick={() => props.addToCart(props.product)}>
          <AddShoppingCart />
        </IconButton>
      </CardContent>
    </Card>
  )
}

export default Product

