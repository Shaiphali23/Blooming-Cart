import { ReviewData } from "../../assets/Data";

const ReviewSection = () => {
  return (
    <div className="w-[90%] mx-auto mt-[70px]">
      {/* Heading */}
      <h2
        className="text-[36px] font-bold text-center mb-[30px]"
        style={{ fontFamily: "PlayfairDisplayBold" }}
      >
        Some of the Great Things Our Customers Say About Us
      </h2>

      {/* Reviews Grid */}
      <div className="mt-[110px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
        {ReviewData.map((el) => (
          <div
            key={el.des}
            className="h-[300px] bg-[#ffedfd] rounded-[20px] shadow-[0_5px_20px_2px_rgba(0,0,0,0.1)] flex flex-col items-center overflow-visible"
          >
            {/* Profile Image */}
            <div
              style={{ backgroundImage: `url(${el.img})` }}
              className="w-1/2 h-1/2 rounded-full -translate-y-1/2 bg-no-repeat bg-center bg-cover relative transition-all duration-300 group-hover:scale-100"
            ></div>

            {/* Card Info */}
            <div className="flex flex-col items-center justify-center gap-8 px-4">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                {el.rating}
              </p>

              <p className="text-[0.8em] text-center text-[#6f6d78] font-normal italic">
                {el.des}
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#200589]">
                {el.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
