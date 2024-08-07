// components/Choose.js
export default function Choose() {
  return (
    <div className=" bg-white py-5 lg:py-12">
      <div className="container px-[5%] max-w-[1270px] mx-auto lg:px-[2%] flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-12">
        <div className="hidden md:block md:w-[40%] lg:w-[55%]">
          <img src="/Choose-img.png" alt="Main Car" className="max-w-full" />
          {/* <div className="flex space-x-4 mt-4">
            <div className="border p-2 rounded">
              <img
                src="/car-1.png"
                alt="Car 1"
                className="h-20 w-32 object-cover"
              />
              <div className="text-sm text-gray-600 mt-1">
                Ford Mustang - Elite Estate
                <div className="flex items-center justify-between mt-1">
                  <span className="text-yellow-500">4.5 ⭐</span>
                  <span className="text-blue-500">$320/day</span>
                </div>
              </div>
            </div>
            <div className="border p-2 rounded">
              <img
                src="/car-2.png"
                alt="Car 2"
                className="h-20 w-32 object-cover"
              />
              <div className="text-sm text-gray-600 mt-1">
                BMW M2 - Sports Coupe
                <div className="flex items-center justify-between mt-1">
                  <span className="text-yellow-500">4.7 ⭐</span>
                  <span className="text-blue-500">$420/day</span>
                </div>
              </div>
            </div>
            <div className="border p-2 rounded">
              <img
                src="/car-3.png"
                alt="Car 3"
                className="h-20 w-32 object-cover"
              />
              <div className="text-sm text-gray-600 mt-1">
                Audi A6 - Business Sedan
                <div className="flex items-center justify-between mt-1">
                  <span className="text-yellow-500">4.6 ⭐</span>
                  <span className="text-blue-500">$380/day</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className=" md:w-[40%]">
          <h2 className="text-[15px]  md:text-[16px] lg:text-[18px] font-[700] leading-[25px] mb-2">
            WHY CHOOSE US
          </h2>
          <h1 className="text-[24px] md:text-[24px] lg:text-[28px] font-[700] leading-[28px] md:leading-[36px] mb-14 md:mb-6">
            We offer the best experience with our rental deals
          </h1>
          <div className=" space-y-8">
            <div className="flex items-start">
              <div className="bg-white p-1 flex items-center justify-center h-[40px] w-[40px] shadow-md rounded-lg mr-4">
                <img
                  src="/icons/Cash.svg"
                  alt="Best Price"
                  className="w-auto "
                />
              </div>
              <div className="w-[80%]">
                <h3 className="text-[16px]  lg:text-[18px] font-[600] mb-1 leading-[21px]">
                  Best price guaranteed
                </h3>
                <p className="text-[#6B6868] text-[14px] leading-[17px] lg:text-[16px] lg:leading-[20px]">
                  Find a lower price? we'll refund you 100% of the difference
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white p-1 flex items-center justify-center h-[40px] w-[40px] shadow-md rounded-lg mr-4">
                <img src="/icons/AI.svg" alt="Best Price" className="w-auto " />
              </div>
              <div className="w-[80%]">
                <h3 className="text-[16px] mb-1 font-[600] lg:text-[18px] leading-[21px]">
                  Power of AI
                </h3>
                <p className="text-[#6B6868] text-[14px] leading-[17px] lg:text-[16px] lg:leading-[20px]">
                  Revolutionize your car rental experience with the cutting-edge
                  power of Artificial Intelligence
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white p-1 flex items-center justify-center h-[40px] w-[40px] shadow-md rounded-lg mr-4">
                <img
                  src="/icons/Clock.svg"
                  alt="Best Price"
                  className="w-auto "
                />
              </div>
              <div className="w-[80%]">
                <h3 className="text-[16px] mb-1 font-[600] lg:text-[18px] leading-[21px]">
                  24-hour car delivery
                </h3>
                <p className="text-[#6B6868] text-[14px] leading-[17px] lg:text-[16px] lg:leading-[20px]">
                  Book your car anytime and we will deliver it directly to you
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white p-1 flex items-center justify-center h-[40px] w-[40px] shadow-md rounded-lg mr-4">
                <img
                  src="/icons/Support.svg"
                  alt="Best Price"
                  className="w-auto "
                />
              </div>
              <div className="w-[80%]">
                <h3 className="text-[16px] mb-1 font-[600] lg:text-[18px] leading-[21px]">
                  24/7 technical support
                </h3>
                <p className="text-[#6B6868] text-[14px] leading-[17px] lg:text-[16px] lg:leading-[20px]">
                  Have you questions? Contact Carental support anytime when you
                  have a problem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
