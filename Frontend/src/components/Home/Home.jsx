

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar'; // Import Navbar component
import './Home.css'; // Import external CSS file
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:7000/api/display');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <img src=''></img>
            <div className="flex flex-col items-center  bg-white">
                <h2 className="mt-4 text-xl font-bold py-2">Female Products</h2>
                <div className="flex overflow-x-auto">
                    {products.map((product) => product.gender === 'female' && (
                        <div key={product.productid} className="product-container">
                            {/* Wrap the image in a Link to navigate to the display page */}
                            <Link to={`/display/${product._id}`}>
                                <img src={product.productimg} alt={product.productname} className="product-image" />
                            </Link>
                            <p className='py-2'>{product.productname}</p>
                        </div>
                    ))}
                </div>
                <h2 className="mt-4 text-xl font-bold py-2">Male Products</h2>
                <div className="flex overflow-x-auto">
                    {products.map((product) => product.gender === 'male' && (
                        <div key={product.productid} className="product-container">
                            {/* Wrap the image in a Link to navigate to the display page */}
                            <Link to={`/display/${product._id}`}>
                                <img src={product.productimg} alt={product.productname} className="product-image" />
                            </Link>
                            <p className='py-2'>{product.productname}</p>
                        </div>
                    ))}
                </div>
                <h2 className="mt-4 text-xl font-bold py-2">Other Products</h2>
                <div className="flex overflow-x-auto">
                    {products.map((product) => product.gender !== 'female' && product.gender !== 'male' && (
                        <div key={product.productid} className="product-container">
                            {/* Wrap the image in a Link to navigate to the display page */}
                            <Link to={`/display/${product._id}`}>
                                <img src={product.productimg} alt={product.productname} className="product-image" />
                            </Link>
                            <p className='py-2'>{product.productname}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
