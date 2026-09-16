import { useState } from "react"
import { Link } from "react-router"

const Search = ({products,Gridlist})=>{
    const [searchterm, setsearchterm] = useState('')
    const filterdproduct = products.filter((product)=>product.name.toLowerCase().includes(searchterm.toLowerCase()))

    return(
        <div className="widget widget-search">
            <form className="search-wrapper mb-3">
                <input type="text" name="search" id="search" placeholder="Search..." defaultValue={searchterm} onChange={(e)=>setsearchterm(e.target.value)}/>
                <button type="submit">
                    <i className="icofont-search-2"></i>
                </button>
            </form>
            {/* showing search result */}
            <div>
                {
                    searchterm && filterdproduct.map((product)=>(
                        <Link key={product.id} to={`/shop/${product.id}`}>
                            <div className="d-flex gap-3 p-2">
                              <div>
                                  <div className="pro-thumb h-25">
                                    <img src={product.img} alt="" width={70} className="flex-{grow|shrink}-0" />
                                </div>
                              </div>
                              <div className="product-content">
                                <p>
                                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                    <h6>₹{product.price}</h6>
                                </p>
                              </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Search