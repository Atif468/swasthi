import Navbar from "./Components/Navbar";
import HealthJourney from "./Components/1";
import FeaturesSection from "./Components/2";
import Footer from "./Components/Footer";
import Download from "./Components/4";
import DetailedProgress from "./Components/3";
import HowitWorks from "./Components/HowitWorks";
import PricingTitle from "./Components/PricingTitle";
import Pricing from "./Components/Prices";

function App() {
   
  return (
    <>
      <Navbar />
      <HealthJourney />
      <FeaturesSection />
      <DetailedProgress />
      <HowitWorks />
      <PricingTitle />
      <Pricing />
      <Download />
      <Footer />
     </>
  );
}

export default App;
