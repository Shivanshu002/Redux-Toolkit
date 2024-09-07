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

if (status===STATUSES.ERROR) {

    return<>
    <h2>Somthings went wrong</h2>
    </>
    
}


    return (

        <>
            <div className='productsWrapper'>


                {

                    products.map((product) => (

                        <div className='card' key={product.id}>
                            <img src={product.images} alt='' />
                            <h4>{product.title}</h4>
                            <h5>${product.price}</h5>
                            <button onClick={() => handleAdd(product)} className='btn'>Add to cart </button>

                        </div>
                    ))

                }


            </div>

        </>
    )
}

export default Product
