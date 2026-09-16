import { useState } from "react";
import productData from '../products.json'
import { Link } from "react-router";
import SelectedCategory from "../components/SelectedCategory";
const title =   <h2>Search Your One From <span>Thousand</span> of Product</h2>

const desc = 'We have the largest collection of product'
const bannerList = [
{
iconName: "icofont-users-alt-4",
text: "1.5 Million Customers",
},
{
iconName: "icofont-notification",
text: "More then 2000 Marchent",
},
{
iconName: "icofont-globe",
text: "Buy Anything Online",
},
];
const Banner =()=>{
    const [searchinput , setsearchinput] = useState('')
    const [filteredproduct, setfilteredproduct] = useState(productData)
    
    const handleSearch = (e)=>{
        
        const searchTerm = e.target.value
        setsearchinput(searchTerm)
        const filtered = productData.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setfilteredproduct(filtered)
    }
    return  <div className="banner-section style-4">
            <div className="container">
                <div className="banner-content">
                    {title}
                    <form>
                         <SelectedCategory select={'all'}/>

                        <input type="text" name="search" id="search" placeholder="Search your product" value={searchinput} onChange={handleSearch}/>
                        <button type="submit">
                            <i className="icofont-search"></i>
                        </button>
                    </form>
                    <p>{desc}</p>
                    <ul className="lab-ul">
                        {
                        searchinput && filteredproduct.map((product, i)=> <li key={i}>
                           <Link to={`/shop/${product.id}`}>{product.name}</Link> 
                            </li>   )
                            }
                    </ul>
                    </div>
            </div>
        </div>
    
}
export default Banner