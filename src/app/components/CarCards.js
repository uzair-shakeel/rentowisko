import Link from "next/link";

// components/CarCard.jsx
const CarCard = ({ car, index }) => {
  return (
    // <div className="border rounded-lg p-4 shadow-md bg-white">
    //   <div className="h-40 w-full overflow-hidden">
    //     <img
    //       src={car.image}
    //       alt={car.name}
    //       className="w-full h-full object-contain mb-4"
    //     />
    //   </div>

    //   <h3 className="text-xl font-semibold">{car.name}</h3>
    //   <div className="flex space-x-2 mt-2">
    //     <span className="text-sm bg-blue-100 text-blue-600 py-1 px-2 rounded-full">
    //       {car.category}
    //     </span>
    //     {car.tags.map((tag) => (
    //       <span
    //         key={tag}
    //         className="text-sm bg-blue-100 text-blue-600 py-1 px-2 rounded-full"
    //       >
    //         {tag}
    //       </span>
    //     ))}
    //   </div>
    //   <div className="flex items-center justify-between mt-4">
    //     <div>
    //       <p className="text-lg font-bold text-gray-900">
    //         ${car.price}{" "}
    //         <span className="text-sm font-medium text-gray-500">/ day</span>
    //       </p>
    //     </div>
    //     <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
    //       Rent Now
    //     </button>
    //   </div>
    // </div>
    <div key={index} className="border p-4 rounded-lg shadow-lg">
      <h3 className="text-[20px] lg:text-[23px] leading-[30px] font-bold mb-2">
        {car.model}
      </h3>
      <p className="text-gray-600 text-[14px] lg:text-[16px] font-[700] leading-[21px]">
        {car.carType}
      </p>
      <div className="flex py-3 space-x-2 mb-2">
        {car?.tags?.map((tag, idx) => (
          <span
            key={idx}
            className=" text-[#629FFD] cursor-pointer border-2 border-[#629FFD] text-[10px] lg:text-[12px] font-[700] leading-[15px] mr-2 px-2.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="h-40 w-full relative">
        <img
          src={"/car-img1.png"}
          alt={car.name}
          className="w-full h-auto max-h-24  object-cover mb-4"
        />
        {/* <span className="absolute h-full w-full gradient bottom-0"></span> */}
      </div>
      <div className="flex flex-col justify-between h-24">
        <div className="text-gray-700 mb-2 flex justify-between">
          <span className="flex gap-2">
            <img src="/icons/gas-station.svg" /> {car?.gasType || "90L"}
          </span>
          <span className="flex gap-2">
            <img src="/icons/Car.svg" /> {car?.horsepower || "manual"}
          </span>
          <span className="flex gap-2">
            <img src="/icons/profile-2user.svg" /> {car?.seats || "2 seats"}
          </span>
        </div>
        <div className=" flex justify-between items-end">
          <div>
            <p className="text-xl font-bold text-black ">
              ${car.price1}{" "}
              <span className="text-[14px] text-[#90A3BF]">/ day</span>
            </p>
            {car.price2 && (
              <p className="line-through text-[14px] text-[#90A3BF] font-[700]">
                {car.price2}
              </p>
            )}
          </div>

          <Link
            href={"/cars/cardetails"}
            className="bg-[#629FFD] text-white px-4 py-2 rounded"
          >
            Rent Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
