import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';




const Product = () => {

    const dispatch = useDispatch();

    const { data: products, status } = useSelector((state) => state.product);

    // const [products, setProducts] = useState([])

    console.log(products)

    useEffect(() => {


        dispatch(fetchProducts());


        // const fetchProducts = async () => {
        //     const res = await fetch('https://dummyjson.com/products')
        //     const data = await res.json();
        //     console.log(data)
        //     setProducts(data.products)
        // };

        // fetchProducts();

    }, [])


    // for add product in cart 

    const handleAdd = (product) => {

        dispatch(add(product));

    }


    if (status === STATUSES.LOADING) {
        return <>

            <h2>
                Loading ...
            </h2>

        </>
    }

    if (status === STATUSES.ERROR) {

        return <>
            <h2>Somthings went wrong</h2>
        </>

    }


    return (

        <>
            <div className='flex flex-wrap gap-5 justify-center'>


                {

                    products.map((product) => (

                        <div className='w-[300px] h-[300px] p-2 shadow-xl flex flex-col ' key={product.id}>
                            <div className='flex justify-center items-center'>
                                <img className='w-[50%] ' src={product.images} alt='' />
                            </div>
                            <div className='h-[50%] mt-6 text-left pl-3 flex flex-col gap-3'>
                                <h4 className='text-[18px] font-medium line-clamp-1'>{product.title}</h4>
                                <h5 className='text-[16px] font-medium'>${product.price}</h5>
                                <button className='bg-[#335A02] w-fit rounded-[10px] h-fit text-white p-2 pl-5 pr-5' onClick={() => handleAdd(product)} >Add to cart </button>
                            </div>
                        </div>
                    ))

                }


            </div>

        </>
    )
}

export default Product
