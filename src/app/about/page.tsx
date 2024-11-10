import React from 'react'

const about = ( ) => {
  return (
  
<div className='flex flex-col ml-auto  mx-auto item-start place-content-start justify-start'>
<img src="/cover2.jpg"
        alt="background image" 
        className="h-auto max-w-full"
        />
<div className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 mb-3 -translate-y-1/3 text-center text-black'>
    <h1 className='font-extrabold mb-8 text-[70px] underline-offset-2'> About Us </h1>
    <p className=' text-center font-normal mb-6  text-[25px]'> Every piece is crafted with meticulous attention to detail, ensuring both beauty and durability.
        We use only the finest metals and ethically sourced gemstones, guaranteeing lasting value.
        We offer customization options to make each piece truly unique and meaningful to the wearer.
        Our collection includes classic and contemporary styles to suit a variety of tastes and occasions.
        Our commitment to customer satisfaction ensures a memorable and rewarding shopping experience.</p>
</div>

</div>
  )
}

export default about
