// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar'; // Import Navbar component
// import './Details.css'; // Import external CSS file


// // const ProductDetail = () =>{
	

// const Details = ({ match }) => {
//     var pid=useParams().id
//     const [Data,setData] = useState([
// 	{
// 		productname:"",
// 		productid:"",
// 		gender:"",
// 		price:0,
// 		brand:"",
// 		productimg:""
// 		}]);
			
// 		console.log("in use effect")
// 		console.log(pid)
// 		fetch(`http://localhost:7000/api/display/${pid}`).then(res=>{
// 			if(res.ok){
// 				return res.json()
// 			}
// 		}).then(jsonRes=>setData(jsonRes))
		
	
// 	console.log("data")
// 	console.log(Data)
// 	const submit = async(e)=>{
// 		e.preventDefault();
// 		 await axios
// 		 .post("http://localhost:7000/api/addtocart",Data)
// 		 .then(function (response) {
//             console.log(response)
//                        })
//         .catch(function(error) {
			
//            console.log(error)
//         })
// 	}



//     return (
        
//         <div>
//             <Navbar />
        
//         <div className="flex flex-row items-center">
//                 <div className="image-container">
//                     {Data && (
//                         <img src={Data.productimg} alt={Data.productname} className="product-image" />
//                     )}
//                 </div>
//                 <div className="details-container">
//                     {Data && (
//                         <div>
//                             <h2 className="text-xl font-bold">{Data.productname}</h2>
//                             <p>Brand: {Data.brand}</p>
//                             <p>Price: {Data.price}</p>
//                             {/* <p>Gender: {product.gender}</p> */}
//                             {/* <p>Quantity: {product.qty}</p> */}
//                         </div>
//                     )}
//                     <div>
//                         <h3>Related Products</h3>
//                         <ul>
//                             {/* Render related products */}
//                             {/* You can fetch and render related products based on categories or any other criteria */}
//                             {/* For example, you can fetch products with the same gender */}
//                             {/* <li>Product 1</li> */}
//                             {/* <li>Product 2</li> */}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//     </div>
//     );
// };

// export default Details;


        // <div>
        //     <Navbar />
        //     <div className="container">
        //     <img src={Data.productimg} alt="image" className="book-image" />
        //     <div className="info">
        //         <p>{Data.productname}</p>
        //         <p>Gender: {Data.gender}</p>
        //         <p>Price: {Data.price}</p>
        //         <p>Brand: {Data.brand}</p>
        //     </div>
        //     <div className="btn-container">
        //         <button className="btn1" onClick={submit}>Add To Cart</button>
        //         <Link to="/display">
        //             <button className="btn2">Display All Products</button>
        //         </Link>
        //     </div>
        // </div>
        // </div>




    // var pid=useParams().id
    // const [product, setProduct] = useState(null);

    // useEffect(() => {
    //     fetchProduct(match.params.id);
    // }, [match.params.id]);

    // fetch(`http://localhost:7000/api/display/${pid}`).then(res=>{
	// 		if(res.ok){
	// 			return res.json()
	// 		}
	// 	}).then(jsonRes=>setData(jsonRes))
		

    // const fetchProduct = async (productId) => {
    //     try {
    //         const response = await fetch(`http://localhost:7000/api/display/${pid}`);
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch product details');
    //         }
    //         const data = await response.json();
    //         setProduct(data);
    //     } catch (error) {
    //         console.error('Error fetching product details:', error);
    //     }
    // };



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import Navbar from '../Navbar/Navbar'; // Import Navbar component
import './Details.css'; // Import external CSS file

const Details = () => {
    const { id } = useParams(); // Get the id parameter from the URL
    const [product, setProduct] = useState(null); // Initialize product state to null

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/display/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data); // Update product state with fetched data
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct(); // Call the fetchProduct function when the component mounts
    }, [id]); // Add id to the dependency array to trigger the effect when id changes

    const submit = async (e) => {
        e.preventDefault();
        console.log(product);
        await axios.post("http://localhost:8000/api/addtocart", product)
            .then(function (response) {
                if (response.data.redirect === '/') {
                    alert("Product added to cart");
                    window.location = "/display";
                } else {
                    alert("Product exists in cart");
                    window.location = "/display";
                }
            })
            .catch(function (error) {
                alert("Error adding product to cart: " + error.message);
                console.log(error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className=" container-main">
                <div className="image-container">
                    {product && (
                        <img src={product.productimg} alt={product.productname} className="product-image" />
                    )}
                </div>
                <div className="details-container">
                    {product && (
                        <div>
                            <p>Name: {product.productname}</p>
                            <p>Brand: {product.brand}</p>
                            <p>Price: {product.price}</p>
                            <button className="button-class" onClick={submit}>Add to Cart</button>
                        </div>
                    )}    
                </div>
            </div>
            {/* <div className=''>
            <h3>Related Products</h3>
            </div> */}
        </div>
    );
};

export default Details;
