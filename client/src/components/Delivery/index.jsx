import React, {useState} from 'react';

// component
import DeliveryCarousel from './DeliveryCarousel';

function Delivery() {

    const [restaurantList, setRestaurantList] = useState([

    ])
    return (
        <>
         <DeliveryCarousel/>   
         <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
             Delivery Restaurants in Mumbai
         </h1>
         <div className='flex justify-between flex-wrap gap-3'>


         </div>
        </>
    );
}

export default Delivery;
