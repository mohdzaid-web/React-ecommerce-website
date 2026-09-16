import { useState } from "react"
import { Link } from "react-router"
const desc = 'Energistra an deliver atactice metric after avsionary Apropria transition enterprice an source application emmerging psd template'
const ProductDisplay = ({item})=>{
    const {name, id, price, seller, ratingcount,quantity,img} = item
    const [prequantity , setqantity] = useState(quantity)
    const [size, setsize] = useState('Select Size')
    const [coupon, setcoupon] = useState('')
    const [color, setcolor] = useState('select color')
    const hanglesizechange = (e)=>{
        setsize(e.target.value)
    }
    const hanglecolorchange= (e)=>{
        setcolor(e.target.value)
    }
    const handledecrease = ()=>{
        if(prequantity>1){
            setqantity(prequantity-1)
        }
    }
    const handleincrese = ()=>{
        setqantity(prequantity+1)
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        const product = {
            id:id,
            img:img,
            name:name,
            price:price,
            quantity:quantity,
            size:size,
            color:color,
            coupon:coupon
        }
        const existincard = JSON.parse(localStorage.getItem('card'))|| []
        const existingproductindex = existincard.findIndex((item)=> item.id === id)
        if(existingproductindex !== -1){
            existincard[existingproductindex].quantity += prequantity
        }else{
            existincard.push(product)
        }
        // upade local storage
        localStorage.setItem('card', JSON.stringify(existincard))
        // setsent form field
        setqantity(1)
        setsize('Select Size')
        setcolor('select color')
        setcoupon('')
    }
    return(
        <div>
            <div>
                <h4>{name}</h4>
            <p className="rating">
                <i className="icofont-star"></i>
                 <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                   <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                   <span>{ratingcount} revies</span>
            </p>
            <h4>{price}</h4>
            <h6>{seller}</h6>
            <p>{desc}</p>
            </div>
            {/* card component */}
            <div>
                <form onSubmit={handlesubmit}>
                    <div className="select-product size">
                        <select value={size} onChange={hanglesizechange}>
                            <option >Select Size</option>
                            <option >SM</option>
                             <option >MD</option>
                              <option>LG</option>
                               <option >LG</option>
                                <option >XXL</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>
                 {/*change color  */}
                      <div className="select-product color">
                        <select value={color} onChange={hanglecolorchange}>
                            <option >Select Color</option>
                            <option >Pink</option>
                             <option >Ash</option>
                              <option>Black</option>
                               <option >White</option>
                                <option >Blue</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>
                    {/* card + and -  */}
                       <div className="card-plus-minus">
                        <div className="dec qtybutton" onClick={handledecrease}>-</div>
                        <input className="card-plus-minus-box" type="text" name="qtybutton" id="qtybutton" value={prequantity} onChange={(e)=>setqantity(parseInt(e.target.value, 10))}/>
                        <div  className="inc qtybutton" onClick={handleincrese}>+</div>
                    </div>
                    {/* coupon filed */}
                    <div className="discount-code mb-2 code">
                        <input type="text" placeholder="Enter Discount code" onChange={(e)=>setcoupon(e.target.value)}/>
                    </div>
                    {/* btn section */}
                    <button type="submit" className="lab-btn">
                        <span>Add to Card</span>
                    </button>

                      <Link to='/card-page' type="submit" className="lab-btn bg-primary">
                        <span>Check Out</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}
export default ProductDisplay


