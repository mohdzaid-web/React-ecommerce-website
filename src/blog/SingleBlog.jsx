import { useState } from "react"
import blogList from "../utilis/blogdata"
import { useParams } from "react-router"
import PageHeader from "../components/PageHeader"
import Tags from "../shop/Tags";
import PopularPost from "../shop/Popularpost";
const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];

const SingleBlog = ()=>{
    const [blog, setblog] = useState(blogList)
    const {id} = useParams()
    const result = blog.filter((p)=>p.id === Number(id))
    
    return(
        <div>
            <PageHeader title={'Single Blog Page'} curPage={'Blog / Blog Details'}/>
            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item)=>(
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt="" className="w-100" />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                         
                                                                           <ul className="lab-ul">
                                                            {
                                                                item.metaList.map((val, i)=>(
                                                                    <li key={i}><i className={val.iconName}></i>
                                                                    {val.text}
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                                         
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit repellendus quibusdam a neque dolore corrupti blanditiis, adipisci sint iure quo expedita, distinctio veniam minus fugit quasi obcaecati saepe repudiandae id?
                                                                        Soluta aliquid eius harum deserunt fugit hic quo quis repellendus impedit, nostrum qui perferendis ducimus libero eos enim delectus quibusdam odio magni.
                                                                    Magnam esse inventore delectus. Totam eligendi ut, est ratione officiis aut soluta quo, ad deserunt voluptatibus numquam eveniet aliquam? Enim soluta doloremque amet saepe voluptatem ea minima vitae, dolorum sunt.
                                                                   dolores quasi vero, ex, sit harum voluptatum aliquam.</p>
                                                                   <blockquote>
                                                                    <p>
                                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos unde exercitationem atque. Fuga est soluta, amet qui eum, vel reiciendis iste laborum vero ad facilis suscipit libero odit 
                                                                        Molestias doloribus sunt soluta doloremque odio autem vitae? 
                                                                        Saepe perferendis quisquam odit ullam error facere assumenda placeat consequuntur eaque accusamus, nobis voluptatum cupiditate, distinctio fuga labore iure praesentium ex? 
                                                                    </p>
                                                                    <cite>
                                                                        <a href="#">...Melissa Hunter</a>
                                                                    </cite>
                                                                   </blockquote>
                                                                   <p>
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti facilis nemo sequi quas quam expedita eius unde temporibus. Facere, quasi? Quidem quia quod magnam repellat, aperiam vitae perspiciatis sunt eveniet?
                                                                    Iste ratione quos dolorem, rem repellendus accusamus tempore voluptatem cupiditate hic officia nesciunt alias nihil neque! Non doloribus quaerat omnis, esse cumque, et ex, repellendus officia pariatur tempore dolorem ipsam.
                                                                    Inventore nisi explicabo ea ipsam, nam iure similique? Perferendis enim, soluta necessitatibus tenetur optio, sunt modi a veniam quasi aspernatur consequuntur, delectus eum vitae sequi minus. Autem rem dolorem quos?
                                                                   </p>
                                                                   <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                                                   <p>
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, tempora fugit eius praesentium deserunt, minima architecto earum, similique atque dicta voluptates placeat esse molestias itaque labore veniam laudantium dolorem adipisci!
                                                                    Fuga incidunt sequi exercitationem maiores eum odit magni qui inventore aliquam, repellat dolorum in, doloribus commodi illum animi eius ad rem veniam aut dolor voluptas. Blanditiis, cupiditate minus! Consectetur, maiores.
                                                                    Porro earum reiciendis reprehenderit repudiandae optio quis consequuntur neque. Perspiciatis culpa dolor nemo doloribus libero, dolorum rem magnam accusamus. Fuga enim sunt obcaecati molestias recusandae in consequuntur quae voluptates placeat?
                                                                   </p>
                                                                   <div className="video-thumb">
                                                                    <img src="/src/assets/images/blog/single/02.jpg"  alt="" />
                                                                    <a href="https://youtu.be/_W3R2VwRyF4?SI=DQrQfEMwVnu01v6X" className="video-button popup" target="_blank">
                                                                    <i className="icofont-ui-play"></i>
                                                                    </a>
                                                                   </div>
                                                                   <p>
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, velit alias vitae natus laudantium odio recusandae iste nostrum tenetur exercitationem debitis deserunt repellendus, a sit quisquam provident laboriosam, quasi earum?
                                                                    Voluptas quam minima quaerat! Ex atque quae architecto consectetur iste ducimus maiores, ad ipsa. Quod temporibus doloremque qui, soluta magni id nemo modi recusandae quas! Nobis aliquam quidem officiis laudantium!
                                                                    Nisi error laborum culpa repellat delectus minima consequuntur in iusto maxime sunt quibusdam quos fuga velit nihil facilis necessitatibus eum voluptate eligendi, est quam asperiores nulla. Molestiae veniam rerum explicabo.
                                                                   </p>
                                                                   <div className="tags-section">
                                                                    <ul className="tags lab-ul">
                                                                        <li>
                                                                            <a href="#">Agency</a>
                                                                        </li>
                                                                         <li>
                                                                            <a href="#">Bussiness</a>
                                                                        </li>
                                                                         <li>
                                                                            <a href="#">Personal</a>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="lab-ul social-icons">
                                                                        {
                                                                            socialList.map((val, i)=>(
                                                                                <li key={i}>
                                                                                    <a href="#" className={val.className}>
                                                                                        <i className={val.iconName}></i>
                                                                                    </a>
                                                                                </li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                   </div>
                                                                </div>

                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="navigations-part">
                                                <div className="left">
                                                    <a href="#" className="prev">
                                                        <i className="icofont-double-left"></i> Previous Blog
                                                    </a>
                                                    <a href="#" className="title">
                                                        Evisculate Parallel process via Technica Sound Module Authoritative
                                                    </a>
                                                </div>

                                                 <div className="right">
                                                    <a href="#" className="prev">
                                                        <i className="icofont-double-right"></i> Previous Blog
                                                    </a>
                                                    <a href="#" className="title">
                                                        Evisculate Parallel process via Technica Sound Module Authoritative
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>


                        <div className="col-lg-4 col-12">
                            <aside>
                               <Tags />
                               <PopularPost />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleBlog