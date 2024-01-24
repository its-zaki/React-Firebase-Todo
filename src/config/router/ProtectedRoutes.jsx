import React, { useEffect , useState} from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from  '../firebase/Firebaseconfig'
import { Typography } from '@mui/material';

const ProtectedRoutes = ({components}) => {
    //usestate
    const [ isUser, setIsUser] = useState(false)
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
               consol.log('user ha ')
               setIsUser(true)
               return 
            }
            console.log('user nhi ha');

          });
    }, [])


  return (
    isUser ? components : <Typography variant="h1" color='initail'>Loading...</Typography>
    
  )
}

export default ProtectedRoutes