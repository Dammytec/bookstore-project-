import { Link } from "react-router-dom"

function Register() {
    return(
        <div className=" ">
        <div className="min-h-screen flex justify-center items-center ">
        <div className=" border border-black p-4 rounded">
          <div className="text-center font-bold ">
            <h1  className=" text-xl mb-3">REGISTER NOW</h1>
          </div>
          <form className="space-y-4 w-72">
            <input
              type="text"
              placeholder="enter your name"
              className="block px-1 py focus:outline-none border border-black rounded w-full"
            />
            <input
              type="email"
              placeholder="enter your email"
              className="block px-1 py focus:outline-none border border-black rounded w-full"
            />
            <input
              type="password"
              placeholder="enter your password"
              className="block px-1 py focus:outline-none border border-black rounded w-full"
            />
            <input
              type="password"
              placeholder="confirm your password"
              className="block px-1 py focus:outline-none border border-black rounded w-full"
            />
         <div className="block px-1 py focus:outline-none border border-black rounded w-full">
            <select className="w-full focus:outline-none">
            <option value="user">User</option>
           <option value="admin">Admin</option>
           </select>
        </div>
          </form>
          <div>
            <div className=" text-center  p-4 text-white ">
            <button className=" bg-purple-700 p-1 rounded pl-5 pr-5 hover:bg-purple-900 transition duration-300 ease-in-out"><Link to="/">Register Now</Link></button>
            </div>
            
        </div>
        <div>
            <p>already have an account? <Link to="/" className=" text-purple-700 hover:text-purple-900">login now</Link></p>
        </div>
        </div>
       
      </div>
      </div>
      
      
    )
}

export default Register