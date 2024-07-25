import React from "react";
import Header from "../shared-component/header";
import { Link } from "react-router-dom";
import Footers from "../shared-component/footer";



function Contact() {
    return(
        <div>
        <Header/>
        <div className=" relative bg-no-repeat bg-cover w-full h-[450px] flex items-center justify-center" style={{
                backgroundImage:"url('https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGFjdCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')"
                 }}>
                 <div className="  relative text-transparent bg-clip-text text-6xl font-bold text-center"
                  style={{
                     backgroundImage:"https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGFjdCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')",
                
                    }}>
                     <h2 className=" mt-32  text-black">CONTACT US</h2>
                     <h1 className=" text-2xl "><Link to='/home' className=" text-purple-700">home</Link> <Link className=" text-black"> / about</Link></h1>
                     </div> 
            </div>
            <div className=" flex  justify-center">
                <div className=" border border-black w-96 mt-4 rounded p-3">
                    <h2 className=" text-center font-bold text-xl mb-3">SAY SOMETHING</h2>
                    <form>
                        <div className=" ">
                            <input type="text" placeholder="enter your name" className=" mb-3 h-10 w-full p-2 focus:outline-none border border-black rounded "/>
                        </div>
                        <div className=" ">
                            <input type="text" placeholder="enter your email"  className=" mb-3 p-2 h-10 w-full focus:outline-none border border-black rounded"/>
                        </div>
                        <div className=" ">
                            <input type="text" placeholder="enter your number" className=" mb-3 p-2 h-10 w-full focus:outline-none border border-black rounded" />
                        </div>
                        <div className=" ">
                            <textarea name="" id="" placeholder="enter your msg" className=" h-40  p-2 w-full focus:outline-none border border-black rounded"></textarea>
                        </div>
                    </form>
                    <div className=" text-center"> 
                        <button className=" h-7 pr-5 pl-5 bg-purple-800 text-white rounded mt-3 hover:bg-purple-900 transsition duration-300 ease-in-out">Send Message</button>
                    </div>
                </div>
            </div>
            
                <Footers/>

        </div>
    )
}

export default Contact