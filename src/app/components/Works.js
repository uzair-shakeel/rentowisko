// components/Works.js
export default function Works() {
  return (
    <div className=" py-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-between p-[8%] mb-8">
          <img
            src="/img-1.png"
            alt="Classic Cars"
            className="h-[25px] md:h-12"
          />
          <img
            src="/img-2.png"
            alt="Luxury Cars"
            className="h-[25px] md:h-12"
          />
          <img
            src="/img-3.png"
            alt="Best Wheels"
            className="h-[25px] md:h-12"
          />
          <img
            src="/img-4.png"
            alt="Sports Cars"
            className="h-[25px] md:h-12"
          />
        </div>
        <h2 className="text-[15px] md:text-[16px] font-[700] text-[#8F8C8C] mb-2">
          HOW IT WORK
        </h2>
        <h1 className="text-[24px] md:text-[28px] font-[700] w-[65%] leading-[27px] md:leading-[33px] mx-auto mb-8">
          Rent with following 3 working steps
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center py-8 space-y-6 md:space-y-0 md:space-x-10">
          <div className="flex md:flex-col items-center mx-4 md:mx-0">
            <div className="order-2 md:order-1 w-1/3 md:w-full flex items-center justify-center">
              <div className="bg-white  shadow-md  p-4 flex items-center justify-center rounded-2xl h-[55px] md:h-[100px] w-[55px] md:w-[100px] mb-3">
                <img
                  src="/Vector.svg"
                  alt="Location"
                  className="h-[25px] md:h-[50px] w-auto"
                />
              </div>
            </div>
            <h3 className=" text-[14px] text-end md:text-center order-1 w-1/3 md:w-full md:order-2 md:text-[18px] font-[700] leading-[28px] py-2 md:py-5">
              Choose location
            </h3>
            <p className="text-[#6B6868] text-start md:text-center order-3 w-1/3 md:w-[60%] text-[14px] md:text-[14px] font-[700] leading-[21px] mx-auto">
              Choose your location and find your best car
            </p>
          </div>
          <div className="flex md:flex-col  items-center mx-4 md:mx-0">
            <div className="order-2 md:order-1 w-1/3 md:w-full flex items-center justify-center">
              <div className="bg-[#629FFD] shadow-[#629FFD] shadow-md  p-4 flex items-center justify-center rounded-2xl h-[55px] md:h-[100px] w-[55px] md:w-[100px] mb-3">
                <img
                  src="/Notepad.svg"
                  alt="Location"
                  className="h-[25px] md:h-[50px] w-auto"
                />
              </div>
            </div>
            <h3 className=" text-[14px] text-end md:text-center order-1 w-1/3 md:w-full md:order-2 md:text-[18px] font-[700] leading-[21px] py-2 md:py-5">
              Customize you Plan
            </h3>
            <p className="text-[#6B6868] text-start md:text-center order-3 w-1/3 md:w-[60%] text-[14px] md:text-[14px] font-[700] leading-[21px] mx-auto">
              Customize your Search and select what you want
            </p>
          </div>
          <div className="flex md:flex-col items-center mx-4 md:mx-0">
            <div className="order-2 md:order-1 w-1/3 md:w-full flex items-center justify-center">
              <div className="bg-white  shadow-md  p-4 flex items-center justify-center rounded-2xl h-[55px] md:h-[100px] w-[55px] md:w-[100px] mb-3">
                <img
                  src="/Car (1).svg"
                  alt="Location"
                  className="h-[25px] md:h-[50px] w-auto"
                />
              </div>
            </div>
            <h3 className=" text-[14px] text-end md:text-center order-1 w-1/3 md:w-full md:order-2 md:text-[18px] font-[700] leading-[28px] py-2 md:py-5">
              Book your car
            </h3>
            <p className="text-[#6B6868] text-start md:text-center order-3 w-1/3 md:w-[60%] text-[14px] md:text-[14px] font-[700] leading-[21px] mx-auto">
              Book your car and we well deliver a directly to you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
