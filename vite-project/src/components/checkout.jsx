import React from "react";
import Header from "../shared-component/header";
import { Link } from "react-router-dom";
import Footers from "../shared-component/footer";


function Checkout() {
    return(
        <div>
            <Header/>
            <div className=" relative bg-no-repeat bg-cover w-full h-[300px] flex items-center justify-center" style={{
                backgroundImage:"url('https://e-commerce-bookstore-uqgv.vercel.app/assets/banner-8e2f6d7e.jpg')",
                backgroundPosition: 'center'
                 }}>
                 <div className="  relative text-transparent bg-clip-text text-4xl font-bold text-center"
                  style={{
                     backgroundImage:"https://e-commerce-bookstore-uqgv.vercel.app/assets/banner-8e2f6d7e.jpg')",
                
                    }}>
                     <h2 className=" mt-32  text-black">SHOPPING CART</h2>
                     <h1 className=" text-2xl "><Link to='/home' className=" text-purple-700">home</Link> <Link className=" text-black"> / about</Link></h1>
                     </div> 
            </div>

               <div className=" mt-6 border border-black w-[65%] m-[auto] p-4 bg-gray-200 ">
                <div className=" text-center">
                    <h1 className=" text-2xl font-bold">PLACE YOUR ORDER</h1>
                </div>
                <div>
                    <form className=" grid grid-cols-2 gap-3  ">
                      <div className=" mb-3">
                      <label htmlFor="">Your Name:</label>
                      <input type="text" placeholder="Enter your name" className=" block w-96 pl-3 rounded focus:outline-none h-8 border " />
                      </div>
                      <div className=" mb-3">
                      <label htmlFor="">Your Number:</label>
                      <input type="text" placeholder="Enter your name" className=" block w-96 pl-3 rounded focus:outline-none h-8 border " />
                      </div>
                      <div className=" mb-3">
                      <label htmlFor="">Your Email:</label>
                      <input type="text" placeholder="Enter your name" className=" block w-96 pl-3 rounded focus:outline-none h-8 border " />
                      </div>
                      <div className=" mb-3">
                      <label htmlFor="">Payment Method:</label>
                      <input type="text" placeholder="Enter your name" className=" block w-96 pl-3 rounded focus:outline-none h-8 border " />
                      </div>
                      <div className=" mb-3"> 
                      <label htmlFor="">Address Line 1:</label>
                      <input type="text" placeholder="Enter your name" className=" block w-96 pl-3 rounded focus:outline-none h-8 border " />
                      </div>
                      <div className=" mb-3">
                      <label htmlFor="">Address Line 2:</label>
                      <input type="text" placeholder="Enter your name" className=" block w-96 pl-3 rounded focus:outline-none h-8 border " />
                      </div>
                      <div className=" mb-3">
                      <label htmlFor="">City:</label>
                      <input type="text" placeholder="Enter your name" className=" block w-96 pl-3 rounded focus:outline-none h-8 border " />
                      </div>
                      <div className=" mb-3">
                      <label htmlFor="">State:</label>
                      <input type="text" placeholder="Enter your name" className=" block w-96 pl-3 rounded focus:outline-none h-8 border " />
                      </div>
                      <div className=" mb-3">
                      <label htmlFor="">Country:</label>
                      <input type="text" placeholder="Enter your name" className=" block w-96 pl-3 rounded focus:outline-none h-8 border " />
                      </div>
                      <div className=" mb-3">
                      <label htmlFor="">Pin Code</label>
                      <input type="text" placeholder="Enter your name" className=" block w-96 pl-3 rounded focus:outline-none h-8 border " />
                      </div>
                    </form>
                </div>
                <div className=" mt-3">
                    <button className=" bg-purple-700 pl-5 pr-5 h-8 text-white rounded"><Link to='/orders'>Order Now</Link></button>
                </div>
               </div>
               <Footers/>
        </div>
    )
}
export default Checkout