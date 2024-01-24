import React, { useRef, useState } from 'react'
import { TextField, Box , Button, CircularProgress} from '@mui/material'


const Login = () => {
  //useState
  const [ loading, setLoading] = useState(false);

  //useRef
  const email = useRef();
  const password = useRef();

  //login 
  const login = (event)=>{
    event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    email.current.value = ""
    password.current.value = ""
    setLoading(!loading)

  }
  return (
    <Box  sx={{height: '80vh'}} className='d-flex justify-content-center align-item-center'>
      <form onSubmit={login} className='d-flex justify-content-center flex-column align-item-center w-25 gap-5'>
        <TextField type="email" id="email" label="Email" variant="standard" inputRef={email} required/>
        <TextField type="password" id="password" label="Password" variant="standard" inputRef={password} required/>
        <Button type='submit' variant="contained">{loading ? <CircularProgress sx={{color: ' white'}} size={25}/>: "Login" }</Button>
      </form>


    </Box>
  )
}

export default Login