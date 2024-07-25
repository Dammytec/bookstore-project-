import { Link } from "react-router-dom";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
function Header() {
  return (
    <div className=" fixed w-full top-0 z-50">
    <div className=" w-full bg-gray-100 h-10">
    <div className=" flex  w-[80%] m-[auto] justify-between text-center ">
      <div className=" flex mt-3 gap-3 ">
      <div>
          <Link to="https://www.facebook.com/">
            <FaFacebookF />
          </Link>
        </div>
        <div>
          <Link to="https://x.com/?lang=en">
            <FaTwitter />
          </Link>
        </div>
        <div>
          <Link to="https://www.instagram.com/">
            <FaInstagram />
          </Link>
        </div>
        <div>
          <Link to="https://ng.linkedin.com/">
            <FaLinkedin />
          </Link>
        </div>
      </div>
        <div className=" mt-2">
          <p className=" text-purple-400  font-bold">new <Link to='/'>login</Link> | <Link to='/register-now'>register</Link></p>
        </div>
    </div>
     </div>
      <div className=" bg-white w-full h-11">
          <div className=" flex justify-between w-[80%] m-[auto] ">
           <div>
             <h3 className=" text-purple-400 mt-2 font-bold text-xl">Bookly.</h3>
            </div>
           <div className=" flex gap-6 mt-2 font-bold">
              <div>
                <Link to='/home'>home</Link>
              </div>
               <div>
                <Link to='/about'>about</Link>
                </div>
              <div>
                <Link to='/shop'>shop</Link>
               </div>
               <div>
                 <Link to='/contact'>contact</Link>
                 </div>
               <div>
                  <Link to='/orders'>orders</Link>
                </div>
            </div>
                <div className=" flex mt-2 gap-2 ">
                   <div className=" mt-2">
                    <Link to='/search'><FaSearch /></Link>
                   </div>
                   <div className=" mt-2">
                    <Link><RiContactsFill /></Link>
                   </div>
                   <div className=" flex items-center mt-1">
                    <Link to='/carts'><FaShoppingCart /></Link>
                    <h3>(0)</h3>
                   </div>
                </div>
      </div>
        </div>
</div>
    


  );
}

export default Header;
