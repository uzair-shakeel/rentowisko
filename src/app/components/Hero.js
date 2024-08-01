// pages/index.js
export default function Hero() {
  return (
    <div className="flex flex-col h-[500px] bg-[#F5F6FB]">
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
      <main className="relative flex-1 container mx-auto p-6">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 px-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-[55px] font-[700] leading-tight mb-4">
              Find, book, and rental car in{" "}
              <span className="text-blue-500">Easy</span> steps.
            </h1>
            <p className="text-[#B3B0B0] leading-[25px] mb-6 text-[16px] py-4 font-[500]">
              Revolutionize your car rental experience with the cutting-edge
              power of Artificial Intelligence at Rentowisko. We've seamlessly
              merged the convenience of modern technology with the freedom of
              the open road, putting you in the driver's seat of an
              extraordinary journey.
            </p>
          </div>
          <div></div>
        </div>
        {/* <div className=" flex justify-center">
          <div className="h-[400px] w-auto overflow-hidden">
            <img
              src="/Hero-img.png"
              alt="Car"
              className="absolute top-0 left-[400px]  w-full h-full object-cover"
            />
          </div>
        </div> */}
        <div className="mt-14 w-[90%] mx-auto rounded-3xl bg-white p-4 px-8  shadow">
          <div className="flex w-full">
            <div className="border-r border-[#E8E4E4] w-[25%]">
              <p className="text-[12px] font-[800] uppercase pb-2">Location</p>
              <input
                type="text"
                placeholder="Search your location.."
                className="border rounded border-none outline-none"
              />
            </div>
            <div className="border-r border-[#E8E4E4] w-[15%] px-5">
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
            <div className="border-r border-[#E8E4E4] w-[15%] px-5">
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
            <div className="border-r border-[#E8E4E4] w-[15%] px-5">
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
            <div className=" border-[#E8E4E4] w-[15%] px-5">
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

            <button className="bg-[#629FFD] text-white text-[16px] font-[700] p-2 rounded-lg w-[15%]">
              Search
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
