import React from "react";
import Header from "../shared-component/header";
import { Link } from "react-router-dom";
import Footer from "../shared-component/footer";
import axios from 'axios'
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
//localStorage.setItem('token', data);

function Carts() {
    const [cart, setCart] = useState();
   
    // const userId = '669b6d40c0aa3ebf82ddd9f7'
    // let someCart;
    // console.log(someCart)

    // const [cart, setCart] = useState();
    // console.log("Line 16 " + cart);

    useEffect(() => {
        const fetchCart = async () => {
          const token = JSON.parse(localStorage.getItem('token')); // Retrieve the token from local storage
          console.log('Token for fetch:', token);
    
          if (!token) {
            console.error('No token found in local storage');
            return;
          }
    
          try {
           
            const response = await axios.get('http://localhost:4000/cart/read', {
              headers: {
                'Authorization': `Bearer ${token.accessToken}`,
              },
             
            });
            console.log('Cart data:', response.data.items);
             setCart(response.data);
            console.log('Cart data:', response.data);
          } catch (error) {
            console.error('Error fetching cart:', error);
          }
        };
    
        fetchCart();
      }, []);
    
      if (!cart) {
        return <div>Loading...</div>;
      }
    
      if (!cart.items || cart.items.length === 0) {
        return <p>Your cart is empty</p>;
      }
    return (
        <div>
          <Header />
          <div className="relative bg-no-repeat bg-cover w-full h-[300px] flex items-center justify-center"
               style={{ backgroundImage: "url('https://e-commerce-bookstore-uqgv.vercel.app/assets/banner-8e2f6d7e.jpg')", backgroundPosition: 'center' }}>
            <div className="relative text-transparent bg-clip-text text-4xl font-bold text-center"
                 style={{ backgroundImage: "https://e-commerce-bookstore-uqgv.vercel.app/assets/banner-8e2f6d7e.jpg')" }}>
              <h2 className="mt-32 text-black">SHOPPING CART</h2>
              <h1 className="text-2xl">
                <Link to='/home' className="text-purple-700">home</Link>
                <Link className="text-black"> / about</Link>
              </h1>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mt-4">YOUR CART</h2>
          </div>
          <div className="grid grid-cols-3 w-[65%] m-[auto] mt-5 shadow-2xl">
          {cart?.items?.map((item) => {
  console.log('Mapping item:', item);
        return item.productId && ( // Check if productId is not null
    <div key={item._id} className="border border-black w-64 p-4 rounded h-[auto]">
      <div className="relative">
        <img src={item.productId.image} alt={item.productId.name} className="w-full h-64" />
        <div className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl">${item.productId.price}/-</div>
      </div>
      <p className="mt-2 text-center">{item.productId.name}</p>
      <div className="mt-4 mb-4">
        <input type="number" defaultValue={item.quantity} min={1} className="px-1 py focus:outline-none border border-black rounded w-full h-10" />
      </div>
      <div className="text-center">
        <button className="bg-purple-700 text-white pl-5 pr-5 h-7 rounded">Update</button>
      </div>
    </div>
  );
})}

          </div>
          
          <div className="text-center mt-6">
            <button className="bg-orange-300 text-white pl-5 pr-5 h-8 rounded">Empty Cart</button>
          </div>
          <div className="border border-black w-[60%] mx-auto p-7 mt-6">
            <div className="text-center">
              <h1>Grand Total</h1>
            </div>
            <div className="flex gap-4 justify-center mt-4">
              <div>
                <button className="bg-yellow-400 text-white px-6 h-9 rounded">
                  <Link to='/shop'>Continue Shopping</Link>
                </button>
              </div>
              <div>
                <button className="bg-purple-500 text-white px-6 h-9 rounded">
                  <Link to='/checkout'>Proceed To Checkout</Link>
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    
  }
  
export default Carts