import React, { useDebugValue } from "react";
import Header from "../shared-component/header";
import { Link , useNavigate} from "react-router-dom";
import Footers from "../shared-component/footer";
import axios from 'axios'
import { useEffect, useState } from "react";
function Shop() {
    const [products, setProducts] = useState([]);
    console.log(products);
  //  const userId = '669b6d40c0aa3ebf82ddd9f7';
    const navigate = useNavigate();
  
    
    
      useEffect(() => {
        const fetchProducts = async () => {
            const token = JSON.parse(localStorage.getItem('token')); // Retrieve the token from local storage
            console.log('Token for fetch:', token);
          
            if (!token) {
              console.error('No token found in local storage');
              return;
            }
          
            try {
              const response = await axios.get('http://localhost:4000/product/get-products', {
                headers: {
                  'Authorization': `Bearer ${token.accessToken}`,
                },
              });
          
              console.log('API Response:', response.data); // Log the entire response
              setProducts(response.data); // Adjust this based on the actual data structure
            } catch (error) {
              console.error("Error fetching products:", error);
            }
          };
        fetchProducts();
      }, []);
    
      const addToCart = async (productId, quantity) => {
        const token = JSON.parse(localStorage.getItem('token')); // Retrieve the token from local storage
        console.log('Token for add to cart:', token);
    
        if (!token) {
          console.error('No token found in local storage');
          return;
        }
    
        try {
          const response = await axios.post('http://localhost:4000/cart', 
            {  productId, quantity },
            {
              headers: {
                'Authorization': `Bearer ${token.accessToken}`,
              },
            }
          );
          console.log('Add to cart response:', response);
          navigate('/carts');
        } catch (error) {
          console.error('Error adding to cart:', error);
        }
      };
    
      return (
        <div>
          <Header />
          <div className="relative bg-no-repeat bg-cover w-full h-[300px] flex items-center justify-center"
               style={{ backgroundImage: "url('https://e-commerce-bookstore-uqgv.vercel.app/assets/banner-8e2f6d7e.jpg')", backgroundPosition: 'center' }}>
            <div className="relative text-transparent bg-clip-text text-4xl font-bold text-center"
                 style={{ backgroundImage: "url('https://e-commerce-bookstore-uqgv.vercel.app/assets/banner-8e2f6d7e.jpg')" }}>
              <h2 className="mt-32 text-black">SHOPPING CART</h2>
              <h1 className="text-2xl">
                <Link to='/home' className="text-purple-700">home</Link>
                <Link className="text-black"> / about</Link>
              </h1>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mt-4">LATEST PRODUCTS</h2>
          </div>
          <div className="">
            <div className="grid grid-cols-3 w-[65%] m-[auto] mt-5 shadow-2xl">
              {products.map((product) => (
                <div key={product._id} className="border border-black w-64 p-4 rounded">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
                    <div className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl">${product.price}/-</div>
                  </div>
                  <p className="mt-2 text-center">{product.name}</p>
                  <div className="mt-4 mb-4">
                    <input type="number" defaultValue={1} min={1} id={`quantity-${product._id}`} className="px-1 py-1 focus:outline-none border border-black rounded h-10 w-full" />
                  </div>
                  <div className="text-center">
                    <button className="bg-purple-700 text-white pl-5 pr-5 h-7 rounded"
                            onClick={() => {
                              const quantity = document.getElementById(`quantity-${product._id}`).value;
                              addToCart(product._id, parseInt(quantity));
                            }}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footers />
        </div>
      );
    
  }


export default Shop