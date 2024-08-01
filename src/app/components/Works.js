// components/Works.js
export default function Works() {
  return (
    <div className=" py-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-between p-[8%] mb-8">
          <img src="/img-1.png" alt="Classic Cars" className="h-12" />
          <img src="/img-2.png" alt="Luxury Cars" className="h-12" />
          <img src="/img-3.png" alt="Best Wheels" className="h-12" />
          <img src="/img-4.png" alt="Sports Cars" className="h-12" />
        </div>
        <h2 className="text-[16px] font-[700] text-[#8F8C8C] mb-2">
          HOW IT WORK
        </h2>
        <h1 className="text-[28px] font-[700] mb-8">
          Rent with following 3 working steps
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center py-8 space-y-6 md:space-y-0 md:space-x-10">
          <div className="flex flex-col items-center">
            <div className="bg-white shadow-md  p-4 flex items-center justify-center rounded-2xl h-[100px] w-[100px] mb-3">
              <img
                src="/Vector.svg"
                alt="Location"
                className="h-[50px] w-auto"
              />
            </div>
            <h3 className="text-[18px] font-[700] leading-[28px] py-5">
              Choose location
            </h3>
            <p className="text-[#6B6868] text-[14px] font-[700] leading-[21px] w-[60%] mx-auto">
              Choose your location and find your best car
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#629FFD] shadow-md  p-4 flex items-center justify-center rounded-2xl h-[100px] w-[100px] mb-3">
              <img
                src="/Notepad.svg"
                alt="Location"
                className="h-[50px] w-auto text-[#E9F5FE]"
              />
            </div>
            <h3 className="text-[18px] font-[700] leading-[28px] py-5">
              Customize you Plan{" "}
            </h3>
            <p className="text-[#6B6868] text-[14px] font-[700] leading-[21px] w-[60%] mx-auto">
              Customize your Search and select what you want{" "}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white shadow-md  p-4 flex items-center justify-center rounded-2xl h-[100px] w-[100px] mb-3">
              <img
                src="/Car (1).svg"
                alt="Location"
                className="h-[50px] w-auto text-[#E9F5FE]"
              />
            </div>
            <h3 className="text-[18px] font-[700] leading-[28px] py-5">
              Book your car{" "}
            </h3>
            <p className="text-[#6B6868] text-[14px] font-[700] leading-[21px] w-[60%] mx-auto">
              Book your car and we well deliver a directly to you{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
