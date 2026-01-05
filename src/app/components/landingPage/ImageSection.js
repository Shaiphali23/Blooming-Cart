import Image from "next/image";

const ImageSection = ({ img }) => {
  return (
    <div className="w-[95%] mx-auto">
      <div className="mt-[50px]">
        <Image
          src={img}
          alt="image section"
          width={1400}
          height={300}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageSection;
