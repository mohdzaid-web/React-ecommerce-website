import GoogleMap from "../components/GoogleMap";
import PageHeader from "../components/PageHeader"

const subTitle = "Get in touch with us"; const title = "We're Always Eager To Hear From You!"; const conSubTitle = "Get in touch with Contact us"; const conTitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better."; const btnText = "Send our Message";

const contactList = [ { imgUrl: "/src/assets/images/icon/01.png", imgAlt: "contact icon", title: "Office Address", desc: "1201 park street, Fifth Avenue", }, { imgUrl: "/src/assets/images/icon/02.png", imgAlt: "contact icon", title: "Phone number", desc: "+22698 745 632,02 982 745", }, { imgUrl: "/src/assets/images/icon/03.png", imgAlt: "contact icon", title: "Send email", desc: "admin@shopcart.com", }, { imgUrl: "/src/assets/images/icon/04.png", imgAlt: "contact icon", title: "Our website", desc: "www.shopcart.com", }, ];
const Contact = ()=>{

     const onSubmit = async (event)=>{
         event.preventDefault();
   
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
        
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
    //   toast.success('Thank you for your submission!')
    alert('Thank you for your submission!')
      event.target.reset();
    } else {
    //   toast.error(data.message)
    alert(data.message)
    }
    } catch (error) {
        //  toast.error(error.message)
        alert(error.message)
    }

    }



    return(
        <div>
            <PageHeader title={'Get in touch with us'} curPage={'Contact US'} />
            <div className="map-address-action padding-tb section-bg">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">{subTitle}</span>
                        <p className="title">{title}</p>
                    </div>
                    <div className="section-wrapper">
                        <div className="row flex-row-reverse">
                            <div className="col-xl-4 col-lg-5 col-12">
                                <div className="contact-wrapper">
                                    {
                                        contactList.map((val,i)=>(
                                            <div key={i} className="contact-item">
                                              <div className="contact-thumb">
                                                  <img src={val.imgUrl} alt="" />
                                              </div>
                                              <div className="contact-content">
                                                <h6 className="title">{val.title}</h6>
                                                <p>{val.desc}</p>
                                              </div>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            {/* google map */}
                            <div className="col-xl-8 col-lg-7 col-12">
                                <GoogleMap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-section padding-tb">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">{conSubTitle}</span>
                        <h2 className="title">{conTitle}</h2>
                    </div>
                    <div className="section-wrapper">
                        <form className="contact-form" onSubmit={onSubmit}>
                            <div className="form-group">
                                <input type="text" name="name" id="name" placeholder="Your Name *" required/>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" id="email" placeholder="Your Name *" required/>
                            </div>
                             <div className="form-group">
                                <input type="number" name="number" id="number" placeholder="Hpone Number *" required/>
                            </div>
                             <div className="form-group">
                                <input type="text" name="subject" id="subject" placeholder="Subject *" required/>
                            </div>
                            <div className="form-group w-100">
                                <textarea name="message" id="message" rows='8' placeholder="Your Massage" required></textarea>
                            </div>
                            <div  className="form-group w-100 text-center">
                                <button className="lab-btn" type="submit">
                                    <span>{btnText}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact