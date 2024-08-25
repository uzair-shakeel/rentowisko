import { Input, Button } from "@nextui-org/react";

const PersonalInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <img
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          alt="Profile"
          className="w-28 h-28 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold mb-6">Personal Info</h2>
        <div className="w-full">
          <label className="block text-gray-700">Your Name</label>
          <Input placeholder="Your name" className="mb-4" />
        </div>

        <div className="w-full">
          <label className="block text-gray-700">Address</label>
          <Input placeholder="Address" className="mb-4" />
        </div>

        <div className="w-full">
          <label className="block text-gray-700">Phone number</label>
          <Input placeholder="Phone number" className="mb-4" />
        </div>

        <a href="#" className="text-blue-500 text-sm mb-4 w-full">
          + Add Phone Number
        </a>

        <div className="w-full">
          <label className="block text-gray-700">Town / City</label>
          <Input placeholder="Town or city" className="mb-6 w-full" />
        </div>

        <div className="flex space-x-4  w-full">
          <Button shadow color="primary" className="w-full px-8">
            SAVE
          </Button>
          <Button
            flat
            color="primary"
            variant="bordered"
            className="w-full px-8"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
