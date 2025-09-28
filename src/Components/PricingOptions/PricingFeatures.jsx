import { Circle, CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    console.log(feature)
    return (
        <p className='flex  items-center p-1'> <CircleCheckBig className='pr-1'></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeatures;