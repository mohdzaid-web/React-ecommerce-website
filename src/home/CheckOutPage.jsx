import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../components/model.css'
import { useLocation, useNavigate } from "react-router";
const CheckOutPage = ()=>{
    const [show, setshow] = useState(false)
    const [activetab, setactivetab] = useState('visa')

    // handle tab change
    const handletabchange = (tabid)=>{
        setactivetab(tabid)
    }
    const handleshow = ()=>{
        setshow(true)
    }
    const handleclose = ()=>{
        setshow(false)
    }
    // direct to home page
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.pathname || '/'
    const handleorderconfirm = ()=>{
        alert('You Order is places successfully!')
        localStorage.removeItem('card')
        navigate(from, {replace:true})
    }
    return(
        <div className="modelcard">
           <Button varient='primary' className='py-2' onClick={handleshow}>Proceed to Checkout</Button>
           <Modal show={show} onHide={handleclose} animation={false} className='model fade' centered>
            <div className="modal-dialog">
                <h5 className="px-3 mb-3">Select Your Payment Method</h5>
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="tabs mt-3">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className={`nav-link ${activetab === 'visa' ? 'active':''}`} href="#visa" id="visa-tab" role="tab" data-bs-toggle="tab" aria-controls="visa" aria-selected={activetab === 'visa'} onClick={()=>handletabchange('visa')}><img src='https://i.imgur.com/sB4jftM.png' alt="" width='80'/>
                                    </a>
                                    </li>

                                     <li className="nav-item" role="presentation">
                                    <a className={`nav-link ${activetab === 'paypal' ? 'active':''}`} href="#paypal" id="paypal-tab" role="tab" data-bs-toggle="tab" aria-controls="paypal" aria-selected={activetab === 'paypal'} onClick={()=>handletabchange('paypal')}><img src='https://www.urbantool.com/wp-content/uploads/2016/12/paypal-logo-png.png' alt="" width='80'/>
                                    </a>
                                    </li>
                            </ul>
                            {/* content */}
                            <div className="tab-content" id="myTabContent">
                                {/* visa content */}

                                <div className={`tab-pane fade ${activetab === 'visa' ? 'show active': ''}`} id="visa" role="tabpanel" aria-labelledby="visa-tab">
                                    {/* visa tab content */}
                                    <div className="mt-4 mx-4">
                                        <div className="text-center">
                                            <h5>Credit card</h5>
                                        </div>
                                        <div className="form mt-3">
                                            <div className="inputbox">
                                                <input type="text" name="name" id="name" className="form-control" required/>
                                                <span>Cardholder Name</span>
                                            </div>

                                             <div className="inputbox">
                                                <input type="text" name="number" id="number" className="form-control" required min='1' max='999' />
                                                <span>Card Number</span> <i className="fa fa-eye"></i>
                                            </div>
                                            <div className="d-flex flex-row">
                                                 <div className="inputbox">
                                                <input type="text" name="name" id="name" className="form-control" required/>
                                                <span>Expiration date</span>
                                            </div>
                                             <div className="inputbox">
                                                <input type="text" name="name" id="name" className="form-control" required/>
                                                <span>CVV</span>
                                            </div>
                                            </div>
                                            <div className="px-5 pay">
                                                <button className="btn btn-success btn-block" onClick={handleorderconfirm}>Order now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* paypal content */}

                                <div className={`tab-pane fade ${activetab === 'paypal' ? 'show active': ''}`} id="paypal" role="tabpanel" aria-labelledby="paypal-tab">
                                     <div className="mt-4 mx-4">
                                        <div className="text-center">
                                            <h5>Paypal Account Info</h5>
                                        </div>
                                        <div className="form mt-3">
                                            <div className="inputbox">
                                                <input type="text" name="name" id="name" className="form-control" required/>
                                                <span>Enter Your Email</span>
                                            </div>

                                             <div className="inputbox">
                                                <input type="text" name="number" id="number" className="form-control" required min='1' max='999' />
                                                <span>Your Name </span> <i className="fa fa-eye"></i>
                                            </div>
                                          
                                          <div className="d-flex flex-row">
                                              <div className="inputbox">
                                                <input type="text" name="name" id="name" className="form-control" min='1' max='999' required/>
                                                <span>Extra Info</span>
                                            </div>
                                              <div className="inputbox">
                                                <input type="text" name="name" id="name" className="form-control" min='1' max='999' required/>
                                                <span></span>
                                            </div>
                                          </div>
                                            <div className="px-5 pay">
                                                <button className="btn btn-success btn-block" onClick={handleorderconfirm}>Add paypal</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* payment descriamer */}
                            <p className="mt-3 px-4 p-Disclaimer"><em>Payment Disclimer:</em> In not event shall payment or partial payment by owner for any metairal or service</p>
                        </div>
                    </div>
                </div>
            </div>
           </Modal>
        </div>
    )
}
export default CheckOutPage