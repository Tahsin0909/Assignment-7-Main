/* eslint-disable react/prop-types */

import './Cart.css'
const Cart = ({ selectCourse }) => {
    console.log(selectCourse)
    return (
        <div>
            <h2>Cart here</h2>
            {
                selectCourse.map((item) =>
                    <>
                        <div className='item-container' key={item.id}>
                            <img id="item-img" src={item.banner} alt="" />
                            <p>{item.course}</p>
                        </div>
                        
                    </>

                )
            }
        </div>
    );
};

export default Cart;