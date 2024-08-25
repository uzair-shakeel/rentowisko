// components/CompanyInfoForm.jsx

import { Input, Button } from "@nextui-org/react";

const CompanyInfoForm = () => {
  return (
    <div className="bg-white shadow-md w-full rounded-lg p-8  mx-auto">
      <h2 className="text-xl font-semibold mb-6">Company Info</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="w-full">
          <label className="block text-gray-700">Your Name</label>
          <Input placeholder="Your name" className="mb-4" />
        </div>

        <div className="w-full">
          <label className="block text-gray-700">Address</label>
          <Input placeholder="Your address" className="mb-4" />
        </div>

        <div className="w-full">
          <label className="block text-gray-700">Phone Number</label>
          <Input placeholder="Your phone number" className="mb-4" />
        </div>

        <div className="w-full">
          <label className="block text-gray-700">NIP Number</label>
          <Input placeholder="Your NIP number" className="mb-4" />
        </div>

        <div className="w-full">
          <label className="block text-gray-700">Email</label>
          <Input placeholder="Your email" className="mb-4" />
        </div>

        <div>
          <div className="w-full">
            <label className="block text-gray-700">Social Links</label>
            <Input placeholder="Your social links" className="mb-4" />
          </div>
          <a href="#" className="text-blue-500 text-sm mt-2 inline-block">
            + Add More Links
          </a>
        </div>
      </div>
      <div className="flex mt-8">
        <Button className="bg-blue-500 text-white px-8 mr-4">Save</Button>
        <Button
          flat
          variant="bordered"
          className="border-blue-500 text-blue-500  px-8 mr-4"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default CompanyInfoForm;
