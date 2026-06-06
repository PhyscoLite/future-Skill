import React from 'react';
import { CheckCircle } from 'lucide-react';
import GlareHover from './GlareHover';
import BlurText from './BlurText';

interface CoursesProps {
  onEnroll?: (planName: string, price: number, priceText: string) => void;
}

const additionalSupportData = [
  { title: 'Advocate Support and Legal Awareness', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400&h=225', description: 'Get legal advice and understand your rights with our expert advocates.' },
  { title: 'Medical Support', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400&h=225', description: 'Access essential medical guidance, consultations, and health support.' },
  { title: 'Agriculture and Crop Medicine Guidance', image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=400&h=225', description: 'Expert advice on modern agriculture practices and crop medicines.' },
  { title: 'Government Scheme Awareness', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400&h=225', description: 'Stay updated and informed about various beneficial government schemes.' },
  { title: 'Latest Government, Local and MNC Job Alerts', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400&h=225', description: 'Receive timely notifications for job openings across multiple sectors.' },
  { title: 'Motivational Session', image: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&q=80&w=400&h=225', description: 'Attend inspiring sessions to boost your morale and career drive.' },
  { title: 'Placement/ Employment', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400&h=225', description: 'Dedicated placement assistance to help you secure the ideal job.' },
];

const coursesData = [
  { title: 'Spoken English', image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=400&h=225', description: 'Enhance your communication skills with practical English speaking sessions.' },
  { title: 'MS Office', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=400&h=225', description: 'Master Word, Excel, and PowerPoint for professional productivity.' },
  { title: 'Tally', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400&h=225', description: 'Learn industry-standard accounting and bookkeeping with Tally.' },
  { title: 'Share Market Trading', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400&h=225', description: 'Understand stock markets, investing, and trading strategies.' },
  { title: 'CV/Resume Building', image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=400&h=225', description: 'Craft compelling resumes that stand out to recruiters.' },
  { title: 'Interview Preparation', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=225', description: 'Mock interviews, tips, and strategies to ace your next job interview.' },
  { title: 'Career Guidance and Counselling', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400&h=225', description: 'Find your true calling and plan your career path with experts.' },
  { title: 'Devotional Teaching', image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&q=80&w=400&h=225', description: 'Explore spiritual texts, meditation, and devotional practices.' },
  { title: 'Beautician Classes', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400&h=225', description: 'Professional makeup, skin care, and salon management skills.' },
  { title: 'Digital Literacy', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400&h=225', description: 'Essential internet, email, and online safety skills for everyone.' },
  { title: 'Yoga and Wellness', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400&h=225', description: 'Physical and mental well-being through yoga asanas and breathwork.' },
  { title: 'Business Setup Guide', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=400&h=225', description: 'Step-by-step guidance on starting and managing a small business.' },
  { title: 'Computer Basic', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400&h=225', description: 'Fundamental computer operations and hardware understanding.' },
  { title: 'Personality development and public speaking', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=400&h=225', description: 'Build confidence and learn to communicate effectively in public.' },
  { title: 'AI fundamentals', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400&h=225', description: 'Introduction to artificial intelligence, tools, and basic applications.' },
];

const upcomingCoursesData = [
  { title: 'Web designing', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=225', description: 'Learn to design and build stunning, responsive websites.' },
  { title: 'Graphic designing', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400&h=225', description: 'Create visual content to communicate messages effectively.' },
  { title: 'Data entry', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=225', description: 'Develop fast and accurate data transcription skills.' },
  { title: 'Singing', image: 'https://images.unsplash.com/photo-1516280440502-601726a4dbec?auto=format&fit=crop&q=80&w=400&h=225', description: 'Vocal training and techniques for aspiring singers.' },
  { title: 'Dancing', image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=400&h=225', description: 'Express yourself through various dance forms and choreography.' },
  { title: 'Food Processing and Preservation', image: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=400&h=225', description: 'Learn techniques to process, package, and preserve food safely.' },
  { title: 'Digital Marketing', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=225', description: 'Master SEO, social media, and online advertising.' },
  { title: 'Basic electrical work and wiring', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=400&h=225', description: 'Practical training on household wiring and electrical safety.' },
  { title: 'Mobile repairing and servicing', image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=400&h=225', description: 'Diagnose and fix hardware and software issues in mobile phones.' },
  { title: 'Financial literacy and banking', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400&h=225', description: 'Understand banking systems, savings, and financial planning.' },
  { title: 'E-commerce and online selling', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400&h=225', description: 'Start and grow your own online retail business.' },
  { title: 'Tailoring and Fashion designing', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=400&h=225', description: 'Garment construction, pattern making, and fashion design basics.' },
  { title: 'Classes for class 5th to 12th', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400&h=225', description: 'Comprehensive subject coaching for school students.' },
  { title: 'Classes for Graduate in different stream', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400&h=225', description: 'Specialized tutorials and guidance for college graduates.' },
  { title: 'Diploma classes', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400&h=225', description: 'Skill-focused learning for various technical and non-technical diplomas.' },
];

const premiumCoursesData = [
  {
    title: 'Website Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=450',
    description: 'Dive deep into the world of web development. Learn to build responsive, dynamic, and user-friendly websites from scratch using modern technologies and industry best practices.',
    features: ['HTML, CSS & JavaScript fundamentals', 'Modern frameworks (React & Tailwind)', 'Responsive design principles', 'Real-world project building'],
    price: '₹500'
  },
  {
    title: 'Dancing Masterclass',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=800&h=450',
    description: 'Express yourself through the rhythm of music. Join our intensive dancing course to master various dance styles, improve your flexibility, and perform with confidence on stage.',
    features: ['Hip-Hop & Contemporary styles', 'Flexibility & Rhythm training', 'Stage performance skills', 'Choreography fundamentals'],
    price: '₹500'
  }
];

export default function Courses({ onEnroll }: CoursesProps) {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 flex flex-col items-center">
          <BlurText as="h2" text="Basic Plan" delay={100} className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4" />
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full relative mb-8">
            <div className="absolute w-3 h-3 bg-white border-2 border-orange-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-3xl p-6 md:p-10 bg-white shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 [perspective:1000px]">
            {coursesData.map((course, index) => (
              <div key={index} className="relative group cursor-target h-full" tabIndex={0} onClick={() => {}}>
                <div className="w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="relative w-full h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col [backface-visibility:hidden]">
                    <div className="relative w-full pb-[56.25%] overflow-hidden bg-gray-200">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow items-center text-center justify-between">
                      <h3 className="font-bold text-gray-800 text-sm md:text-base mb-4 leading-tight">{course.title}</h3>
                      <button className="w-full border-2 border-orange-500 text-orange-500 rounded-lg py-2 font-semibold text-xs md:text-sm transition-colors cursor-target focus:outline-none bg-transparent">
                        View Detail
                      </button>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 w-full h-full bg-orange-50 border border-orange-200 rounded-xl overflow-y-auto flex flex-col items-center justify-center p-3 md:p-6 text-center shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h3 className="font-bold text-orange-800 text-sm md:text-base mb-1 md:mb-2 leading-tight flex-shrink-0">{course.title}</h3>
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed max-w-full md:max-w-[90%] flex-grow flex items-center">
                      {course.description}
                    </p>
                    <button onClick={() => onEnroll?.('Future Skill India Career Development Program', 399, '₹399')} className="mt-3 md:mt-4 border-2 border-orange-500 bg-orange-500 text-white hover:bg-orange-600 transition-colors rounded-lg py-2 px-3 md:px-4 w-full font-semibold text-xs md:text-sm cursor-target focus:outline-none flex-shrink-0">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-gray-100 text-center max-w-3xl mx-auto flex flex-col items-center">
            <BlurText 
              as="p"
              text="Gain full access to all 15 comprehensive lifestyle and skill development courses. Transform your future today."
              delay={200}
              className="text-gray-700 text-lg md:text-xl font-medium mb-8 leading-relaxed"
            />
            <button onClick={() => onEnroll?.('Future Skill India Career Development Program', 399, '₹399')} className="block w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-colors cursor-target overflow-hidden shadow-lg shadow-orange-200">
              <GlareHover className="px-12 py-4 flex items-center justify-center w-full h-full" glareSize={250}>
                Get All Access for ₹399
              </GlareHover>
            </button>
          </div>
        </div>

        <div className="text-center mt-20 mb-12 flex flex-col items-center">
          <BlurText as="h2" text="Additional Support" delay={100} className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4" />
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full relative mb-8">
            <div className="absolute w-3 h-3 bg-white border-2 border-orange-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-3xl p-6 md:p-10 bg-white shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 [perspective:1000px]">
            {additionalSupportData.map((course, index) => (
              <div key={index} className="relative group cursor-target h-full" tabIndex={0} onClick={() => {}}>
                <div className="w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="relative w-full h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col [backface-visibility:hidden]">
                    <div className="relative w-full pb-[56.25%] overflow-hidden bg-gray-200">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow items-center text-center justify-between">
                      <h3 className="font-bold text-gray-800 text-sm md:text-base mb-4 leading-tight">{course.title}</h3>
                      <button className="w-full border-2 border-orange-500 text-orange-500 rounded-lg py-2 font-semibold text-xs md:text-sm transition-colors cursor-target focus:outline-none bg-transparent">
                        View Detail
                      </button>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 w-full h-full bg-orange-50 border border-orange-200 rounded-xl overflow-y-auto flex flex-col items-center justify-center p-3 md:p-6 text-center shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h3 className="font-bold text-orange-800 text-sm md:text-base mb-1 md:mb-2 leading-tight flex-shrink-0">{course.title}</h3>
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed max-w-full md:max-w-[90%] flex-grow flex items-center">
                      {course.description}
                    </p>
                    <button onClick={() => onEnroll?.('Additional Support - Full Access', 349, '₹349')} className="mt-3 md:mt-4 border-2 border-orange-500 bg-orange-500 text-white hover:bg-orange-600 transition-colors rounded-lg py-2 px-3 md:px-4 w-full font-semibold text-xs md:text-sm cursor-target focus:outline-none flex-shrink-0">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-gray-100 text-center max-w-3xl mx-auto flex flex-col items-center">
            <BlurText 
              as="p"
              text="Unlock 7 vital support services including legal, medical, and career guidance. We stand exclusively with you."
              delay={200}
              className="text-gray-700 text-lg md:text-xl font-medium mb-8 leading-relaxed"
            />
            <button onClick={() => onEnroll?.('Additional Support - Full Access', 349, '₹349')} className="block w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-colors cursor-target overflow-hidden shadow-lg shadow-orange-200">
              <GlareHover className="px-12 py-4 flex items-center justify-center w-full h-full" glareSize={250}>
                Buy for ₹349 Only
              </GlareHover>
            </button>
          </div>
        </div>

        <div className="text-center mt-20 mb-12 flex flex-col items-center">
          <BlurText as="h2" text="Premium Special Courses" delay={100} className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4" />
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full relative mb-8">
            <div className="absolute w-3 h-3 bg-white border-2 border-orange-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-3xl p-6 md:p-10 bg-white shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {premiumCoursesData.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-shadow hover:shadow-xl flex flex-col cursor-target group">
                <div className="relative w-full pb-[56.25%] overflow-hidden bg-gray-200">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h2 className="font-bold text-gray-900 text-2xl mb-4">{course.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {course.description}
                  </p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => onEnroll?.(course.title, 500, course.price)} className="w-full bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-xl font-bold text-lg transition-colors cursor-target overflow-hidden focus:outline-none">
                    <div className="px-6 py-3.5 flex items-center justify-center w-full h-full">
                      Buy for {course.price} Only
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20 mb-12 flex flex-col items-center">
          <BlurText as="h2" text="Upcoming Courses" delay={100} className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4" />
          <div className="w-24 h-1 bg-gray-500 mx-auto rounded-full relative mb-8">
            <div className="absolute w-3 h-3 bg-white border-2 border-gray-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-3xl p-6 md:p-10 bg-white shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 [perspective:1000px]">
            {upcomingCoursesData.map((course, index) => (
              <div key={index} className="relative group cursor-target h-full" tabIndex={0} onClick={() => {}}>
                <div className="w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="relative w-full h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col [backface-visibility:hidden]">
                    <div className="relative w-full pb-[56.25%] overflow-hidden bg-gray-200">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow items-center text-center justify-between">
                      <h3 className="font-bold text-gray-800 text-sm md:text-base mb-4 leading-tight">{course.title}</h3>
                      <button className="w-full border-2 border-gray-500 text-gray-500 rounded-lg py-2 font-semibold text-xs md:text-sm transition-colors cursor-target focus:outline-none bg-transparent">
                        View Detail
                      </button>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 w-full h-full bg-gray-50 border border-gray-200 rounded-xl overflow-y-auto flex flex-col items-center justify-center p-3 md:p-6 text-center shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h3 className="font-bold text-gray-800 text-sm md:text-base mb-1 md:mb-2 leading-tight flex-shrink-0">{course.title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-full md:max-w-[90%] flex-grow flex items-center">
                      {course.description}
                    </p>
                    <button className="mt-3 md:mt-4 border-2 border-gray-500 bg-gray-500 text-white transition-colors rounded-lg py-2 px-3 md:px-4 w-full font-semibold text-xs md:text-sm cursor-not-allowed flex-shrink-0">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-gray-100 text-center max-w-3xl mx-auto flex flex-col items-center">
            <BlurText 
              as="p"
              text="Prepare yourself for our next wave of comprehensive courses coming soon."
              delay={200}
              className="text-gray-700 text-lg md:text-xl font-medium mb-8 leading-relaxed"
            />
            <button className="block w-full sm:w-auto bg-gray-500 text-white rounded-full font-bold text-lg transition-colors overflow-hidden shadow-lg shadow-gray-200 cursor-not-allowed">
              <div className="px-12 py-4 flex items-center justify-center w-full h-full">
                Will be available for <span className="ml-2 blur-md">₹499</span>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
