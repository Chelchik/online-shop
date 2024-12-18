import React, { useRef } from 'react';
import { BiSolidLike } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { likedSelect } from '../features/likedSlice';

function ProductItem({product, maxLength, titleMaxLength}) {
    const dispatch = useDispatch();
    const isLiked = useSelector(likedSelect);

    const handleLiked = () => {
        dispatch({
            type: "Liked",
            payload: isLiked
        })
        product.liked = isLiked
    }    

    return (
        <div className='w-80 p-4 bg-gray-100 rounded-md flex flex-col gap-5'>
                <img src={product.image} alt="" className='w-full h-72 object-contain rounded-md' />

                <h4 className='text-gray-700 text-xl'>
                    {
                        product.title.length >= titleMaxLength ? product.title.slice(0, titleMaxLength)+"..." : product.title
                    }
                </h4>

                <span className='text-gray-500'>
                    {
                        product.description.length >= maxLength ? product.description.slice(0, maxLength)+"..." : product.description
                    }
                </span>

                <p className='text-gray-400 text-xl'>{product.price}$</p>

                <div className='w-full flex justify-between items-center'>
                    <button className='w-8 h-8' onClick={handleLiked}><BiSolidLike className={product.liked ? 'text-4xl text-red-500 transition-all' : 'text-4xl text-gray-500 transition-all'} /></button>
                    
                    <button className='w-52 p-3 bg-orange-500 rounded-2xl text-white hover:opacity-90 active:opacity-80'>Read more</button>
                </div>
        </div>
    )
}

export default ProductItem;