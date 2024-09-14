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
            <h3 className='text-[40px] font-medium mt-6 mb-6 text-center'>Cart</h3>

            <div className='flex flex-wrap gap-5 justify-center'>
                {
                    product.map(product => (

                        <div className='w-[300px] h-[300px] p-2 shadow-xl flex flex-col ' key={product.id}>
                            <div className='flex justify-center items-center'>
                                <img className='w-[50%] ' src={product.images} alt='' />
                            </div>
                            <div className='h-[50%] mt-6 text-left pl-3 flex flex-col gap-3'>
                                <h4 className='text-[18px] font-medium line-clamp-1'>{product.title}</h4>
                                <h5 className='text-[16px] font-medium'>${product.price}</h5>
                                <button className='bg-[#335A02] w-fit rounded-[10px] h-fit text-white p-2 pl-5 pr-5' onClick={() => handleRemove(product.id)} >Remove </button>
                            </div>
                        </div>

                    ))

                }

            </div>
        </div>
    )
}

export default Cart
