export const metadata = {
  title: "Our Stores | Bloomify",
  description:
    "Find Bloomify stores near you and experience our flowers in person.",
};

export default function StorePage() {
  const stores = [
    {
      id: 1,
      city: "Delhi",
      address: "Connaught Place, New Delhi",
      timing: "9:00 AM – 9:00 PM",
      phone: "+91 98765 43210",
    },
    {
      id: 2,
      city: "Mumbai",
      address: "Bandra West, Mumbai",
      timing: "9:00 AM – 9:00 PM",
      phone: "+91 98765 43211",
    },
    {
      id: 3,
      city: "Bangalore",
      address: "Indiranagar, Bangalore",
      timing: "10:00 AM – 10:00 PM",
      phone: "+91 98765 43212",
    },
  ];

  return (
    <section className="min-h-screen bg-[#fffaf7] px-4 py-12 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Stores 🏬
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Visit our stores to explore fresh flowers and exclusive collections.
          </p>
        </div>

        {/* Store Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <div
              key={store.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {store.city}
              </h3>
              <p className="text-gray-600 mt-2">📍 {store.address}</p>
              <p className="text-gray-600 mt-1">⏰ {store.timing}</p>
              <p className="text-gray-600 mt-1">📞 {store.phone}</p>

              <button className="mt-4 w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
                Get Directions
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-14 text-center text-gray-600">
          <p>For store-related inquiries, contact us at</p>
          <p className="font-medium text-pink-500">support@bloomify.com</p>
        </div>
      </div>
    </section>
  );
}
