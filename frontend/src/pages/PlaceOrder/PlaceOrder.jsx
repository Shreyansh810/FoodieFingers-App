import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <div>
            <form action="" className="place-order">
                <div className="place-order-left">
                    <p className='title'>Delivery Information</p>

                    <div className="multi-fields">
                        <input type="text" placeholder='First name' />
                        <input type="text" placeholder='Last name' />
                    </div>

                    <input type="email" placeholder='Email address' />
                    <input type="text" placeholder='street' />

                    <div className="multi-fields">
                        <input type="text" placeholder='City' />
                        <input type="text" placeholder='State' />
                    </div>

                    <div className="multi-fields">
                        <input type="text" placeholder='zip code' />
                        <input type="text" placeholder='country' />
                    </div>
                    <input type="text" placeholder='phone no' />
                </div>

                <div className="place-order-right">

                    <div className='cart-total'>
                        <h2>Cart Totals</h2>

                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Delivery Fee</p>
                                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                            </div>
                        </div>

                        <button>Proceed To Payments</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default PlaceOrder
