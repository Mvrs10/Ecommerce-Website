import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home' 
import Users from './user/Users.jsx'
import Signup from './user/Signup.jsx'
import Signin from './lib/Signin.jsx'
import Profile from './user/Profile.jsx'
import PrivateRoute from './lib/PrivateRoute.jsx'
import EditProfile from './user/EditProfile.jsx'


const MainRouter = () => {
return ( <div> 
<Routes>
<Route exact path="/" element={<Profile />}/> 
<Route path="/users" element={Users} />
<Route path="/signup" element={Signup}/>
<Route path="/signin" element={Signin}/>

<PrivateRoute path="/user/edit/:userId" element={EditProfile}/> 

<Route path="/user/:userId" element={Profile}/>
</Routes>
</div> 
)
}
export default MainRouter
