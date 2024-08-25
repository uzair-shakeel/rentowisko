import PersonalInfo from "../components/profile/PersonalInfo";
import TopRentedCars from "../components/profile/TopRentedCars";
import MyCars from "../components/profile/MyCars";
import Layout from "../components/SidebarLayout";
import CompanyInfoForm from "../components/profile/CompanyInfoForm";

export default function ProfilePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <PersonalInfo />
          <div className="space-y-6">
            <TopRentedCars />
            <MyCars />
          </div>
        </div>
        <div className="w-full max-w-7xl">
          <CompanyInfoForm />
        </div>
      </div>
    </Layout>
  );
}
