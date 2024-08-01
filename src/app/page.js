import Choose from "./components/Choose";
import Deal from "./components/Deal";
import Hero from "./components/Hero";
import Review from "./components/reviews";
import Sidebar from "./components/Sidebar";
import Works from "./components/Works";

// pages/index.js
export default function Home() {
  return (
    <div>
      {/* <Sidebar /> */}
      <Hero />
      <Works />
      <Choose />
      <Deal />
      <Review />
    </div>
  );
}
