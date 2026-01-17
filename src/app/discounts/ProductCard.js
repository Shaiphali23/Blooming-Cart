const ProductCard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        {/* Discount Badge */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
          ¥400.00 OFF
        </div>

        {/* Product Image Section */}
        <div className="relative h-64 bg-gradient-to-br from-amber-900 to-amber-700 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          {/* Chocolate cake illustration */}
          <div className="relative z-10 text-center">
            <div className="w-48 h-32 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-full rounded-b-3xl mx-auto shadow-2xl">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-amber-600 rounded-full"></div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-44 h-4 bg-amber-500 rounded-full"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-36 h-3 bg-amber-400 rounded-full"></div>
            </div>
            <div className="mt-8">
              <div className="w-12 h-12 rounded-full bg-amber-100 mx-auto flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-white text-sm mt-2 font-medium">
                Ready in 45 mins
              </p>
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Premium Chocolate Cake
          </h2>
          
          <p className="text-gray-600 mb-6">
            Rich, moist chocolate cake with layers of chocolate ganache and
            cocoa frosting.
          </p>

          {/* Price Section */}
          <div className="flex items-center mb-6">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900">¥599.00</span>
              <div className="flex items-center mt-1">
                <span className="text-lg text-gray-500 line-through mr-2">
                  ¥999.00
                </span>
                <span className="text-sm font-semibold text-red-500 bg-red-50 px-2 py-1 rounded">
                  Save ¥400.00
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-gray-800 font-bold text-lg">4.8</div>
              <div className="text-gray-500 text-sm">Rating</div>
            </div>
            <div className="text-center border-l border-r border-gray-200">
              <div className="text-gray-800 font-bold text-lg">127</div>
              <div className="text-gray-500 text-sm">Orders</div>
            </div>
            <div className="text-center">
              <div className="text-gray-800 font-bold text-lg">24</div>
              <div className="text-gray-500 text-sm">Left</div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to Cart
          </button>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500">
            <div className="flex justify-between mb-2">
              <span>Free delivery</span>
              <span className="font-medium">Yes</span>
            </div>
            <div className="flex justify-between">
              <span>Dietary</span>
              <span className="font-medium">Vegetarian</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
