import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, TextField, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { create } from './api-user';
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  error: {
    color: 'red',
  },
  submit: {
    margin: '0 auto',
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 18,
  },
}));
// const create = async (user) => {
//   return { error: null }; // Simulated API call
// };
export default function Signup() {
  const classes = useStyles();
  const [values, setValues] = useState({ 
    name: '',
    password: '', 
    email: '',
  });
  const [open, setOpen] = useState(false);
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const clickSubmit = () => { 
    const user = {
      name: values.name || undefined,
      email: values.email || undefined, 
      password: values.password || undefined,
    };
    create(user).then((data) => { 
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setOpen(true);
      }
    });
  };
  Signup.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };
  return (
    <div>
<Card className={classes.card}> 
<CardContent>
<Typography variant="h6" className={classes.title}> 
 Sign Up
</Typography>
 
 <TextField
 id="name"
 label="Name"
 className={classes.textField}
 value={values.name}
 onChange={handleChange('name')}
 margin="normal"
 />
 <TextField
 id="email"
 label="Email"
 className={classes.textField}
 value={values.email}
 onChange={handleChange('email')}
 margin="normal"
 />
<TextField
id="password"
label="Password"
className={classes.textField}
value={values.password}
onChange={handleChange('password')}
type="password"
 margin="normal"
/>
</CardContent> 
<CardActions>
<Button color="primary" variant="contained" onClick={clickSubmit} 
className={classes.submit}>
Submit
</Button>
</CardActions> 
</Card>
<Dialog open={open} onClose={handleClose}>
<DialogTitle>New Account</DialogTitle>
<DialogContent>
<DialogContentText>
 New account successfully created. 
 </DialogContentText>
 </DialogContent>
 <DialogActions>
 <Link to="/Signin">
 <Button color="primary" autoFocus variant="contained" onClick={handleClose}>
 Sign In 
 </Button>
 </Link>
 </DialogActions> 
 </Dialog>
 </div>
 );
}

