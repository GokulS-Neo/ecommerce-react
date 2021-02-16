import { Divider, IconButton, Typography } from '@material-ui/core'
import { RemoveCircleOutline, AddCircleOutline } from '@material-ui/icons';
import useStyles from './styles'

const CartItem = ({ item, increment, decrement, remove }) => {
  const classes = useStyles()
  let { productName, productPrice, image, quantity } = item;


  return (
    <>
      <div className={classes.cardItem}>
        <img className={classes.image} src={image} alt={ productName }/>
        <div className={classes.itemDetails}>
          <Typography variant='h6'>{ productName }</Typography>
          <Typography variant='h6'>₹{ productPrice }</Typography>
        </div>
      </div>
      <div className={classes.cardController}>
        <IconButton onClick={() => decrement(item)}>
          <RemoveCircleOutline />
        </IconButton>
        <p className={classes.rectangle}>{ quantity }</p>
        <IconButton onClick={() => increment(item)}>
          <AddCircleOutline />
        </IconButton>
        <p className={classes.link} onClick={() => remove(item)}>Remove</p>
      </div>
      <Divider />
    </>
  )
}

export default CartItem
