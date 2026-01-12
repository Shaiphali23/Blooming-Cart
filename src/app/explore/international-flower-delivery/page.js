import React from "react";

const page = () => {
  const countryCards = [
    {
      name: "UNITED STATES",
      image:
        "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/98742c.jpg?height=256&width=234",
      flag: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/usa.gif?height=33&width=45",
    },
    {
      name: "CANADA",
      image:
        "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/90977c.jpg?height=256&width=234",
      flag: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/canada.gif?height=33&width=45",
    },
    {
      name: "UNITED KINGDOM",
      image:
        "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/100299c.jpg?height=256&width=234",
      flag: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/greatbritain.gif?height=33&width=45",
    },
    {
      name: "AUSTRALIA",
      image:
        "	https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/143719c.jpg?height=256&width=234",
      flag: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/australia.gif?height=33&width=45",
    },
    {
      name: "MEXICO",
      image:
        "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/142243c.jpg?height=256&width=234",
      flag: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/mexico.gif?height=33&width=45",
    },
    {
      name: "GERMANY",
      image:
        "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/105706c.jpg?height=256&width=234",
      flag: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/germany.gif?height=33&width=45",
    },
    {
      name: "FRANCE",
      image:
        "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/98777c.jpg?height=256&width=234",
      flag: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/france.gif?height=33&width=45",
    },
    {
      name: "JAPAN",
      image:
        "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/142248c.jpg?height=256&width=234",
      flag: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/japan.gif?height=33&width=45",
    },
    {
      name: "ITALY",
      image:
        "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/98655c.jpg?height=256&width=234",
      flag: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/italy.gif?height=33&width=45",
    },
    {
      name: "PHILIPPINES",
      image:
        "	https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/105363c.jpg?height=256&width=234",
      flag: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/philippines.gif?height=33&width=45",
    },
  ];
  const countries = [
    "Andorra",
    "Angola",
    "Anguilla",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Bahamas",
    "Bahrain",
    "Barbados",
    "Belgium",
    "Belize",
    "Bolivia",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Canada",
    "Cayman Islands",
    "Chile",
    "China",
    "Colombia",
    "Corsica",
    "Costa Rica",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominican Republic",
    "Dominica",
    "Dubai",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "England",
    "Finland",
    "France",
  ];
  const countryCodeMap = {
    Andorra: "ad",
    Angola: "ao",
    Anguilla: "ai",
    Argentina: "ar",
    Armenia: "am",
    Aruba: "aw",
    Australia: "au",
    Austria: "at",
    Bahamas: "bs",
    Bahrain: "bh",
    Barbados: "bb",
    Belgium: "be",
    Belize: "bz",
    Bolivia: "bo",
    Brazil: "br",
    Brunei: "bn",
    Bulgaria: "bg",
    Canada: "ca",
    "Cayman Islands": "ky",
    Chile: "cl",
    China: "cn",
    Colombia: "co",
    "Costa Rica": "cr",
    Cyprus: "cy",
    "Czech Republic": "cz",
    Denmark: "dk",
    Djibouti: "dj",
    "Dominican Republic": "do",
    Dominica: "dm",
    Ecuador: "ec",
    Egypt: "eg",
    "El Salvador": "sv",
    England: "gb",
    Finland: "fi",
    France: "fr",
  };
  const getFlagUrl = (country) => {
    const code = countryCodeMap[country];
    return code ? `https://flagcdn.com/w40/${code}.png` : "/flags/default.png"; // fallback
  };

  // Group countries by alphabet
  const grouped = countries.reduce((acc, country) => {
    const letter = country[0].toUpperCase();
    acc[letter] = acc[letter] || [];
    acc[letter].push(country);
    return acc;
  }, {});

  // A–Z letters
  const alphabet = Array.from({ length: 6 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <div className="min-h-screen w-full bg-[#fffaf7]">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Blooming Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-16">
            <nav className="text-sm text-gray-200 mb-4">
              Home / International Flower Delivery
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              International Flower Delivery
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Celebrate every moment with Blooming-Cart’s handcrafted gift
              baskets.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Side Content */}
          <div>
            <h2 className="text-2xl md:text-5xl font-semibold text-gray-800 mb-4">
              International Flower Delivery
            </h2>
            <p className="text-gray-600 leading-relaxed">
              International flower and gift delivery is simple with
              1-800-Flowers.com®! Whether you send gift baskets to Europe, fresh
              flowers to Asia, or plants to South America, your overseas
              recipient will love your thoughtful gift.
            </p>
          </div>

          {/* Right Side List */}
          <div className="bg-green-600 text-white rounded-xl p-6">
            <ul className="space-y-4">
              <li>✓ Delivery to over 195 countries</li>
              <li>
                ✓ Same Day & Next-Day Delivery Available in Select Countries
              </li>
              <li>✓ Hassle-free Order & Delivery</li>
              <li>✓ Dedicated 24/7 Customer Service</li>
              <li>✓ 100% Smile Guarantee</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Assistance Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 border-t mt-12">
        <p className="text-gray-700 mb-6 text-2xl font-semibold">
          If you need assistance placing your international order, please{" "}
          <span className="text-green-600 font-medium cursor-pointer hover:underline">
            chat with us
          </span>
          !
        </p>

        <div className="flex flex-col gap-2">
          <span className="text-gray-700 mb-6 text-2xl font-semibold">
            Tips for Sending:
          </span>

          <span className="text-green-600 font-medium text-lg cursor-pointer hover:underline">
            Tips for Sending Internationally
          </span>

          <span className="text-green-600 font-medium text-lg cursor-pointer hover:underline">
            Gift Giving Do&apos;s and Don&apos;ts
          </span>

          <span className="text-green-600 font-medium text-lg cursor-pointer hover:underline">
            Fun Facts
          </span>

          <span className="text-green-600 font-medium text-lg cursor-pointer hover:underline">
            FAQ&apos;s
          </span>
        </div>
      </div>

      {/* Trending Products Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 border-t-2">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-5xl text-gray-800 mb-10 mx-auto uppercase tracking-wide font-semibold">
          Trending Products In Top Countries
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 my-4">
          {countryCards.map((item, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
            >
              {/* Top Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-36 object-cover"
              />

              {/* Bottom Content */}
              <div className="p-4 flex flex-col items-center gap-3">
                <p className="text-lg font-semibold tracking-widest text-gray-700 uppercase text-center">
                  {item.name}
                </p>

                <img
                  src={item.flag}
                  alt={`${item.name} Flag`}
                  className="w-10 h-6 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#d9caed] border-t border-b border-green-300 my-10">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
            On birthdays, anniversaries, to say hello, or for any reason at all,
            it&apos;s always a treat to open the door to beautiful flowers and
            gourmet gifts. At{" "}
            <span className="font-semibold">Blooming-Cart.com®</span>, we
            deliver flowers and gifts almost anywhere in the world through a
            number of international affiliates.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Heading */}
        <h2 className="text-center text-xl md:text-4xl font-semibold text-gray-800 mb-8 mx-auto">
          Shop By Delivery Country
        </h2>

        <ul className="flex flex-wrap gap-4 text-gray-700 justify-center my-5">
          {[
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "Z",
          ].map((letter) => (
            <li
              key={letter}
              className="underline cursor-pointer text-2xl hover:text-green-600 transition"
            >
              {letter}
            </li>
          ))}
        </ul>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl grid grid-cols-1 gap-6 mx-auto">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className="bg-white shadow-sm hover:shadow-md transition p-4"
          >
            {/* Card Header */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              {letter}
            </h2>

            {/* Country Grid */}
            {grouped[letter] ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {grouped[letter].map((country, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-3 hover:shadow transition cursor-pointer"
                  >
                    {/* Country Image */}
                    <img
                      src={getFlagUrl(country)}
                      alt={country}
                      className="w-10 h-6 object-cover mb-2"
                    />

                    {/* Country Name */}
                    <p className="text-sm font-medium text-gray-700 text-center">
                      {country}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 text-center">No countries</p>
            )}
          </div>
        ))}
      </div>

      {/* Help Text */}
      <p className="max-w-7xl text-sm text-gray-500 text-center my-5 mx-auto">
        If you need assistance placing your international order, please{" "}
        <span className="text-blue-600 cursor-pointer hover:underline">
          chat with us
        </span>
        !
      </p>
    </div>
  );
};

export default page;
