
const Footer = () => {
    return (
      <div className="bg-black text-white  py-6 px-4 sm:px-8 lg:px-16">
        
        <div className="flex justify-center space-x-6 mb-4">
          <i className="fa-brands fa-facebook text-2xl cursor-pointer hover:text-orange-500 transition duration-300"></i>
          <i className="fa-brands fa-instagram text-2xl cursor-pointer hover:text-orange-500 transition duration-300"></i>
          <i className="fa-brands fa-linkedin text-2xl cursor-pointer hover:text-orange-500 transition duration-300"></i>
        </div>
        <div className="text-center">
          <p className="text-sm sm:text-base md:text-lg">
            Copyright 2024 all rights reserved
          </p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  