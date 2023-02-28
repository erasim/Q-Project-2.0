import React from 'react'
import './Products.css'
import Shoes from '../../Images/product001.png'
import Design from '../../Images/Design.png'
import shadow from '../../Images/shadow.png'


const Products = () => {
  return (
    <div className='products-details-main'>

<div className='products-details-top'>
    <div className='products-details-top-left'>
<h1>Purchase your Shoes Now</h1>
<p>there is some details of products jnjjj hkjhk hkhkhkh uuiuy ukjjkbjkb ghcghc jlklk cgcghc kgu hvvjvj cfxfgdgfd bmnbh</p>
   <button className=''>Shop now</button>
    </div>
    <div className='products-details-top-right'>
<div className='products-details-top-right-img1'>
    <img src={Shoes} alt='img'  className='img1' />
    {/* <img src={Design} alt='img' className='img2' />
    <img src={shadow} alt='img' className='img3' /> */}
</div>
{/* <div className='products-details-top-right-img2'>
    <img src={Design} alt='img'  />
</div>
<div className='products-details-top-right-img3'>
    <img src={shadow} alt='img'  />
</div> */}
    </div>
</div>

    </div>
  )
}

export default Products