import { Link } from "react-router";
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";
import category01 from "../assets/images/category/01.jpg"
import category02 from "../assets/images/category/02.jpg"
import category03 from "../assets/images/category/03.jpg"
import category04 from "../assets/images/category/04.jpg"
import category05 from "../assets/images/category/05.jpg"
import category06 from "../assets/images/category/06.jpg"

const categoryList = [
{
imgUrl: category01,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'DSLR Camera',
},
{
imgUrl: category02,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Shoes',
},
{
// imgUrl: 'src/assets/images/category/03.jpg',
imgUrl: category03,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Photography',
},
{
// imgUrl: 'src/assets/images/category/04.jpg',
imgUrl: category04,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Formal Dress',
},
{
// imgUrl: 'src/assets/images/category/05.jpg',
imgUrl: category05,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Colorful Bags',
},
{
// imgUrl: 'src/assets/images/category/06.jpg',
imgUrl: category06,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Home Decor',
},
]


const HomeCategory = ()=>{
    return(
        <div className="category-section style-4 padding-tb">
            <div className="container">
                {/* seaction header */}
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                {/* section-card */}
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-centre row-cols-md-3 row-cols-sm-2 row-cols-1">
                        {
                            categoryList.map((val,i)=>
                            <div key={i} className="col">
                                <Link to='/shop' className='category-item'>
                                <div className="category-inner">
                                    {/* img thumbnail */}
                                    <div className="category-thumb">
                                        <img src={val.imgUrl} alt="" />
                                    </div>
                                    {/* content */}
                                    <div className="category-content">
                                        <div className="cate-icon">
                                            <i className={val.iconName}></i>
                                        </div>
                                        <Link to='/shop'><h6>{val.title}</h6></Link>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            )}
                    </div>
                    <div className="text-center mt-5">
                        <Link to='/shop' className="lab-btn"><span>{btnText}</span></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default HomeCategory