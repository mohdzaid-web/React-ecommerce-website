import { Link } from "react-router"

import blog10 from "../assets/images/blog/10.jpg"
import blog11 from "../assets/images/blog/11.jpg"
import blog12 from "../assets/images/blog/12.jpg"
import blog09 from "../assets/images/blog/09.jpg"

const title = 'Most Popular Post'

const postList = [
    {
        id: 1,
        imgUrl: blog10,
        imgAlt: 'rajibraj91',
        title: 'Poor People Campaign Our Resources',
        date: 'Jun 05,2026',
    },
    {
        id: 2,
        imgUrl: blog11,
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2026',
    },
    {
        id: 3,
        imgUrl: blog12,
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2026',
    },
    {
        id: 4,
        imgUrl: blog09,
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2026',
    },
]

const PopularPost = ()=>{
    return(
        <div className="widget widget-post">
            <div className="widget-header">
                <h5 className="title">{title}</h5>
            </div>
            <ul className="widget-wrapper">
                {
                    postList.map((blog, i)=>(
                       <li key={i} className="d-flex flex-wrap justify-content-between">
                        <div className="post-thumb">
                            <Link to={`/blog/${blog.id}`}><img src={blog.imgUrl} alt="" /></Link>
                        </div>
                        <div className="post-content">
                            <Link to={`/blog/${blog.id}`}><h5>{blog.title}</h5></Link>
                            <p>{blog.date}</p>
                        </div>
                       </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default PopularPost