import { useState } from 'react';
import { GraduationCap, Phone, Menu, X } from 'lucide-react';
import GlareHover from './GlareHover';

interface HeaderProps {
  onEnroll?: () => void;
}

export default function Header({ onEnroll }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-50 bg-white">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a className="flex items-center gap-2" href="#">
            <div className="w-10 h-10 bg-blue-800 text-white flex items-center justify-center font-bold text-xl rounded">
              <GraduationCap size={24} />
            </div>
            <span className="font-bold text-2xl text-blue-900 tracking-tight">Future <span className="text-orange-500">Skill</span></span>
          </a>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a className="text-orange-500 font-semibold border-b-2 border-orange-500 pb-1 cursor-target" href="#">Home</a>
          <a className="text-gray-600 hover:text-blue-800 font-medium transition-colors cursor-target" href="#">About Us</a>
          <a className="text-gray-600 hover:text-blue-800 font-medium transition-colors cursor-target" href="#courses">Course</a>
          <a className="text-gray-600 hover:text-blue-800 font-medium transition-colors cursor-target" href="#">Job Alerts</a>
          <a className="text-gray-600 hover:text-blue-800 font-medium transition-colors cursor-target" href="#">Contact Us</a>
        </nav>
        {/* CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center text-blue-900 font-semibold">
            <Phone size={18} className="mr-2" />
            +91 7974889250
          </div>
          <button onClick={onEnroll} className="bg-orange-500 hover:bg-orange-600 text-white rounded-md font-semibold transition-colors cursor-target overflow-hidden block">
            <GlareHover className="px-6 py-2 flex items-center justify-center w-full h-full" glareSize={150}>
              Enroll Now
            </GlareHover>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full flex flex-col space-y-4 px-4 py-6 border-t border-gray-100 z-40">
          <a className="text-orange-500 font-semibold" href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a className="text-gray-600 hover:text-blue-800 font-medium transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <a className="text-gray-600 hover:text-blue-800 font-medium transition-colors" href="#courses" onClick={() => setIsMobileMenuOpen(false)}>Course</a>
          <a className="text-gray-600 hover:text-blue-800 font-medium transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>Job Alerts</a>
          <a className="text-gray-600 hover:text-blue-800 font-medium transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
          
          <div className="flex items-center text-blue-900 font-semibold pt-4 border-t border-gray-100">
            <Phone size={18} className="mr-2" />
            +91 7974889250
          </div>
          <button onClick={() => { setIsMobileMenuOpen(false); onEnroll?.(); }} className="bg-orange-500 hover:bg-orange-600 text-white rounded-md font-semibold transition-colors cursor-target overflow-hidden block w-full mt-2">
            <div className="px-6 py-3 flex items-center justify-center w-full h-full">
              Enroll Now
            </div>
          </button>
        </div>
      )}
    </header>
  );
}
