//import React, { useState } from 'react';
import auth from './auth/auth-helper.js';
import React, { useState,useEffect } from 'react';
import { Redirect } from 'react-router-dom';
//import { read } from './someApiModule'; // Replace with the actual module that contains the read function
//import useState from 'react'
import read from 'react';
import match from 'react';
import setUser from 'react';
import setRedirectToSignin from 'react';
export default function Profile({ match }) {
//...
const [user, setUser] = useState({})
const [redirectToSignin, setRedirectToSignin] = useState(false)
//... 
}
useEffect(() => {
const abortController = new AbortController()
const signal = abortController.signal
const jwt = auth.isAuthenticated() 
read({
userId: match.params.userId
}, {t: jwt.token}, signal).then((data) => { 
if (data && data.error) {
setRedirectToSignin(true) 
} else {
setUser(data) 
}
})
return function cleanup(){ 
abortController.abort()
}
}, [match.params.userId])
if (redirectToSignin) {
return <Redirect to='/signin'/> 
}
return (
<Paper className={classes.root} elevation={4}>
<Typography variant="h6" className={classes.title}> 
Profile
</Typography>
<List dense>
<ListItem>
<ListItemAvatar>
<Avatar> 
<Person/>
</Avatar>
</ListItemAvatar>
<ListItemText primary={user.name} secondary={user.email}/> 
</ListItem>
<Divider/> 
<ListItem>
<ListItemText primary={"Joined: " + (
new Date(user.created)).toDateString()}/> 
</ListItem>
</List> 
</Paper>
)
