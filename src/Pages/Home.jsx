import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem';
import { FaFilter } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../features/FilterSlice';

function Home() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const products = useSelector(selectFilter);

    const productsFilter = (filterType) => {
        if (filterType === "all") {
            dispatch({ type: "ShowAll" });
        } else if (filterType === "liked") {
            dispatch({ type: "Filter" });
        }
    };
    

    useEffect(() => {
    const storeFetch = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setData(data);

         const productsWithLikes = data.map(product => ({ ...product, liked: false }));

        dispatch({
            type: "SetProducts",
            payload: productsWithLikes,
        });
    }

    storeFetch()
  }, []);
  
  return (
    <div className='w-full p-14 flex flex-wrap gap-4 justify-center relative'>
        <div className='p-2 absolute right-1/2 translate-x-1/2 top-2 bg-gray-200 flex items-center justify-center gap-2'>
            <p onClick={() => productsFilter("all")} className='cursor-pointer'>Все</p>
            
            <FaFilter />
        
            <p onClick={() => productsFilter("liked")} className='cursor-pointer'>Избранные</p>
        </div>

        {
            products.map((product) => {
                return (
                    <ProductItem product={product} maxLength={100} titleMaxLength={25} key={product.id} />
                )
            })
        }
    </div>
  )
}

export default Home