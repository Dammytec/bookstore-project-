 import {Link, useNavigate} from "react-router-dom"
 import React from "react"
 import axios from 'axios'
 import { useEffect, useState } from "react";


 
 function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const history = useHistory(); // For navigation
    const Navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await axios.post('http://localhost:4000/auth/login', {
                email,
                password
            });
            const token = response.data; 
            console.log(response);
            console.log(token);// Extract the actual token string from the response object
            localStorage.setItem('token' , JSON.stringify(token)); 
            console.log(localStorage);// Store the token in local storage
            Navigate('/home'); // Navigate to home page or another page after successful login
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="border border-black p-4 rounded">
                <div className="font-bold text-center">
                    <h2 className="text-xl mb-3">LOGIN NOW</h2>
                </div>

                <form className="space-y-4 w-72" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flow-root px-1 py focus:outline-none border border-black rounded w-full h-9"
                        required
                    />
                    <input
                        type="password"
                        placeholder="enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block px-1 py focus:outline-none border border-black rounded w-full h-9"
                        required
                    />
                    <div className="text-center p-4">
                        <button
                            type="submit"
                            className="bg-purple-700 p-1 pl-4 pr-5 rounded hover:bg-purple-900 transition duration-300 ease-in-out text-white"
                        >
                            Login Now
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <p>
                        don't have an account? <Link to="/register-now" className="text-purple-700 hover:text-purple-900">register now</Link>
                    </p>
                </div>
            </div>
        </div>
    );
  }

  export default Login