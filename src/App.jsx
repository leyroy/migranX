import { useRef, useState } from "react";
import Footer from "./components/Footer";
import FrequentAskQ from "./components/FrequentAskQ";
import Home from "./components/Home";
import Market from "./components/Market";
import Modal from "./components/Modal";
import OurApps from "./components/OurApps";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };
  const sectionRef = useRef(null);
  return (
    <div  className="relative">
      {isModalOpen && <Modal openModal={openModal} />}
      <div  className="overflow-x-hidden w-screen">
        <Home sectionRef={sectionRef} />
        <div ref={sectionRef}>
        <Market />
        <OurApps />
      <FrequentAskQ />
      <Footer />
        </div>
       
      </div>
    </div>
  );
}

export default App;
