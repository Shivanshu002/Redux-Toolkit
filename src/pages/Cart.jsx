import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {

    const product = useSelector(state => state.cart);


    const dispatch = useDispatch();


    const handleRemove = (productId) => {

        dispatch(remove(productId));

    }


    return (
        <div>
            <h3>Cart</h3>

            <div className='cartWrapper'>
                {
                    product.map(product => (

                        <div className='cartCard'>
                            <img src={product.images} alt='' />
                            <h5>{product.title}</h5>
                            <h5>{product.price}</h5>
                            <button onClick={() => handleRemove(product.id)} className='btn'>Remove</button>

                        </div>

                    ))

                }

            </div>
        </div>
    )
}

export default Cart
