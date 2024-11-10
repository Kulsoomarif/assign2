export default function ProductGrid() {
    const products = [
      {
        id: 1,
        image: "/Earrings/ear3.jpg",
        price: "$19.99",
        description: "Stylish Earrings",
      },
      {
        id: 2,
        image: "/Earrings/gg.avif",
        price: "$29.99",
        description: "Stylish Earrings",

      },
      {
        id: 3,
        image: "/Earrings/images.jfif",
        price: "$19.99",
        description: "Stylish Earrings",

      },
      {
        id: 4,
        image: "/Earrings/n.jfif",
        price: "$19.99",
        description: "Stylish Earrings",

      },
      {
        id: 5,
        image: "/Earrings/rrr.avif",
        price: "$29.99",
        description: "Stylish Earrings",

      },
      {
        id: 6,
        image: "/Earrings/earr.jpg",
        price: "$39.99",
        description: "Stylish Earrings",

      },

      
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-orange-400 gap-6 p-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={product.image}
              alt={product.description}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-4">
              <p className="text-lg font-semibold">{product.price}</p>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  