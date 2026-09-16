import Data from '../products.json'
const ShopCategory = ({filterItem,setitem,manuItems,setproduct,selectedcategory})=>{
    return(
       <>
        <div className="widget-header">
          <h5 className="ms-2">All Categories</h5>  
        </div>
        <div>
            <button onClick={()=>setproduct(Data)} className={`m-2 ${selectedcategory === 'All' ? 'bg-warning':''}`} >All</button>
            {
                manuItems.map((val, id)=>{
                    return (
                        <button className={`m-2 ${selectedcategory === val ? 'bg-warning':''}`} key={id} onClick={()=>filterItem(val)}>{val}</button>
                    )
})
            }
        </div>
       </>
    )
}
export default ShopCategory