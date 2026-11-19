import { createContext, useEffect, useState } from "react"
import app from "../firebase/firebase.config"
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'


 export const Authcontext = createContext()
// const auth = getAuth()
const auth = getAuth(app)
const googleprovider = new GoogleAuthProvider()


const AuthProvider =({children})=>{
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    // create user
    const creteuser = (email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // crete user with gmail
    const signupwithgmail = ()=>{
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }
    // login
    // const login = (email, password)=>{
    //     setloading(true)
    //     return signInWithEmailAndPassword(auth, email, password)
    // }
    const login = (email, password) => {
    setloading(true)
    return signInWithEmailAndPassword(
        auth,email,  password
    ).finally(() => setloading(false))
}
    // logout 
    const logout = ()=>{
        return signOut(auth)
    }
    // user is avalable or not

    // useEffect(()=>{
    //     const unscrible = onAuthStateChanged(auth, currentuser=>{
    //       setuser(currentuser)  
    //       setloading(false)
    //     })
    //     return ()=>{
    //         return unscrible()
    //     }
    // })
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(
        auth,
        (currentuser) => {
            setuser(currentuser)
            setloading(false)
        },
        () => {
            setuser(null)
            setloading(false)
        }
    )

    return unsubscribe
}, [])
     const authinfo = {
        user, loading, creteuser, signupwithgmail, login, logout
    }
    return(
       <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
    )
}
export default AuthProvider