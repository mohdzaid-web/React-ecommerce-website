const subTitle = 'Save The Day'
const title = (<h2 className="title">Join on Day long free workshop for <b>Advance  <span>Mastering</span></b> on sales</h2>)
const desc = 'Limited Time Offer! Hurry'
const Register = ()=>{
    return(
        <section className="register-section padding-tb pb-0">
            <div className="container">
                <div className="row g-4 row-cols-lg-2 row-cols-lg-1 align-items-centre">
                    <div className="col">
                        <div className="section-header">
                            <span className="subtitle">{subTitle}</span>
                            {title}
                            <p>{desc}</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="section-wrapper">
                            <h4>RegistervNow</h4>
                            <form className="register-form">
                                <input type="text" name="name" placeholder="username" className="reg-input" />
                                <input type="email" name="email" placeholder="Emial" className="reg-input" />
                                <input type="number" name="number" placeholder="number" className="reg-input" />
                                <button type="submit" className="lab-btn">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Register