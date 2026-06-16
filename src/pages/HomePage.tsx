import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Courses from '../components/Courses';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Seo from '../components/Seo';

interface HomePageProps {
  onEnroll: (name?: string, price?: number, priceText?: string) => void;
}

export default function HomePage({ onEnroll }: HomePageProps) {
  return (
    <div className="flex-grow">
      <Seo
        title="Home"
        path="/"
        description="Future Skill offers affordable career development and skill training — spoken English, MS Office, Tally, web development, AI fundamentals and more. Enroll today and build your future."
      />
      <Hero onEnroll={() => onEnroll()} />
      <StatsBar />
      <Courses onEnroll={(name, price, priceText) => onEnroll(name, price, priceText)} />
      <AboutUs />
      <ContactUs />
    </div>
  );
}
