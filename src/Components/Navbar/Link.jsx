import React from 'react';

export const Link = ({route}) => {
    return (
        <li className='px-3'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};


export const LinkMd = ({route}) =>{
    return(
        <li  className=' px-3 bg-green-500 text-gray-800 py-1 hover:bg-yellow-400 border-2 border-blue-400 rounded-2xl'>
            <a href={route.path}>{route.name}</a>
        </li>
    )
}
