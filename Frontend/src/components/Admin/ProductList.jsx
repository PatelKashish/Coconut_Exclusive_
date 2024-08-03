import React, { useState, useEffect } from 'react';
import './ProductList.css';
import Navbar from './Navbar';

const ProductList = () =>{
	const [Data,setData] = useState([
	{
    productname:"",
    productid:"",
    gender:"male",
    price:"",
    brand:"",
    productimg:"",
    qty:0
		}]);
	useEffect(()=> {
		
		fetch("http://localhost:5000/api/productlist").then(res=>{
			if(res.ok){
				return res.json()
			}
		}).then(jsonRes=>setData(jsonRes));
		
	})

    const handleDelete = async (productid) => {
        try {
            const response = await fetch(`http://localhost:5000/api/upload/${productid}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete product');
            }

        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };
  return (
    // <div>
    //     <Navbar /> {/* Integrate Navbar component */}
    //     <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
    //     {/* <div style={{ top: '131px', left: '186px', width: '1120px', height: '796px', position: 'absolute' }}> */}
    //         {/* <h1>Items in Products List</h1> */}
    //         {Data.map((item) => (
    //             <div key={item.productid} className="product-item flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow-md">
    //                 <div className="w-full md:w-1/2">
    //                 <img src={item.productimg} alt={item.productname} className="w-full h-auto" />
    //                 </div>
    //                 <div className="w-full md:w-1/2 p-4">
    //                     <h3>{item.productname}</h3>
    //                     <p>Gender: {item.gender}</p>
    //                     <p>Price: {item.price}</p>
    //                     <p>Brand: {item.brand}</p>
    //                     <p>Quantity: {item.qty}</p>
    //                 </div>
    //             <button className="delete-button bg-red-400 hover:text-white hover:bg-red-700 mt-2 rounded px-4 py-1" onClick={() => handleDelete(item.productid)}>Delete</button>
    //             </div>
    //         ))}

    //     </div>
    // </div>

    <div>
            <Navbar /> {/* Integrate Navbar component */}
            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
                {Data.map((item) => (
                    <div key={item.productid} className="product-item flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow-md">
                        <div className="w-full md:w-1/2">
                            <img src={item.productimg} alt={item.productname} className="w-full h-auto" />
                        </div>
                        <div className="w-full md:w-1/2 p-4">
                            <h3 className="text-lg font-semibold mb-2">{item.productname}</h3>
                            <p>Gender: {item.gender}</p>
                            <p>Price: {item.price}</p>
                            <p>Brand: {item.brand}</p>
                            <p>Quantity: {item.qty}</p>
                            <button className="delete-button bg-red-400 text-black hover:text-white
                             hover:bg-red-700 mt-2 rounded px-4 py-1" 
                             onClick={() => handleDelete(item.productid)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
);
};

export default ProductList;