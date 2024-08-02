import Choose from "./components/Choose";
import Deal from "./components/Deal";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Review from "./components/reviews";
import Sidebar from "./components/Sidebar";
import Layout from "./components/SidebarLayout";
import Works from "./components/Works";

// pages/index.js
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Works />
      <Choose />
      <Deal />
      <Review />
      <FAQ />
    </Layout>
  );
}
