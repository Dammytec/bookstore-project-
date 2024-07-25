import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



function Footer() {
    return(
        <div>
           <div className=" bg-black w-full  mt-5">
                 <div className=" text-center text-white p-7">
                 <h2 className=" text-2xl mb-2 font-bold">HAVE ANY QUESTIONS</h2>
                  <p>All the Lorem Ipsum generators on the Internet tend to repeat chunks as necessary,</p>
                  <p>making this the first true generator on the Internet</p>
                   <div className=" mt-4">
                   <button className="bg-purple-800 text-white pl-5 pr-5 h-7 rounded">Contact Us</button>
                  </div>
            </div>
           </div>
           <div className=" grid grid-cols-4 w-[80%] m-[auto] mt-3">
            <div>
                <h2 className=" font-bold mb-4 ">QUICK LINKS</h2>
                <div className=" mb-1 hover:underline">
               <Link to='/home'>home</Link>
                </div>
                <div className=" mb-1 hover:underline">
                    <Link to='/about'>about</Link>
                </div>
                <div className=" mb-1 hover:underline">
                <Link to='/shop'>shop</Link>
                </div>
                <div className=" hover:underline" >
                <Link to='/contact'>contact</Link>
                </div>
            </div>
            <div>
            <h2 className=" font-bold mb-4 hover:underline">EXTRA LINKS</h2>
                <div className=" mb-1 hover:underline">
               <Link to='/'>login</Link>
                </div>
                <div className=" mb-1 hover:underline">
                    <Link to='/register-now'>register</Link>
                </div>
                <div className=" mb-1 hover:underline">
                <Link to='/cart'>cart</Link>
                </div>
                <div className=" hover:underline">
                <Link to='/orders'>orders</Link>
                </div>
            </div>
            <div>
            <h2 className=" font-bold mb-4">CONTACT INFO</h2>
                <div className=" flex items-center gap-2 mb-1">
                    <div className=" text-purple-700 ">
                    <FaPhoneAlt /> 
                    </div>
                    <p>090-5216-6037</p>
                </div>
                <div className=" flex items-center gap-2 mb-1">
                    <div className=" text-purple-700">
                    <FaPhoneAlt /> 
                    </div>
                    <p>070-8470-5139</p>
                </div>
                <div className=" flex items-center gap-2 mb-1">
                    <div className=" text-purple-700">
                    <MdEmail />
                    </div>
                    <p>dhawau29@gmail.com</p>
                </div>
                <div className=" flex items-center gap-2">
                    <div className=" text-purple-700">
                    <FaLocationDot />
                    </div>
                    <p>lagos, Nigeria - 100211 </p>
                </div>
            </div>
            <div >
                <h2 className=" font-bold mb-4">FOLLOW US</h2>
                <div className="  flex items-center gap-2  mb-1 hover:underline">
                    <div className=" text-purple-700 ">
                   <Link to="https://www.facebook.com/">
                     <FaFacebookF />
                    </Link>
                  </div>
                  <p>facebook</p>
        </div>
        <div className=" flex items-center gap-2 mb-1 hover:underline">
            <div className=" text-purple-700">
          <Link to="https://x.com/?lang=en">
            <FaTwitter />
          </Link>
          </div>
          <p>twitter</p>
        </div>
        <div  className=" flex items-center gap-2 mb-1 hover:underline" >
            <div className=" text-purple-700">
          <Link to="https://www.instagram.com/">
            <FaInstagram />
          </Link>
          </div>
          <p>instagram</p>
        </div>
        <div className=" flex items-center gap-2  hover:underline">
            <div className=" text-purple-700">
          <Link to="https://ng.linkedin.com/">
            <FaLinkedin />
          </Link>
          </div>
          <p>linkedin</p>
        </div>
            </div>
           </div>
           <div className=" mt-4 w-[90%] m-[auto]">
            <hr  className=" h-1 bg-gray-500 border-none"/>
           </div>
           <div className=" mt-1  text-center">
           <div className=" flex items-center gap-1  justify-center" >
            <p>&copy;copyright @2024 by</p>
            <p className=" text-purple-700 ">dammytech</p>
           </div>
           </div>
        </div>
    )
}

export default Footer