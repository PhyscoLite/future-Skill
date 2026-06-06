import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Courses from './components/Courses';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import EnrollmentModal from './components/EnrollmentModal';
import GlareHover from './components/GlareHover';
import SplashCursor from './components/SplashCursor';

export default function App() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const [enrollmentDetails, setEnrollmentDetails] = useState({ planName: 'Future Skill India Career Development Program', price: 399, priceText: '₹399' });

  const openEnrollment = (planName = 'Future Skill India Career Development Program', price = 399, priceText = '₹399') => {
    setEnrollmentDetails({ planName, price, priceText });
    setIsEnrollmentOpen(true);
  };
  const closeEnrollment = () => setIsEnrollmentOpen(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <SplashCursor COLOR="#f97316" RAINBOW_MODE={false} />
      <Header onEnroll={() => openEnrollment()} />
      <main className="flex-grow">
        <Hero onEnroll={() => openEnrollment()} />
        <StatsBar />
        <Courses onEnroll={(name, price, priceText) => openEnrollment(name, price, priceText)} />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a href="#" className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-target overflow-hidden block">
        <GlareHover className="w-full h-full flex items-center justify-center" glareSize={80}>
          <MessageCircle size={28} />
        </GlareHover>
      </a>

      <EnrollmentModal isOpen={isEnrollmentOpen} onClose={closeEnrollment} planDetails={enrollmentDetails} />
    </div>
  );
}
