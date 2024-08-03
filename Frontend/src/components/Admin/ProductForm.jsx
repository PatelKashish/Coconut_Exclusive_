import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

function ProductForm() {
    const [Data, setData] = useState({
        productname:"",
        productid:"",
        gender:"male",
        price:"",
        brand:"",
        productimg:"",
        qty:0
    });

    const change = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/upload", Data);
            alert("Product added successful");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        setData({
            productname:"",
            productid:"",
            gender:"male",
            price:"",
            brand:"",
            productimg:"",
            qty:0
        });
    };

    return (
        <div>
        <Navbar />
        <div className="flex flex-col items-center h-screen bg-gray-200">
            <div className="w-full max-w-md bg-white rounded-lg mt-10 shadow-md overflow-hidden">
            <div className="px-6 py-3 bg-gray-50 text-center relative">
                <h1 className="text-2xl font-serif text-gray-800 mb-6">Product Form</h1>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">Product Name</label>
                        <input
                            className="block w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="productname"
                            id="productname"
                            value={Data.productname}
                            onChange={change}
                            placeholder="Enter Product Name"
                            required
                        />
                    </div>
                </div>
                <div className="px-6 bg-gray-50 grid grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productId">Product ID</label>
                        <input
                            className="block w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="productid"
                            id="productid"
                            value={Data.productid}
                            onChange={change}
                            placeholder="Enter Product ID"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender*</label>
                        <select
                            className="block w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="gender"
                            id="gender"
                            value={Data.gender}
                            onChange={change}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price*</label>
                        <input
                            className="block w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="price"
                            id="price"
                            value={Data.price}
                            onChange={change}
                            placeholder="Enter Price"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">Brand</label>
                        <input
                            className="block w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="brand"
                            id="brand"
                            value={Data.brand}
                            onChange={change}
                            placeholder="Enter Brand"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productImgUrl">Product Image URL</label>
                        <input
                            className="block w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="productimg"
                            id="productimg"
                            value={Data.productimg}
                            onChange={change}
                            placeholder="Enter Product Image URL"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="qty">Quantity</label>
                        <input
                            className="block w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="qty"
                            id="qty"
                            value={Data.qty}
                            onChange={change}
                            placeholder="Enter Quantity"
                        />
                    </div>
                </div>
                <div className="px-6 py-6 bg-gray-50 text-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <Link
                        to="/"
                        className="ml-4 inline-block bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Home
                    </Link>
                </div>
                {/* <div className="absolute top-0 left-0 right-0 text-black text-3xl text-center mt-10 font-serif">
                    Coconut Exclusive
                </div> */}
            </div>
        </div>
    </div>
    );
}

export default ProductForm;


