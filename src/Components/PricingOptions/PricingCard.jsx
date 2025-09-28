import React from 'react';
import PricingFeatures from './PricingFeatures';
//  {
//     "id": 1,
//     "name": "Basic Plan",
//     "price": "$20/month",
//     "info": "Perfect for beginners who want access to essential equipment.",
//     "features": [
//       "Access to gym equipment",
//       "Locker facility",
//       "1 free fitness assessment",
//       "Open gym hours only",
//       "Access to cardio machines",
//       "Free WiFi"
//     ]
//   }
const PricingCard = ({pricing}) => {
    const {name , price, info, features} = pricing
    return (
        <div className='border-3 flex flex-col border-pink-500 rounded-xl bg-amber-300 p-3'>
           {/* card header */}
          <div className=''>
             <h3 className="text-red-800 font-extrabold text-5xl py-1.5">{name}</h3>
           <p className='py-2 font-bold text-pink-500 text-3xl'>{price}</p>
          </div>
          {/* card body */}
          <div className='flex-2 bg-green-300 rounded-t-2xl p-3 mb-3 font-bold text-blue-600 '>
            <p className='text-xl py-5'>{info}</p>
            {
                features.map((feature, index ) =><PricingFeatures key={index} feature={feature}></PricingFeatures>)
            }
          </div>
           <button className="btn rounded w-full  bg-amber-600 font-bold hover:text-white text-xl hover:bg-pink-800">Subscribe</button>
        </div>
    );
};

export default PricingCard;