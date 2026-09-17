import { useState } from "react"
import PageHeader from "../components/PageHeader"
import Data from '../products.json'
import Productcard from "./Product"
import Pagination from "./Pagination"
import Search from "./Search"
import ShopCategory from "./ShopCategory"
import PopularPost from "./Popularpost"
import Tags from "./Tags"


const showresult = 'Showing 01 - 12 of 139 Result'
const Shop = ()=>{
    const [Gridlist , setGridlist] = useState(true)
    const [product, setproduct] = useState(Data)

    // pagination
    const [currentpage, setcurrentpage] = useState(1)
    const productperpage = 12
    const indexOflastproduct = currentpage * productperpage
    const indexOffirstproduct = indexOflastproduct - productperpage
    const currentproduct = product.slice(indexOffirstproduct, indexOflastproduct)
    // function to change the currentpage
    const paginate = (pagenumber)=>{
        setcurrentpage(pagenumber)
    }

    // filter product category
    const [selectedcategory, setselectedcategory] = useState("All")
    const manuItems = [...new Set(Data.map((val)=>val.category))]
    // const filterItem = (curcat)=>{
    //     const newitem = Data.filter((newval)=>{
    //         return newval.category === curcat
    //     })
    //     setselectedcategory(curcat)
    //     setproduct(newitem)
    // }

    const filterItem = (curcat) => {
    const newitem = Data.filter((newval) => {
        return newval.category === curcat
    })

    setselectedcategory(curcat)
    setproduct(newitem)
    setcurrentpage(1)
}
    
    
    return(
        
        <div>
            <PageHeader title='Our Shop Page' curPage='Shop'/>
            {/* shop page */}
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                {/* layout and title ere */}
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showresult}</p>
                                    <div className={`product-view-mode ${Gridlist ? 'gridActive' : 'listActive'} `}>
                                      <a className="grid" onClick={()=>setGridlist(!Gridlist)}>
                                         <i className="icofont-ghost"></i>
                                      </a>

                                       <a className="list" onClick={()=>setGridlist(!Gridlist)}>
                                         <i className="icofont-listine-dots"></i>
                                      </a>
                                       
                                    </div>
                                </div>
                          {/* product card */}
                                <div>
                                    <Productcard Gridlist={Gridlist} product={currentproduct} />
                                </div>

                                <Pagination productperpage={productperpage} totalproduct={product.length} paginate={paginate} activepage={currentpage}/>
                            </article>
                        </div>
                         <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={product} Gridlist={Gridlist}/>
                                <ShopCategory
    filterItem={filterItem}
    setitem={setselectedcategory}
    manuItems={manuItems}
    setproduct={setproduct}
    selectedcategory={selectedcategory}
/>
                                {/* <ShopCategory filterItem={filterItem} setitem={setproduct} manuItems={manuItems} setproduct={setproduct} selectedcategory={selectedcategory}/> */}
                                <PopularPost />
                                <Tags />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Shop