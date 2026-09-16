// import { useEffect, useState } from "react"
// import PageHeader from "../components/PageHeader"
// import { Link } from "react-router"
// import delimages from '../assets/images/shop/del.png'
// import CheckOutPage from "../home/CheckOutPage"

// const CardPage = ()=>{
//     const [caritems, setcarditems] = useState([])
//     useEffect(()=>{
//         // fetch card item from local storage
//         const storedcarditem = JSON.parse(localStorage.getItem('card')) || []
//         setcarditems(storedcarditem)
//     },[])
//     // catculate prices
//     const calculatetotalprice = (item)=>{
//         return item.price * item.quantity
//     }
//     // handle quentity increase
//     const handleincrese = (item)=>{
//         item.quantity += 1
//         setcarditems([...caritems])
//         // update local storage with new card item 
//         localStorage.setItem('card', JSON.stringify(caritems)) 
//     }
//      // handle decrese quentity
//      const handledecrease = (item)=>{
//         if(item.quantity > 1){
//             item.quantity -= 1
//             setcarditems([...caritems])

//              // update local storage with new card item 
//         localStorage.setItem('card', JSON.stringify(caritems)) 
//         }
//      }
//     //  handle item remove
//     const handleremoveitem = (item)=>{
//         const updatecard = caritems.filter((carditem)=>carditem.id !== item.id)
//         setcarditems(updatecard)
//         updatelocalstorage(updatecard)

//     }
//     const updatelocalstorage = (card)=>{
//         localStorage.setItem('card', JSON.stringify(card))
//     }
//     // card subtotal
//     const cardsubtotal = caritems.reduce((total, item)=>{
//         return total + calculatetotalprice(item)
//     },0)
//     // order total
//     const ordertotal = cardsubtotal
//     return <div>
//             <PageHeader title={'Shop Card'} curPage={'Card Page'}/>

//             <div className="shop-card padding-tb">
//                 <div className="container">
//                     <div className="section-wrapper">
//                         {/* card top */}
//                         <div className="card-top">
//                             <table>
//                                 <thead>
//                                     <tr>
//                                         <th className="cat-product">Product</th>
//                                          <th className="cat-price">Price</th>
//                                           <th className="cat-quantity">Quantity</th>
//                                            <th className="cat-toprice">Total</th>
//                                             <th className="cat-edit">Edit</th>
//                                     </tr>
//                                 </thead>
//                                 {/* table body */}
//                                 <tbody>
//                                     {
//                                         caritems.map((item, index)=>(
//                                             <tr key={index}>
//                                                 <td className="product-item cat-product">
//                                                     <div className="p-thumb">
//                                                         <Link to='/shop'><img src={item.img} alt="" /></Link>
//                                                     </div>
//                                                     <div className="p-content">
//                                                         <Link to='/shop'>{item.name}</Link>
//                                                     </div>
//                                                 </td>

//                                                 <td className="cat-price">
//                                                     ₹{item.price}
//                                                 </td>
//                                                 <td className="cat-quantity">
//                                                     <div className="card-plus-minus">
//                                                         <div className="dec qtybutton" onClick={()=>handledecrease(item)}>-</div>
//                                                         <input type="text" name="qtybutton" className="card-plus-minus-box" value={item.quantity} />
//                                                           <div className="inc qtybutton" onClick={()=>handleincrese(item)}>+</div>
//                                                     </div>
//                                                 </td>
//                                                 <td className="cat-toprice">₹{calculatetotalprice(item)}</td>
//                                                 <td className="cat-edit">
//                                                     <a href="#" onClick={()=>handleremoveitem(item)}>
//                                                         <img src={delimages} alt="" />
//                                                     </a>
//                                                 </td>
//                                             </tr>
//                                         ))
//                                     }
//                                 </tbody>
//                             </table>
//                         </div>
//                         {/* card top ends */}
//                         {/* card bottom */}
//                         <div className="card-bottom">
//                             {/* chectout box */}
//                             <div className="card-checkout-box">
//                                 <form className="coupon">
//                                     <input className="card-page-input-text" type="text" name="coupon" id="coupon" placeholder="Coupon code..."/>
//                                     <input type="submit" value='Apply Coupon'/>
//                                 </form>

//                                 <form className="card-checkout">
//                                     <input type="submit" value='update card'/>
//                                     <div>
//                                         <CheckOutPage />
//                                     </div>
//                                 </form>
//                             </div>
//                             {/* check out box end */}

//                             {/* shopping box */}
//                             <div className="shiping-box">
//                                 <div className="row ">
//                                     <div className="col-md-6 col-12">
//                                        <div className="calculate-shiping">
//                                         <h3>Calculate Shiping</h3>
//                                         <div className="outline-select">
//                                             <select>
//                                                 <option value="uk">United Kingdom (UK)</option>
//                                                  <option value="us">United States (USA)</option>
//                                                  <option value="bd">Bangladesh </option>
//                                                   <option value="pak">Pakisthan </option>
//                                                    <option value="ind">India </option>
//                                                     <option value="np">Nepal</option>
//                                             </select>
//                                             <span className="select-icon">
//                                                 <i className="icofont-rounded-down"></i>
//                                             </span>
//                                         </div>
//                                         <div className="outline-select shipping-select">
//                                              <select>
//                                                 <option value="uk">New York (UK)</option>
//                                                  <option value="us">London (USA)</option>
//                                                  <option value="bd">Dhaka</option>
//                                                   <option value="pak">Korachi</option>
//                                                    <option value="ind">New Delhi</option>
                                                   
//                                             </select>
//                                             <span className="select-icon">
//                                                 <i className="icofont-rounded-down"></i>
//                                             </span>
//                                         </div>
//                                         <input type="text" name="postalCode" id="postalCode" placeholder="Postcode/ZIP *" className="card-page-input-text"/>
//                                         <button className="submit">Update Adress</button>
//                                         </div> 
//                                          </div>

//                                      <div className="col-md-6 col-12">
//                                         <div className="card-overview">
//                                             <h3>Card Details</h3>
//                                             <ul className="lab-ul">
//                                                 <li>
//                                                     <span className="pull-left">Card Subtotal</span>
//                                                     <p className="pull-right">₹ {cardsubtotal}</p>
//                                                 </li>
//                                                     <li>
//                                                     <span className="pull-left">Shipping and Handling</span>
//                                                     <p className="pull-right">Free Shipping</p>
//                                                 </li>
//                                                     <li>
//                                                     <span className="pull-left">Order Total</span>
//                                                     <p className="pull-right">₹ {ordertotal.toFixed(2)}</p>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                          </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
    
// }
// export default CardPage





import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router";
import delimages from "../assets/images/shop/del.png";
import CheckOutPage from "../home/CheckOutPage";
import "./CardPage.css";

const CardPage = () => {
    const [caritems, setcarditems] = useState([]);

    useEffect(() => {
        // fetch cart item from local storage
        const storedcarditem =
            JSON.parse(localStorage.getItem("card")) || [];

        setcarditems(storedcarditem);
    }, []);

    // calculate prices
    const calculatetotalprice = (item) => {
        return item.price * item.quantity;
    };

    // handle quantity increase
    const handleincrese = (item) => {
        item.quantity += 1;
        setcarditems([...caritems]);

        // update local storage with new cart item
        localStorage.setItem("card", JSON.stringify(caritems));
    };

    // handle quantity decrease
    const handledecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setcarditems([...caritems]);

            // update local storage with new cart item
            localStorage.setItem("card", JSON.stringify(caritems));
        }
    };

    // handle item remove
    const handleremoveitem = (item) => {
        const updatecard = caritems.filter(
            (carditem) => carditem.id !== item.id
        );

        setcarditems(updatecard);
        updatelocalstorage(updatecard);
    };

    const updatelocalstorage = (card) => {
        localStorage.setItem("card", JSON.stringify(card));
    };

    // cart subtotal
    const cardsubtotal = caritems.reduce((total, item) => {
        return total + calculatetotalprice(item);
    }, 0);

    // order total
    const ordertotal = cardsubtotal;

    return (
        <div>

            <PageHeader
                title={"Shop Card"}
                curPage={"Card Page"}
            />

            <div className="shop-card padding-tb py-5">

                <div className="container">

                    <div className="section-wrapper">

                        {/* ==============================
                            CART TOP
                        ============================== */}

                        <div className="card-top">

                            <div className="table-responsive shadow-sm">

                                <table className="table table-borderless align-middle mb-0">

                                    <thead>

                                        <tr className="cart-header">

                                            <th className="cat-product text-white py-4 ps-4">
                                                Product
                                            </th>

                                            <th className="cat-price text-white py-4">
                                                Price
                                            </th>

                                            <th className="cat-quantity text-white py-4">
                                                Quantity
                                            </th>

                                            <th className="cat-toprice text-white py-4">
                                                Total
                                            </th>

                                            <th className="cat-edit text-white py-4 pe-4">
                                                Edit
                                            </th>

                                        </tr>

                                    </thead>


                                    {/* ==============================
                                        TABLE BODY
                                    ============================== */}

                                    <tbody>

                                        {caritems.map((item, index) => (

                                            <tr
                                                key={index}
                                                className="cart-product-row border-bottom"
                                            >

                                                {/* Product */}

                                                <td className="product-item cat-product py-4 ps-4">

                                                    <div className="p-thumb d-flex align-items-center gap-3">

                                                        <Link to="/shop">

                                                            <img
                                                                src={item.img}
                                                                alt=""
                                                                className="img-fluid cart-product-img"
                                                            />

                                                        </Link>


                                                        <div className="p-content">

                                                            <Link
                                                                to="/shop"
                                                                className="text-decoration-none text-dark fw-semibold"
                                                            >
                                                                {item.name}
                                                            </Link>

                                                        </div>

                                                    </div>

                                                </td>


                                                {/* Price */}

                                                <td className="cat-price fw-semibold text-secondary">

                                                    ₹{item.price}

                                                </td>


                                                {/* Quantity */}

                                                <td className="cat-quantity">

                                                    <div className="card-plus-minus d-flex align-items-center quantity-box">

                                                        <div
                                                            className="dec qtybutton btn btn-light border rounded-0"
                                                            onClick={() =>
                                                                handledecrease(item)
                                                            }
                                                        >
                                                            -
                                                        </div>


                                                        <input
                                                            type="text"
                                                            name="qtybutton"
                                                            className="card-plus-minus-box form-control text-center rounded-0"
                                                            value={item.quantity}
                                                            readOnly
                                                        />


                                                        <div
                                                            className="inc qtybutton btn btn-light border rounded-0"
                                                            onClick={() =>
                                                                handleincrese(item)
                                                            }
                                                        >
                                                            +
                                                        </div>

                                                    </div>

                                                </td>


                                                {/* Total */}

                                                <td className="cat-toprice fw-bold text-secondary">

                                                    ₹{calculatetotalprice(item)}

                                                </td>


                                                {/* Delete */}

                                                <td className="cat-edit pe-4">

                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleremoveitem(item);
                                                        }}
                                                        className="delete-btn d-inline-flex align-items-center justify-content-center"
                                                    >

                                                        <img
                                                            src={delimages}
                                                            alt=""
                                                            className="img-fluid"
                                                        />

                                                    </a>

                                                </td>

                                            </tr>

                                        ))}

                                    </tbody>

                                </table>

                            </div>

                        </div>


                        {/* ==============================
                            CART BOTTOM
                        ============================== */}

                        <div className="card-bottom mt-4">


                            <div className="card-checkout-box bg-white shadow-sm p-4">


                                {/* ==============================
                                    COUPON + UPDATE + CHECKOUT
                                    ALL IN ONE ROW
                                ============================== */}

                                <div className="coupon-checkout-row">


                                    {/* LEFT SIDE
                                        Coupon input + Apply Coupon
                                    */}

                                    <form className="coupon">

                                        <input
                                            className="card-page-input-text form-control rounded-0"
                                            type="text"
                                            name="coupon"
                                            id="coupon"
                                            placeholder="Coupon Code..."
                                        />


                                        <input
                                            type="submit"
                                            value="Apply Coupon"
                                            className="btn orange-btn rounded-0 coupon-btn"
                                        />

                                    </form>


                                    {/* RIGHT SIDE
                                        Update Cart + Checkout
                                    */}

                                    <form className="card-checkout">

                                        <input
                                            type="submit"
                                            value="Update Cart"
                                            className="btn btn-light border hover-btn update-card-btn"
                                        />


                                        <div className="checkout-btn-wrapper">

                                            <CheckOutPage />

                                        </div>

                                    </form>


                                </div>


                            </div>


                            {/* ==============================
                                SHIPPING BOX
                            ============================== */}

                            <div className="shiping-box bg-white shadow-sm p-4 mt-4">

                                <div className="row g-5">


                                    {/* ==============================
                                        CALCULATE SHIPPING
                                    ============================== */}

                                    <div className="col-md-6 col-12">

                                        <div className="calculate-shiping">

                                            <h3 className="fw-bold mb-4">
                                                Calculate Shipping
                                            </h3>


                                            {/* Country */}

                                            <div className="outline-select position-relative mb-3">

                                                <select className="form-select py-3">

                                                    <option value="uk">
                                                        United Kingdom (UK)
                                                    </option>

                                                    <option value="us">
                                                        United States (USA)
                                                    </option>

                                                    <option value="bd">
                                                        Russia
                                                    </option>

                                                    <option value="pak">
                                                        canada
                                                    </option>

                                                    <option value="ind">
                                                        India
                                                    </option>

                                                    <option value="np">
                                                        Nepal
                                                    </option>

                                                </select>

                                            </div>


                                            {/* City */}

                                            <div className="outline-select shipping-select mb-3">

                                                <select className="form-select py-3">

                                                    <option value="uk">
                                                        New York (UK)
                                                    </option>

                                                    <option value="us">
                                                        London (USA)
                                                    </option>

                                                    <option value="bd">
                                                        Lasubarg
                                                    </option>

                                                    <option value="pak">
                                                        manschetra
                                                    </option>

                                                    <option value="ind">
                                                        New Delhi
                                                    </option>

                                                </select>

                                            </div>


                                            {/* Postal Code */}

                                            <input
                                                type="text"
                                                name="postalCode"
                                                id="postalCode"
                                                placeholder="Postcode/ZIP *"
                                                className="card-page-input-text form-control py-3 mb-3"
                                            />


                                            {/* Update Address */}

                                            <button className="submit btn orange-btn px-5 py-3">

                                                Update Address

                                            </button>

                                        </div>

                                    </div>


                                    {/* ==============================
                                        CART DETAILS
                                    ============================== */}

                                    <div className="col-md-6 col-12">

                                        <div className="card-overview">

                                            <h3 className="fw-bold mb-4">
                                                Cart Totals
                                            </h3>


                                            <ul className="lab-ul list-unstyled mb-0">


                                                {/* Subtotal */}

                                                <li className="d-flex justify-content-between align-items-center border p-3">

                                                    <span className="text-secondary">
                                                        Cart Subtotal
                                                    </span>


                                                    <p className="mb-0 orange-text fw-semibold">
                                                        ₹ {cardsubtotal}
                                                    </p>

                                                </li>


                                                {/* Shipping */}

                                                <li className="d-flex justify-content-between align-items-center border border-top-0 p-3">

                                                    <span className="text-secondary">
                                                        Shipping and Handling
                                                    </span>


                                                    <p className="mb-0 orange-text fw-semibold">
                                                        Free Shipping
                                                    </p>

                                                </li>


                                                {/* Order Total */}

                                                <li className="d-flex justify-content-between align-items-center border border-top-0 p-3">

                                                    <span className="text-secondary">
                                                        Order Total
                                                    </span>


                                                    <p className="mb-0 orange-text fw-bold fs-5">
                                                        ₹ {ordertotal.toFixed(2)}
                                                    </p>

                                                </li>


                                            </ul>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CardPage;