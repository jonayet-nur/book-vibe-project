import React from 'react'
import banerImg from '../../assets/pngwing 1.png'
const Banner = () => {
  return (
    <div className="hero bg-base-300 w-10/12 mx-auto my-25 p-10 rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse  w-full justify-around">
    <img
      src={banerImg}
      className=" rounded-lg  "
    />
    <div>
      <h1 className="md:text-5xl font-bold text-4xl font-[Playfair]">Books to freshen up <br></br> your bookshelf</h1>
      <button className="btn bg-[#23BE0A] mt-5 text-white font-bold">View The List</button>
    </div>
  </div>
</div>
  )
}

export default Banner