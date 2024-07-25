import React from "react";
import Header from "../shared-component/header";
import Footer from "../shared-component/footer-home";


function Home() {
    return(
        <div>
        <Header/>
        
        <div
  style={{
    backgroundImage: "url('https://e-commerce-bookstore-uqgv.vercel.app/assets/banner-8e2f6d7e.jpg')",
    width: '100%',
    height: '500px',
  }}
  className="relative bg-no-repeat bg-cover w-full h-screen flex items-center justify-center"
>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative text-transparent bg-clip-text text-6xl font-bold "
    style={{
      
      backgroundImage: "url('https://e-commerce-bookstore-uqgv.vercel.app/assets/banner-8e2f6d7e.jpg')",
      
    }}>
   <h3 className=" text-white text-5xl mb-3">HAND PICKED BOOK</h3>
   <h3 className=" text-white text-5xl pl-10 mb-3">TO YOUR DOOR.</h3>
   <p className=" text-white text-xs mb-2">It is a long established fact that a reader will be distracted by the readable content, </p>
   <p className=" text-white text-xs pl-28"> of a page when looking at its layout</p>
   <div className=" text-center">
   <button className=" text-sm bg-purple-700 text-white pl-5 pr-5 h-9 rounded  hover:bg-purple-800 transition duration-300 ease-in-out">Discover More</button>
   </div>
  </div>
</div>
<div className=" text-center">
  <h2 className=" text-3xl font-bold mt-4">LATEST PRODUCTS</h2>
</div>
<div className=" ">
    <div className=" grid grid-cols-3 w-[65%] m-[auto]  mt-5 shadow-2xl"  >
        <div className="border border-black w-64 p-4 rounded  ">
            <div className=" relative">
            <img src="https://demo.phlox.pro/book-store/wp-content/uploads/sites/116/2019/06/7-2.jpg" alt="" width='230px'/>
            <div className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl">$20/-</div>
            </div>
               <p className=" mt-2 text-center">world of art</p>
           <div className=" mt-4 mb-4">
             <input type="number"  className=" px-1 py focus:outline-none border border-black rounded w-full  h-10"/>
            </div>
            <div className=" text-center">
                <button className=" bg-purple-700 text-white pl-5 pr-5 h-7 rounded">Add To Cart</button>
            </div>
        </div>
        <div className="border border-black w-64 p-4 rounded relative">
             <div className="relative ">
          <img src="https://demo.cmssuperheroes.com/themeforest/bookjunky/wp-content/uploads/the_happy_lemon.jpg" alt="" className=" w-full h-80" />
            <div className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl">$20/-</div>
            </div>
             <p className="text-center mt-2">happy lemon</p>
                  <div className="mt-4 mb-4">
                <input type="number" className="px-1 py focus:outline-none border border-black rounded h-10 w-full"/>
          </div>
           <div className="text-center">
           <button className="bg-purple-700 text-white pl-5 pr-5 rounded h-7">Add To Cart</button>
         </div>
       </div>
       <div className="border border-black w-64 p-4 rounded">
    <div className="relative">
        <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1508771320l/36463554.jpg" alt="" className="w-full h-80 object-cover "/>
        <div className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl">$20/-</div>
    </div>
    <p className="text-center mt-2">darknet</p>
    <div className="mt-4 mb-4">
        <input type="number" className="px-1 py focus:outline-none border border-black rounded h-10 w-full"/>
    </div>
    <div className="text-center">
        <button className="bg-purple-700 text-white pl-5 pr-5 h-7 rounded">Add To Cart</button>
    </div>
</div>
        <div className="border border-black w-64 p-4 rounded mt-3">
            <div className=" relative">
                <img src="https://m.media-amazon.com/images/I/518quk6nO2L._SY445_SX342_.jpg" alt="" className=" w-full h-80" />
                <div className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl">$20/-</div>
                </div>
                <p className=" text-center mt-2">be will bee</p>
                <div className=" mt-4 mb-4">
                <input type="number"  className=" px-1 py focus:outline-none border border-black rounded w-full h-10"/>
            </div>
            <div className=" text-center">
                <button className=" bg-purple-700 text-white pl-5 pr-5 h-7 rounded" >Add To Cart</button>
            </div>
        </div>
        <div className="border border-black w-64 p-4 rounded mt-3">
            <div className=" relative">
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1449778912i/22328546.jpg" alt="" className=" w-full h-80" />
                <div className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl">$20/-</div>
                </div>
                <p className=" text-center mt-2">red queen</p>
                <div className=" mt-4 mb-4">
                <input type="number"  className=" px-1 py focus:outline-none border border-black rounded h-10 w-full"/>
            </div>
            <div className=" text-center">
                <button className=" bg-purple-700 text-white pl-5 pr-5 h-7 rounded">Add To Cart</button>
            </div>
        </div>
        <div className="border border-black w-64 p-4 rounded mt-3">
            <div className=" relative">
           <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333400218i/7402393._SY180_.jpg" alt="" className=" w-full h-80" />
           <div className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl">$20/-</div>
           </div>
              <p className=" text-center mt-2">nightshade</p>
           <div className=" mt-4 mb-4">
             <input type="number" className="px-1 py focus:outline-none border border-black rounded h-10 w-full"/>
           </div>
          <div className=" text-center">
           <button className="bg-purple-700 text-white pl-5 pr-5 h-7 rounded">Add To Cart</button>
          </div>
       </div>
      

    </div>
    <div className=" mt-5 text-center">
        <button className=" bg-black text-white pl-5 pr-5 h-7 rounded">Load More</button>
      </div>
      <div className=" w-[80%] m-[auto] mt-9">
        <div className=" flex items-center">
            <div>
                <img src="https://images.unsplash.com/photo-1720211370947-68088964ae6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" width='500px'  className=" h-72" />
            </div>
            <div className=" bg-gray-100 w-auto h-40  p-5">
                <h2 className=" font-bold text-2xl">ABOUT US</h2>
                <p className=" ">It is a long established fact that a reader will be distracted by the</p>
                <p>readable content of a page when looking at its layout</p>
                <div className=" mt-3 ">
                <button className="bg-purple-800 text-white pl-5 pr-5 h-7 rounded">Read More</button>
                </div>
            </div>
        </div>
      </div>
</div>
      <Footer/>
       
      </div>
    )
}


export default Home