import Image from "next/image";

// pages/index.js
export default function Hero() {
  return (
    <div className="flex flex-col   bg-[#F5F6FB]">
      {/* <header className="bg-white p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Rentowisko</div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-600">
              About
            </a>
            <a href="#" className="text-gray-600">
              Contact
            </a>
          </nav>
        </div>
      </header> */}
      <main className="">
        <div className="grid grid-cols-2 gap-2 md:py-10">
          <div className="flex flex-col justify-center pl-3.5 md:pl-[40px] xl:pl-[75px] -mt-3">
            <h1 className="text-base leading-[19.36px] sm:leading-[40px] lg:leading-[66px] sm:text-[40px] lg:text-[55px] font-bold mb-4 md:max-w-[480px] w-full">
              Find, book, and rental car in{" "}
              <span className="text-blue-500">Easy</span> steps.
            </h1>
            <p className="text-[#B3B0B0] leading-[25px] mb-6 max-w-[496px] w-full text-[12px] lg:text-[16px] py-4 font-medium md:block hidden">
              Revolutionize your car rental experience with the cutting-edge
              power of Artificial Intelligence at Rentowisko. We've seamlessly
              merged the convenience of modern technology with the freedom of
              the open road, putting you in the driver's seat of an
              extraordinary journey.
            </p>
          </div>
          <Image
            src="/car.svg"
            alt="Car"
            width={941}
            height={499}
            className="w-full"
          />
        </div>
        <p className="text-[#B3B0B0] leading-[15px] sm:leading-[25px] mb-6 px-[15px] mx-auto w-full text-[10px] sm:text-[16px] py-4 font-medium block md:hidden">
          Revolutionize your car rental experience with the cutting-edge power
          of Artificial Intelligence at Rentowisko. We've seamlessly merged the
          convenience of modern technology with the freedom of the open road,
          putting you in the driver's seat of an extraordinary journey.
        </p>

        <div className="w-full px-2">
          <div className="max-w-[1000px] w-full mx-auto rounded-3xl bg-white p-2.5 md:px-8 shadow">
            <div className="flex items-center justify-around sm:justify-between sm:gap-3">
              <div className="border-r h-full border-[#E8E4E4] flex items-start  flex-col gap-0.5 w-[60px] sm:w-full">
                <h3 className="text-[5px] sm:text-[12px] font-extrabold leading-[7px] md:leading-[18px] uppercase md:pb-0.5 text-[#060C17]">
                  Location
                </h3>
                <input
                  type="text"
                  placeholder="Search your location.."
                  className="border rounded border-none outline-none text-[5px] sm:text-sm text-[#5E5A5A] font-medium sm:leading-[21px] bg-transparent pr-1 leading-[7px] w-[60px] sm:w-[160px] md:w-[200px] "
                />
              </div>

              <div className="border-r border-[#E8E4E4] pr-1 flex items-start flex-col gap-0.5 sm:w-full">
                <h3 className="text-[5px] sm:text-[12px] p-0 m-0 font-extrabold leading-[7px] md:leading-[18px] text-[#060C17]">
                  Range in Km
                </h3>
                <select className="bg-transparent text-[5px] sm:text-sm text-[#5E5A5A] font-medium sm:leading-[21px] outline-none custom-select w-full">
                  <option>Select</option>
                  <option>0-10</option>
                  <option>10-20</option>
                  <option>20-50</option>
                </select>
              </div>

              <div className="border-r border-[#E8E4E4] pr-1 flex items-start flex-col gap-0.5 sm:w-full">
                <h3 className="text-[5px] sm:text-[12px] p-0 m-0 font-extrabold leading-[7px] md:leading-[18px] text-[#060C17]">
                  Type
                </h3>
                <select className="bg-transparent text-[5px] outline-none sm:text-sm text-[#5E5A5A] font-medium sm:leading-[21px] custom-select w-[20px] sm:w-full">
                  <option>Select</option>
                  <option>0-10</option>
                  <option>10-20</option>
                  <option>20-50</option>
                </select>
              </div>

              <div className="border-r border-[#E8E4E4] pr-1 flex items-start flex-col gap-0.5 sm:w-full">
                <h3 className="text-[5px] sm:text-[12px] p-0 m-0 font-extrabold leading-[7px] md:leading-[18px] text-[#060C17]">
                  Make
                </h3>
                <select className="bg-transparent text-[5px] outline-none  sm:text-sm text-[#5E5A5A] font-medium sm:leading-[21px] custom-select w-[40px] sm:w-full">
                  <option>Select</option>
                  <option>0-10</option>
                  <option>10-20</option>
                  <option>20-50</option>
                </select>
              </div>

              <div className="flex items-start flex-col gap-0.5 sm:w-full">
                <h3 className="text-[5px] sm:text-[12px] p-0 m-0 font-extrabold leading-[7px] md:leading-[18px] text-[#060C17]">
                  Model
                </h3>
                <select className="bg-transparent text-[5px] outline-none sm:text-sm text-[#5E5A5A] font-medium sm:leading-[21px] custom-select w-[60px] sm:w-full">
                  <option>Select</option>
                  <option>0-10</option>
                  <option>10-20</option>
                  <option>20-50</option>
                </select>
              </div>
              <button className="bg-[#629FFD] ml-6 w-[50px] sm:px-20 flex items-center justify-center sm:h-[52px] h-[19px] rounded sm:rounded-[10px] text-white text-[7px] sm:text-base leading-[10.67px] font-bold">
                Search
              </button>
            </div>

            {/* <div className="flex w-full">
              <div className="border-r border-[#E8E4E4] ">
                <p className="text-[12px] font-[800] leading-[18px] uppercase pb-2">Location</p>
                <input
                  type="text"
                  placeholder="Search your location.."
                  className="border rounded border-none outline-none"
                />
              </div>
              <div className="border-r border-[#E8E4E4]  px-5">
                <p className="text-[12px] font-[800] uppercase pb-2">
                  Range in Km
                </p>
                <select className="">
                  <option>Select</option>
                  <option>0-10</option>
                  <option>10-20</option>
                  <option>20-50</option>
                </select>
              </div>
              <div className="border-r border-[#E8E4E4]   px-5">
                <p className="text-[12px] font-[800] uppercase pb-2">
                  Range in Km
                </p>
                <select className="">
                  <option>Type</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Hatchback</option>
                </select>
              </div>
              <div className="border-r border-[#E8E4E4]   px-5">
                <p className="text-[12px] font-[800] uppercase pb-2">
                  Range in Km
                </p>
                <select>
                  <option>Make</option>
                  <option>BMW</option>
                  <option>Mercedes</option>
                  <option>Toyota</option>
                </select>
              </div>
              <div className=" border-[#E8E4E4]  px-5">
                <p className="text-[12px] font-[800] uppercase pb-2">
                  Range in Km
                </p>
                <select>
                  <option>Model</option>
                  <option>Model 1</option>
                  <option>Model 2</option>
                  <option>Model 3</option>
                </select>
              </div>

              <button className="bg-[#629FFD] text-white text-[16px] font-[700] p-2 rounded-lg ">
                Search
              </button>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
