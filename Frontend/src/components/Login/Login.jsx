// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//     const [Data, setData] = useState({
//         mailid : "",
//         password : ""
//     });

//     const handleChange = (e) => {
//         setData({
//             ...Data,
//             [e.target.name]: e.target.value
//         });
//     };

//     const submit = async(e)=>{
//         e.preventDefault();
//         await axios.post("http://localhost:4000/api/login",Data).then(function (response) {
//             if (response.data.redirect == '/') {
//                 alert("Login successful")
//                 window.location = "/"

//             } 
//             else if (response.data.redirect == '/login'){
//                 alert("Invalid password")
//                 window.location = "/login"
//             }
//         })
//         // .catch(function(error) {
//         //     window.location = "/login"
//         // })
//             setData({
//                 mailid: "",
//                 password:"" 
//             })
//         }
// 			console.log(Data);

//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//             <h1 className="text-3xl font-bold mb-4">Login</h1>
//             <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                         Email
//                     </label>
//                     <input
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         id="emailInput"
//                         type="email"
//                         placeholder="Enter your email"
//                         name="mailid"
//                         value={Data.mailid}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                         Password
//                     </label>
//                     <input
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         id="passwordInput"
//                         type="password"
//                         placeholder="Enter your password"
//                         name="password"
//                         value={Data.password}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <button
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         type="button"
//                         onClick={submit}
//                     >
//                         Sign In
//                     </button>
                    
//                     <button
//                         className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         type="button"
//                     >
//                         Forgot Password?
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [Data, setData] = useState({
        mailid: "",
        password: ""
    });

    const handleChange = (e) => {
        setData({
            ...Data,
            [e.target.name]: e.target.value
        });
    };

    const submit = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:4000/api/login",Data).then(function (response) {
            if (response.data.redirect == '/') {
                alert("Login successful")
                window.location = "/"

            } 
            else if (response.data.redirect == '/login'){
                alert("Invalid password")
                window.location = "/login"
            }
        })
        // .catch(function(error) {
        //     window.location = "/login"
        // })
            setData({
                mailid: "",
                password:"" 
            })
        }
		console.log(Data);


    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-8 bg-gray-50 relative">
                    <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">User Login</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="emailInput"
                                type="email"
                                placeholder="Enter your email"
                                name="mailid"
                                value={Data.mailid}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="passwordInput"
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={Data.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                onClick={submit}
                            >
                                Sign In
                            </button>

                            <Link
                                to="/signup"
                                className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Sign Up
                            </Link>
                            <Link
                                to="/adminlogin"
                                className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Admin
                            </Link>

                        </div>
                    </form>
                </div>
                <div className="absolute top-0 left-0 right-0 text-black text-3xl text-center mt-10 font-serif ">
                    Coconut Exclusive
                </div>
            </div>
        </div>
    );
};

export default Login;
