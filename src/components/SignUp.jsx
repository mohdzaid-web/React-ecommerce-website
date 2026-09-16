import { useContext } from "react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router"
import { Authcontext } from "../contexts/AuthProvider"
const title = 'Register'
const socialtitle = 'Login with social media'
const btntext = 'Signup'
const SignUp = ()=>{
const [errorMessage, seterrorMessage] = useState('')
const {signupwithgmail , creteuser} = useContext(Authcontext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'


    const handlesignup = (event)=>{
          event.preventDefault()
        const form = event.target 
        const email  = form.email.value 
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        // console.log(email, password, confirmPassword);
        if(password !== confirmPassword){
            seterrorMessage('Password does not match ! please match a correct password!')
        }else{
            seterrorMessage('')
            creteuser(email, password).then((usercredential)=>{
                const user = usercredential.user
                alert('Account created Successfully done')
                navigate(from, {replace:true})
            }).catch((error)=>{
                console.log(error.message);
                alert(`${error.message}`)
                
            })
        }
        
    }
     const handleregister = ()=>{
        signupwithgmail().then((result)=>{
            const user = result.user
            navigate(from, {replace:true})
        }).catch((error)=>{
        const errormsg = error.message
        seterrorMessage('Plase Provide a valid email or password')
       })        
    }
    return(
         <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form" onSubmit={handlesignup}>
                            <div className="form-group">
                                <input type="text" name="name" id="name" placeholder="Full name Address *" required/>
                            </div>
                              <div className="form-group">
                                <input type="text" name="email" id="email" placeholder="Email Address *" required/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" id="password" placeholder="password *" required/>
                            </div>
                              <div className="form-group">
                                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password *" required/>
                            </div>
                            {/* showing msg */}
                            <div>
                                {
                                    errorMessage && (
                                        <div className="error-massage text-danger mb-1">
                                            {errorMessage}
                                        </div>
                                    )
                                }
                            </div>
                           
                            <div className="form-group">
                                <button type="submit" className="d-block lab-btn">
                                    <span>{btntext}</span>
                                </button>
                            </div>
                        </form>
                        {/* account bottom */}
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Have An Account? <Link to='/login'>Login</Link></span>
                            <span className="or"><span>or</span></span>

                            {/* social login */}
                            <h5 className="subtitle">{socialtitle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                <li>
                                    <button className="github" onClick={handleregister}><i className="icofont-github"></i></button>
                                </li>
                                 <li>
                                    <a href="/" className="facebook"><i className="icofont-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="/" className="twitter"><i className="icofont-twitter"></i></a>
                                </li><li>
                                    <a href="/" className="linkedin"><i className="icofont-linkedin"></i></a>
                                </li><li>
                                    <a href="/" className="instagram"><i className="icofont-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default SignUp