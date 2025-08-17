import React from 'react'
import Marquee from 'react-fast-marquee'

const LatestNews = () => {
  return (
    <div className='flex items-center gap-5 bg-base-100 p-2'>
        <p className='text-base-100 bg-secondary px-3 py-2'>LatestNews</p>
        <Marquee className='flex gap-5 ' pauseOnHover={true} speed={200}>
            <p className='font-bold'>Lorem ipsum dolor,
             sit amet consectetur adipisicing elit. Asperiores, ratione!</p>
              <p className='font-bold'>Lorem ipsum dolor,
             sit amet consectetur adipisicing elit. Asperiores, ratione!</p>
              <p className='font-bold'>Lorem ipsum dolor,
             sit amet consectetur adipisicing elit. Asperiores, ratione!</p>



        </Marquee>
        
    </div>
  )
}

export default LatestNews