const Body = () => {
  return (
    <div className="relative py-6 bg-cover h-[900px] sm:h-[600px]  bg-orange-400 items-center mx-auto px-4 lg:px-16">
      
  {/* First row of items */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center px-4">
    <div className="items-center">
      <img
        src="/earr.jpg"
        alt="earrings"
        className="rounded-lg object-cover transition-transform duration-300 transform hover:scale-110 outline-double outline-orange-500 w-60 h-72"
      />
      <h1 className="font-bold text-center text-[24px] mt-4">EARRINGS</h1>
    </div>
    <div className=" items-center">
      <img
        src="/necc.jpg"
        alt="necklace"
        className="rounded-lg object-cover transition-transform duration-300 transform hover:scale-110 outline-double outline-orange-500 w-56 h-64"
      />
      <h1 className="font-bold text-center text-[24px] mt-4">NECKLACE</h1>
    </div>
    <div className="items-center">
      <img
        src="/brac.avif"
        alt="bracelet"
        className="rounded-lg object-cover transition-transform duration-300 transform hover:scale-110 outline-double outline-orange-500 w-60 h-72"
      />
      <h1 className="font-bold text-center text-[24px] mt-4">BRACELET</h1>
    </div>
  </div>

  {/* Second row of items */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 place-items-center px-4">
    <div className="items-center">
      <img
        src="/rin.jpg"
        alt="ring"
        className="rounded-lg object-cover transition-transform duration-300 transform hover:scale-110 outline-double outline-orange-500 w-60 h-72"
      />
      <h1 className="font-bold text-center text-[24px] mt-4">RING</h1>
    </div>
    <div className="items-center">
      <img
        src="/ban.webp"
        alt="bangle"
        className="rounded-lg object-cover transition-transform duration-300 transform hover:scale-110 outline-double outline-orange-500 w-56 h-64"
      />
      <h1 className="font-bold text-center text-[24px] mt-4">BANGLE</h1>
    </div>
    <div className=" items-center">
      <img
        src="/ank.webp"
        alt="anklet"
        className="rounded-lg object-cover transition-transform duration-300 transform hover:scale-110 outline-double outline-orange-500 w-60 h-72"
      />
      <h1 className="font-bold text-center text-[24px] mt-4">ANKLET</h1>
    </div>
  </div>
</div>
  )}

export default Body;
