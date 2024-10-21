'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type propsProduct = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export default function Product() {
  const [products, setProducts] = useState([]);

  const handleProduct = async () => {
    const getProduct = await axios.get('https://fakestoreapi.com/products');
    const data = getProduct.data;
    setProducts(data);
  };

  useEffect(() => {
    handleProduct();
  }, []);

  return (
    <div>
      <div className="max-w-6xl grid grid-cols-3 items-start justify-center mx-auto rounded-md gap-5">
        {products.map((product: propsProduct) => {
          return (
            <Link
              key={product.id}
              className="border border-gray-400 rounded-md p-5 mt-5 cursor-pointer hover:bg-gray-200"
              href={`/product/${product.id}`}
            >
              <div className="w-32 h-32 aspect-square relative mb-2 mx-auto">
                <Image
                  src={product.image}
                  alt="product-image"
                  fill
                  priority
                  style={{
                    objectFit: 'contain',
                  }}
                  sizes='100vw'
                />
              </div>
              <p className="line-clamp-1 mb-2 font-semibold">{product.title}</p>
              <p className="line-clamp-2 text-sm">{product.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
