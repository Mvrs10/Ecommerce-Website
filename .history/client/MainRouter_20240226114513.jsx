import Menu from './core/Menu' 
function MainRouter() {
        return (
          <div>
      <Menu/>
          
               
                        
                        <Routes>
  <Route path="/" element={<Home />} /> 
  <Route path="/users" element={<Users />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/signin" element={<Signin />} />
  <Route
    path="/user/edit/:userId"
    element={
      <PrivateRoute>
        <EditProfile />
      </PrivateRoute>
    }
  />
  <Route path="/user/:userId" element={<Profile />} />

</Routes>
</div>
  );
}

