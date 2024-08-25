const TopRentedCars = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
      <h2 className="text-xl font-semibold mb-6">Top Rented Cars</h2>
      <div className="flex">
        <div className="flex w-1/2 justify-center mb-6">
          {/* Circular Chart Placeholder */}
          <div className="w-40 h-40 relative">
            <img src="/Chart.png" />
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-8 border-blue-300 border-t-blue-500"></div>
            </div> */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-semibold">112</span>
            </div>
          </div>
        </div>
        <ul className="w-1/2">
          <li className="flex justify-between text-[#90A3BF] mb-2">
            Nissan GT-R <span className="text-black font-[600]">55</span>
          </li>
          <li className="flex justify-between text-[#90A3BF] mb-2">
            Koenigsegg <span className="text-black font-[600]">29</span>
          </li>
          <li className="flex justify-between text-[#90A3BF] mb-2">
            Rolls-Royce <span className="text-black font-[600]">18</span>
          </li>
          <li className="flex justify-between text-[#90A3BF] mb-2">
            CR-V <span className="text-black font-[600]">12</span>
          </li>
          <li className="flex justify-between text-[#90A3BF]">
            CR-V2 <span className="text-black font-[600]">8</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopRentedCars;
