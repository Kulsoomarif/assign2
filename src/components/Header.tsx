import Link from "next/link";
const Header = () =>{
    return(
       <>
       <div className="hidden sm:block">
       <div className="flex flex-row justify-between  font-medium py-3 text-center text-[20px] px-4 shadow-2xl bg-black text-white">
       <div className="flex justify-center gap-2">
        <img 
        src="/logo2.jfif"
        alt="Logo"
        width={40}
        height={40}
        className="rounded-full"
        />
        Ak Jewellers</div>
            <div> 
            <ul className="flex gap-5 text-center">
  <li>
    <Link className="cursor-pointer active:bg-orange-300
     hover:bg-orange-300 px-3 py-1 rounded" href="/">Home
    </Link>
  </li>
  <li>
    <Link  className="cursor-pointer active:bg-orange-300
     hover:bg-orange-300 px-3 py-1 rounded" href="/about">About
    </Link>
  </li>
  <li>
    <Link className="cursor-pointer active:bg-orange-300
     hover:bg-orange-300 px-3 py-1 rounded" href="/products">Products
    </Link>
  </li>
  <li>
    <Link   className="cursor-pointer active:bg-orange-300
     hover:bg-orange-300 px-3 py-1 rounded" href="/contactUs">Contact Us
    </Link>
  </li>
</ul>

            </div>
        
        </div>
        </div>
    
       </>
    )
}
export default Header;