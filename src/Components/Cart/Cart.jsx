/* eslint-disable react/prop-types */

import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'
const Cart = ({ selectCourse, creditHours, price, creditRemaining}) => {
    // console.log(selectCourse)
    return (
        <div className='cart-container'>
            <div className='flex justify-between'>
                <div className='flex gap-1'>
                    <img id='logo' src="https://i.ibb.co/Cw8cHnJ/shopping-cart.png" alt="" />
                    <p className='font-bold text-xl text-blue-500'>Cart</p>
                </div>
                <div>
                    <p className='font-bold text-xl text-blue-500'>Course Added: {selectCourse.length}</p>
                </div>
            </div>
            <div>
                <p>Credit Remaining:{(creditRemaining <0)? creditRemaining = 0 :creditRemaining }</p>
            </div>
            <div className='item-container'>
                {
                    selectCourse.map((item) =>
                        <>
                            <div className='item' key={item.id}>
                                <img id="item-img" src={item.banner} alt="" />
                                <p>{item.course}</p>
                            </div>
                        </>

                    )
                }
            </div>
            <div>
                <p>Total Credit:{creditHours}{(creditHours == 0)? " ":"hr"} </p>
            </div>
            <div>
                <p>Total Price:{price}</p>
            </div>
        </div>
        
    );
};

export default Cart;