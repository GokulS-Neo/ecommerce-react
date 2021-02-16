import { Button, Typography, withStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Home.module.css";


const styles = {
    buttonStyle : {
        margin : '1.4rem 0',
        padding : '1rem 2rem'
    },
    headingStyle : {
        margin : '2rem'
    }
}

const Home = (props) => {
    
    const history = useHistory();

    const OnClickHandler = () => {
        history.push("/products")
    }


    return (
        <div className={classes.Container}>
            <Typography variant="h3" className={classes.headingStyle}  >ShopKart</Typography>
            <br />

            <Button className={classes.buttonStyle} onClick={OnClickHandler} color="primary" variant="contained">Go Shop Now</Button>
        </div>
    )
}

export default  withStyles(styles)(Home);