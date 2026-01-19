"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const CardSection = ({ details, title }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/products?sub_category_id=${id}&data_from=category&page=1`);
  };

  return (
    <div className="mt-[70px]">
      {/* Heading */}
      <h2
        className="text-[36px] font-bold text-center mb-[30px]"
        style={{ fontFamily: "PlayfairDisplayBold" }}
      >
        {title}
      </h2>

      {/* Cards */}
      <div className="w-[95%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center justify-center">
        {details &&
          details.map((el) => (
            <div
              key={el.img}
              onClick={() => handleClick(el.id)}
              className="cursor-pointer text-center"
            >
              <Image
                src={el.img}
                alt={el.name}
                width={150}
                height={150}
                className="inline-block rounded-full pb-[10px] transition-transform duration-200 hover:scale-110"
              />

              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                {el.name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardSection;
