import { Link } from "react-router";
import Rating from "../components/Rating";
const Productcard = ({Gridlist,product})=>{
  
    
    return(
        <div className={`shop-product-wrap row justify-content-center ${Gridlist ? 'grid': 'list'}`}>
            {
                product.map((pro, i)=>(
                    <div key={i} className="col-lg-4 col-md-6 col-12">
                        <div className="product-item">
                            {/* product img */}
                            <div className="product-thumb">
                                <div className="pro-thumb">
                                    <img src={pro.img} alt="" />
                                </div>
                                {/* product action links */}
                                <div className="product-action-link">
                                    <Link to={`/shop/${pro.id}`}><i className="icofont-eye"></i></Link>
                                    <a href="#">
                                        <i className="icofont-heart"></i>
                                    </a>
                                     <Link to='/card-page'><i className="icofont-cart-alt"></i></Link>
                                </div>
                            </div>
                            {/* product content */}
                            <div className="product-content">
                                <h5>
                                    <Link  to={`/shop/${pro.id}`}>{pro.name}</Link>
                                    <p className="productRating">
                                        <Rating />
                                    </p>
                                    <h6>₹{pro.price}</h6>
                                </h5>
                            </div>
                        </div>
                        {/* list start */}
                         <div className="product-list-item">
                            {/* product img */}
                            <div className="product-thumb">
                                <div className="pro-thumb">
                                    <img src={pro.img} alt="" />
                                </div>
                                {/* product action links */}
                                <div className="product-action-link">
                                    <Link to={`/shop/${pro.id}`}><i className="icofont-eye"></i></Link>
                                    <a href="#">
                                        <i className="icofont-heart"></i>
                                    </a>
                                     <Link to='/card-page'><i className="icofont-cart-alt"></i></Link>
                                </div>
                            </div>
                            {/* product content */}
                            <div className="product-content">
                                <h5>
                                    <Link  to={`/shop/${pro.id}`}>{pro.name}</Link>
                                    <p className="productRating">
                                        <Rating />
                                    </p>
                                    <h6>₹{pro.price}</h6>
                                </h5>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
export default Productcard