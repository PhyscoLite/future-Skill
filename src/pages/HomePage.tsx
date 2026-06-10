import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Courses from '../components/Courses';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';

interface HomePageProps {
  onEnroll: (name?: string, price?: number, priceText?: string) => void;
}

export default function HomePage({ onEnroll }: HomePageProps) {
  return (
    <div className="flex-grow">
      <Hero onEnroll={() => onEnroll()} />
      <StatsBar />
      <Courses onEnroll={(name, price, priceText) => onEnroll(name, price, priceText)} />
      <AboutUs />
      <ContactUs />
    </div>
  );
}
