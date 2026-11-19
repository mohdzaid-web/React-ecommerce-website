import { useContext, useState, useEffect } from "react"
import { Link,useNavigate  } from "react-router"
import logo from '../assets/images/logo/logo.png'
import { Authcontext } from "../contexts/AuthProvider"
const Navitems = ()=>{
    const [menutoggle, setmenutoggle] = useState(false)
    const [socialtoggle, setsocialtoggle] = useState(false)
    const [headerfixed, setheaderfixed] = useState(false)
// const authinfo
    //   const {user}  = useContext(Authcontext)
     
      const [logoutError, setLogoutError] = useState("")
const [loggingOut, setLoggingOut] = useState(false)

const { user, logout, loading } = useContext(Authcontext)
const navigate = useNavigate()
const closeMenus = () => {
    setmenutoggle(false)
    setsocialtoggle(false)
}

const handleLogout = async () => {
    setLogoutError("")
    setLoggingOut(true)

    try {
        await logout()
        closeMenus()
        navigate("/", { replace: true })
    } catch (error) {
        // console.error("Logout failed:", error)
        setLogoutError("Unable to log out. Please try again.")
    } finally {
        setLoggingOut(false)
    }
}
    // window.addEventListener('scroll', ()=>{
    //     if(window.scrollY>200){
    //         setheaderfixed(true)
    //     }else{
    //         setheaderfixed(false)
    //     }
    // })

    useEffect(() => {
    const handleScroll = () =>
        setheaderfixed(window.scrollY > 200)

    window.addEventListener(
        "scroll",
        handleScroll,
        { passive: true }
    )

    handleScroll()

    return () =>
        window.removeEventListener("scroll", handleScroll)
}, [])
    return(
      <header className={`header-section style-4 ${headerfixed ? 'header-fixed fadeInup':''}`}>

        <div className={`header-top d-md-none ${socialtoggle?'open':''}`}>
            <div className="container">
                <div className="header-top-area">
                    <Link to='/signup' className="lab-btn me-3"><span>Create Account</span></Link>
                    <Link to='login'>Log in</Link>
                </div>
            </div>
        </div>


        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    {/* logo */}
                    <div className="logo-search-acte">
                        <div className="logo">
                            <Link to='/'><img src={logo} alt="" /></Link>
                        </div>

                    </div>
                    {/* menu area */}
                    <div className="menu-area">
                        <div className="menu">
                            <ul className={`lab-ul ${menutoggle ? 'active':''}`}>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/shop'>Shop</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/contact'>Contect</Link></li>
                            </ul>
                       </div>


                       {user ? (
    <button
        type="button"
        className="lab-btn me-3 d-none d-md-block"
        onClick={handleLogout}
        disabled={loggingOut || loading}
        aria-label="Log out of your account"
    >
        <span>
            {loggingOut ? "Logging out..." : "Log out"}
        </span>
    </button>
) : (
    <>
        <Link to='/sign-up'
            className="lab-btn me-3 d-none d-md-block">
            Create Account
        </Link>

        <Link to='/login' className="d-none d-md-block">
            Log In
        </Link>
    </>
)}

                       {/* sign in or log in */}
                       {/* <Link to='/sign-up' className="lab-btn me-3 d-none d-md-block">Create Account</Link>
                         <Link to='/login' className="d-none d-md-block">Log In</Link> */}
                         {/* menu toggle */}
                         <div onClick={()=>setmenutoggle(!menutoggle)} className={`header-bar d-lg-none ${menutoggle ? 'active': ''} `}>
                            <span></span>
                             <span></span>
                              <span></span>
                               <span></span>
                         </div>
                         {/* social toggle */}
                         <div className="ellepsis-bar d-md-none" onClick={()=>setsocialtoggle(!socialtoggle)}>
                            <i className="icofont-info-square"></i>
                         </div>
                    </div>
                </div>
                {logoutError && (
    <div className="container">
        <p className="text-danger mb-2" role="alert">
            {logoutError}
        </p>
    </div>
)}
            </div>
        </div>
      </header>
    )
}
export default Navitems