import { Container, FormControl, InputLabel, Typography, OutlinedInput, Button } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useEffect, useState } from 'react'
import useStyles from './styles'
import clsx from 'clsx'
import { Link, useHistory } from 'react-router-dom'

const Login = (props) => {
  const classes = useStyles()
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isVerifiedSuccessfully = props.verify({email, password});
    if(isVerifiedSuccessfully) 
      history.goBack();
    else {
      setError(true);
      setTimeout(() => setError(prevState => !prevState), 3000);
      setEmail('');
      setPassword('');
    }
  };


  const formReactcomponent = (
    <Container className={classes.root}>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl fullWidth className={clsx(classes.margin, classes.width)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              labelWidth={41}
            />
        </FormControl>

        <FormControl fullWidth className={clsx(classes.margin, classes.width)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="password"
              value={password}
              onChange={(e => setPassword(e.target.value))}
              labelWidth={75}
            />
        </FormControl>

        <div className={classes.link}>
          <Typography className={classes.a} variant="body1" component={Link} to="/registration">Register Account</Typography>
        </div>

        <Button type="submit" className={classes.button} color="primary" variant="contained">Login</Button>

      </form>
    </Container>
  );

  const ErrorComponent = (
    <Alert severity="error">Incorrect Credentials - Please Verify !!!</Alert>
  )

  
  return (
    <>
      {error ?  ErrorComponent : formReactcomponent}
    </>
    
  )
}

export default Login
