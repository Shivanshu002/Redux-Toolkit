import React from 'react'
import Product from '../components/Product'

const Home = () => {
    return (
        <>

            <div>
                <h2 className='heading'>Welcome to Redux toolkit store</h2>

                <section>
                    <h3>Products</h3>
                </section>
                <Product />
            </div>

        </>
    )
}

export default Home
