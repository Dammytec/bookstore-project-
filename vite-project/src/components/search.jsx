import React from "react";
import Header from "../shared-component/header";
import Footers from "../shared-component/footer";
import { Link } from "react-router-dom";

function Search() {
    return(
        <div>
          <Header/>
          <div className=" relative bg-no-repeat bg-cover w-full h-[450px] flex items-center justify-center" style={{
                backgroundImage:"url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                 }}>
                 <div className="  relative text-transparent bg-clip-text text-5xl font-bold text-center"
                  style={{
                     backgroundImage:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                
                    }}>
                     <h2 className=" mt-32  text-black">SEARCH PAGE</h2>
                     <h1 className=" text-2xl "><Link to='/home' className=" text-purple-700">home</Link> <Link className=" text-black"> / about</Link></h1>
                     </div> 
            </div>
            <div className="w-[80%] mx-auto mt-6">
    <div className="flex items-center gap-2">
        <input type="text" placeholder="search products..." className="h-8  bg-gray-100 focus:outline-none border border-black w-[90%] rounded-l-md pl-2" />
        <button className="h-8 bg-purple-800 text-white px-5 rounded-r-md">Search</button>
    </div>
</div>
<div className=" text-center">
    <button className=" bg-gray-50 pl-6 pr-6 h-9 hover:bg-purple-800 border border-gray-500 mt-7 text-red-400">search something!</button>
</div>

  <Footers/>
        </div>
    )
}

export default Search