import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    const storeFetch = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);

        const productsWithLikes = data.map(product => ({ ...product, liked: false }));
        setProducts(productsWithLikes);
    }

    storeFetch()
  }, []);
  
  return (
    <div className='w-full p-10 flex flex-wrap gap-4 justify-center'>
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