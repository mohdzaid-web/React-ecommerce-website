import { useState, useTransition } from "react";
import Rating from "../components/Rating";
import myimg from '../assets/images/shop/01.jpg'
 const reviwtitle = "Add a Review";

import instructor01 from "../assets/images/instructor/01.jpg"
import instructor02 from "../assets/images/instructor/02.jpg"
import instructor03 from "../assets/images/instructor/03.jpg"
import instructor04 from "../assets/images/instructor/04.jpg"

let ReviewList = [
    {
        imgUrl: instructor01,
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: instructor02,
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: instructor03,
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: instructor04,
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
]

const Review = ()=>{
    const [revieshow, setreviewshow] = useState(true)
    return(
        <>
        <ul className={`review-nav lab-ul ${revieshow ? 'RevActive' : 'DescActive'} `}>
            <li className="desc" onClick={()=>setreviewshow(!revieshow)}>Description</li>
            <li className="rev" onClick={()=>setreviewshow(!revieshow)}>Reviews 4</li>
            </ul>
            {/* disc and reviws content */}
            <div className={`review-content ${revieshow ? 'review-content-show' : 'description-show'}`}>
                <div className="review-showing">
                    <ul className="content lab-ul">
                       {
                        ReviewList.map((review, i)=>(
                            <li key={i}>
                                <div className="post-thumb">
                                    <img src={review.imgUrl} alt="" />
                                </div>
                                <div className="post-content">
                                    <div className="entry-meta">
                                        <div className="posted-on">
                                            <a href="#" >{review.name}</a>
                                            <p>{review.date}</p>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <p>{review.desc}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                       }
                    </ul>
                    {/* add review field */}
                    <div className="client-review">
                        <div className="review-form">
                            <div className="review-title">
                                <h3>{reviwtitle}</h3>
                            </div>
                            <form action="action" className="row">
                                <div className="col-md-4 col-12">
                                    <input type="text" name="name" id="name" placeholder="Full Name *"/>
                                </div>
                                 <div className="col-md-4 col-12">
                                    <input type="email" name="email" id="name" placeholder="Your Email *"/>
                                </div>
                                 <div className="col-md-4 col-12">
                                  <div className="rating">
                                    <span className="me-2">Your Rating</span>
                                    <Rating/>
                                  </div>
                                </div>
                                <div className="col-md-12 col-12">
                                    <textarea name="message" id="message" rows='8' placeholder="Type Youe Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="default-button">
                                        <span>Submit Review</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* discription */}
                <div className="description">
                   <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae deserunt commodi nobis fugiat eius facilis iusto dolorem qui assumenda distinctio. Eius quia dolores dignissimos unde aliquam optio. Beatae, voluptas corporis.
                    Odio est laudantium sit dolores impedit officia sapiente quidem blanditiis nihil esse, adipisci consectetur necessitatibus animi fuga. Veritatis quod, dolorem fugiat fugit deserunt repudiandae unde, tempora, voluptate corporis accusantium sapiente.
                    Dignissimos obcaecati minus cumque alias debitis corrupti exercitationem incidunt iure. Porro dolorum iusto voluptatem reprehenderit minima nobis quo aliquid enim officia doloremque placeat obcaecati dolorem, eligendi cupiditate iste consequuntur eius.
                    Autem praesentium laudantium rem voluptate laboriosam? Eaque earum, aspernatur doloremque adipisci minus similique reiciendis quo iusto, dolores dicta itaque ipsa doloribus porro omnis laudantium nam consequatur sed, ullam sit ut!
                   </p>
                   <div className="post-item">
                    <div className="post-thumb">
                        <img src={myimg}alt="" />
                    </div>
                    <div className="post-content">
                        <ul className="lab-ul">
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, nisi.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, nisi.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, nisi.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, nisi.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, nisi.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, nisi.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, nisi.</li>
                        </ul>
                    </div>
                   </div>
                     <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae deserunt commodi nobis fugiat eius facilis iusto dolorem qui assumenda distinctio. Eius quia dolores dignissimos unde aliquam optio. Beatae, voluptas corporis.
                    Odio est laudantium sit dolores impedit officia sapiente quidem blanditiis nihil esse, adipisci consectetur necessitatibus animi fuga. Veritatis quod, dolorem fugiat fugit deserunt repudiandae unde, tempora, voluptate corporis accusantium sapiente.
                    Dignissimos obcaecati minus cumque alias debitis corrupti exercitationem incidunt iure. Porro dolorum iusto voluptatem reprehenderit minima nobis quo aliquid enim officia doloremque placeat obcaecati dolorem, eligendi cupiditate iste consequuntur eius.
                    Autem praesentium laudantium rem voluptate laboriosam? Eaque earum, aspernatur doloremque adipisci minus similique reiciendis quo iusto, dolores dicta itaque ipsa doloribus porro omnis laudantium nam consequatur sed, ullam sit ut!
                   </p>
                </div>

            </div>
        
        </>
    )
}
export default Review