import React from 'react'
import Product from '../components/Product'
import banner1 from '../assests/banner/banner1.png';

const Home = () => {
    return (
        <>

            {/* Header */}
            <div>
                <div className='flex justify-center items-center mt-10'>
                    <img src={banner1}  className='w-[1100px]'/>
                </div>

                <section>
                    <h3 className='text-[40px] font-medium mt-6 mb-6 text-center'>Products</h3>
                </section>
                <Product />
            </div>

        </>
    )
}

export default Home
