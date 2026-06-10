import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import EnrollmentModal from './components/EnrollmentModal';
import GlareHover from './components/GlareHover';
import SplashCursor from './components/SplashCursor';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

export default function App() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const [enrollmentDetails, setEnrollmentDetails] = useState({ planName: 'Future Skill India Career Development Program', price: 399, priceText: '₹399' });

  const openEnrollment = (planName = 'Future Skill India Career Development Program', price = 399, priceText = '₹399') => {
    setEnrollmentDetails({ planName, price, priceText });
    setIsEnrollmentOpen(true);
  };
  const closeEnrollment = () => setIsEnrollmentOpen(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
        <SplashCursor COLOR="#f97316" RAINBOW_MODE={false} />
        <Header onEnroll={() => openEnrollment()} />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage onEnroll={openEnrollment} />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Govind Printer's Label */}
        <div className="fixed top-[70%] right-0 z-40 transform -translate-y-1/2 bg-red-600 text-white px-2 py-3 rounded-l-md shadow-lg text-xs font-semibold tracking-wider flex items-center justify-center [writing-mode:vertical-rl] rotate-180 cursor-default border-y border-l border-red-700">
          Govind Printer's
        </div>

        {/* Floating WhatsApp Button */}
        <a href="#" className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-target overflow-hidden block">
          <GlareHover className="w-full h-full flex items-center justify-center" glareSize={80}>
            <MessageCircle size={28} />
          </GlareHover>
        </a>

        <EnrollmentModal isOpen={isEnrollmentOpen} onClose={closeEnrollment} planDetails={enrollmentDetails} />
      </div>
    </BrowserRouter>
  );
}
