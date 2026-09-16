import { useContext } from "react"
import { Authcontext } from "../contexts/AuthProvider"
import { Form, Navigate, useLocation } from "react-router"

const PrivateRoute = ({children})=>{
    const {user, loading} = useContext(Authcontext)
    const location = useLocation()
    if(loading){
        return(
            <div>Loading....</div>
        )
    }
    if(user){
        return children
    }
    return(
        <Navigate to='/login' state={{Form:location}} replace></Navigate>
    )
}
export default PrivateRoute