import React from "react";
import Header from "../shared-component/header";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";



function About() {
    return(
        <div>
            <Header/>
         c   <div className=" relative bg-no-repeat bg-cover w-full h-[450px] flex items-center justify-center" style={{
                backgroundImage:"url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D')"
                 }}>
                 <div className="  relative text-transparent bg-clip-text text-6xl font-bold text-center"
                  style={{
                     backgroundImage:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D')",
                
                    }}>
                     <h2 className=" mt-32  text-black">ABOUT US</h2>
                     <h1 className=" text-2xl "><Link to='/home' className=" text-purple-700">home</Link> <Link className=" text-black"> / about</Link></h1>
                     </div> 
            </div>
            <div className=" w-[80%] m-[auto] mt-5">
                 <div className=" flex ">
            <div>
                <img src="https://images.unsplash.com/photo-1720211370947-68088964ae6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" width='500px'  className=" h-72" />
            </div>
            <div className=" bg-gray-100 w-auto   p-2">
                <h2 className=" font-bold text-2xl mb-2">WHY CHOOSE US</h2>
                <p className=" "> Many desktop publishing packages and web page editors now use  </p>
                <p>  Lorem Ipsum as their default model text,and a search for
                'lorem ipsum'  </p>
                <p>will cover many web sites still in their infancy.Various versions have  </p>
                <p>evolved over the years, sometimes by accident, sometimes on purpose</p>
                <p className=" mt-3 "> Many desktop publishing packages and web page editors now use  </p>
                <p>  Lorem Ipsum as their default model text, and a search for
                'lorem ipsum'  </p>
                <div className=" mt-2 ">
                <button className="bg-purple-800 text-white pl-5 pr-5 h-7 rounded"><Link>Contact Us</Link></button>
                </div>
            </div>
        </div>
      </div>
      <div>
        <div className=" bg-gray-100  pb-3">
            <h2 className=" text-center text-3xl mt-8 font-bold mb-5 pt-5">CLIENT'S REVIEWS</h2>
            <div className="  grid grid-cols-3 w-[80%] m-[auto] gap-3">
            <div className=" border border-gray-400 inline-block bg-white shadow-gray-300 shadow-2xl p-2 rounded " >
            <div className="flex items-center justify-center mb-2 mt-3">
    <div className="bg-cover bg-no-repeat">
        <img src="https://niksessentialoils.com/wp-content/uploads/2021/06/av4-430x323.jpg" alt="" className="w-20 h-20 rounded-full"/>  
    </div>
</div>

             <p className=" font-light text-center">Lorem ipsum dolor sit amet, consectetur</p>
             <p className=" font-light  mb-2 mt-1">adipiscing elit, sed do eiusmod tempor res et </p>
              <p className=" font-light mt-2">ut labore et dolore magna aliqua. Ut enim ad </p>
               <p className=" font-light text-center">veniam.</p>
               <div className="flex justify-center mt-2">
    <div className="flex items-center border border-gray-600 w-24 gap-2 rounded font-bold text-2xl bg-gray-300 pl-1 pr-1 mt-2">
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
    </div>
</div>
               <h1 className=" text-center font-bold mt-2">john doe</h1>

            </div>
            <div className=" border border-gray-400 inline-block bg-white shadow-gray-300 shadow-2xl p-2 rounded" >
            <div className="flex items-center justify-center mb-2 mt-3">
    <div className="bg-cover bg-no-repeat">
        <img src="https://www.betterfullstop.co.uk/cdn/shop/products/6_360x.png?v=1606754238" alt="" className="w-20 h-20 rounded-full"/>  
    </div>
</div>

<p className=" font-light text-center">Lorem ipsum dolor sit amet, consectetur</p>
             <p className=" font-light  mb-2 mt-1">adipiscing elit, sed do eiusmod tempor res et </p>
              <p className=" font-light mt-2">ut labore et dolore magna aliqua. Ut enim ad </p>
               <p className=" font-light text-center">veniam.</p>
               <div className="flex justify-center mt-2">
    <div className="flex items-center border border-gray-600 w-24 gap-2 rounded font-bold text-2xl bg-gray-300 pl-1 pr-1 mt-2">
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
    </div>
</div>
               <h1 className=" text-center font-bold mt-2">vivian ray</h1>

            </div>
            <div className=" border border-gray-400 inline-block bg-white shadow-gray-300 shadow-2xl p-2 rounded" >
            <div className="flex items-center justify-center mb-2 mt-3">
    <div className="bg-cover bg-no-repeat">
        <img src="https://c.superprof.com/i/m/27087280/300/20230704081140/27087280.webp" alt="" className="w-20 h-20 rounded-full"/>  
    </div>
</div>

<p className=" font-light text-center">Lorem ipsum dolor sit amet, consectetur</p>
             <p className=" font-light  mb-2 mt-1">adipiscing elit, sed do eiusmod tempor res et </p>
              <p className=" font-light mt-2">ut labore et dolore magna aliqua. Ut enim ad </p>
               <p className=" font-light text-center">veniam.</p>
               <div className="flex justify-center mt-2">
    <div className="flex items-center border border-gray-600 w-24 gap-2 rounded font-bold text-2xl bg-gray-300 pl-1 pr-1 mt-2">
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
    </div>
</div>
               <h1 className=" text-center font-bold mt-2">joshua well</h1>

            </div>
            <div className=" border border-gray-400 inline-block bg-white shadow-gray-300 shadow-2xl p-2 rounded" >
            <div className="flex items-center justify-center mb-2 mt-3">
    <div className="bg-cover bg-no-repeat">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxDTGV2-pMW-VkmCypqlWbnRcw9QwguyLIACJG7fFSsMkFjRSA" alt="" className="w-20 h-20 rounded-full"/>  
    </div>
</div>

<p className=" font-light text-center">Lorem ipsum dolor sit amet, consectetur</p>
             <p className=" font-light  mb-2 mt-1">adipiscing elit, sed do eiusmod tempor res et </p>
              <p className=" font-light mt-2">ut labore et dolore magna aliqua. Ut enim ad </p>
               <p className=" font-light text-center">veniam.</p>
               <div className="flex justify-center mt-2">
    <div className="flex items-center border border-gray-600 w-24 gap-2 rounded font-bold text-2xl bg-gray-300 pl-1 pr-1 mt-2">
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
    </div>
</div>
               <h1 className=" text-center font-bold mt-2">anita mali</h1>

            </div>   
            <div className=" border border-gray-400 inline-block bg-white shadow-gray-300 shadow-2xl p-2 rounded" >
            <div className="flex items-center justify-center mb-2 mt-3">
    <div className="bg-cover bg-no-repeat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfhOGt2mmasy2EqrTuT1VGosTQfHo5d-Q6GFpYnYiiUqRs-UF" alt="" className="w-20 h-20 rounded-full"/>  
    </div>
</div>

<p className=" font-light text-center">Lorem ipsum dolor sit amet, consectetur</p>
             <p className=" font-light  mb-2 mt-1">adipiscing elit, sed do eiusmod tempor res et </p>
              <p className=" font-light mt-2">ut labore et dolore magna aliqua. Ut enim ad </p>
               <p className=" font-light text-center">veniam.</p>
               <div className="flex justify-center mt-2">
    <div className="flex items-center border border-gray-600 w-24 gap-2 rounded font-bold text-2xl bg-gray-300 pl-1 pr-1 mt-2">
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
    </div>
</div>
               <h1 className=" text-center font-bold mt-2">liam shark</h1>

            </div>
            <div className=" border border-gray-400 inline-block bg-white shadow-gray-300 shadow-2xl p-2 rounded" >
            <div className="flex items-center justify-center mb-2 mt-3">
    <div className="bg-cover bg-no-repeat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43VxCopuMVYcGwA5wZKWGiRN_b-QIysmw93oG3ggXvOkATyT7" alt="" className="w-20 h-20 rounded-full"/>  
    </div>
</div>

<p className=" font-light text-center">Lorem ipsum dolor sit amet, consectetur</p>
             <p className=" font-light  mb-2 mt-1">adipiscing elit, sed do eiusmod tempor res et </p>
              <p className=" font-light mt-2">ut labore et dolore magna aliqua. Ut enim ad </p>
               <p className=" font-light text-center">veniam.</p>
               <div className="flex justify-center mt-2">
    <div className="flex items-center border border-gray-600 w-24 gap-2 rounded font-bold text-2xl bg-gray-300 pl-1 pr-1 mt-2">
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
        <FaStar className="text-yellow-600"/>
    </div>
</div>
               <h1 className=" text-center font-bold mt-2">rachael lite</h1>

            </div>
            </div>
        </div>
      </div>
        </div>
    )
}
export default About