import { GraduationCap, Facebook, Instagram, Youtube, Linkedin, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-blue-800 pb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link className="flex items-center gap-2 bg-white inline-flex p-2 rounded" to="/">
              <div className="w-8 h-8 bg-blue-800 text-white flex items-center justify-center font-bold text-lg rounded">
                <GraduationCap size={20} />
              </div>
              <span className="font-bold text-xl text-blue-900 tracking-tight">Future <span className="text-orange-500">Skill</span></span>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed">Learn Skills, Build Careers, Create Opportunities.<br />Join our daily live program and take the right step towards a better future.</p>
            <div className="flex space-x-4">
              <a className="w-8 h-8 bg-blue-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors" href="#">
                <Facebook size={16} />
              </a>
              <a className="w-8 h-8 bg-blue-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors" href="#">
                <Instagram size={16} />
              </a>
              <a className="w-8 h-8 bg-blue-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors" href="#">
                <Youtube size={16} />
              </a>
              <a className="w-8 h-8 bg-blue-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors" href="#">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link className="text-blue-200 hover:text-white transition-colors text-sm" to="/">Home</Link></li>
              <li><Link className="text-blue-200 hover:text-white transition-colors text-sm" to="/about">About Us</Link></li>
              <li><a className="text-blue-200 hover:text-white transition-colors text-sm" href="/#courses">Course</a></li>
              <li><Link className="text-blue-200 hover:text-white transition-colors text-sm" to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          {/* Important Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Important Links</h4>
            <ul className="space-y-3">
              <li><a className="text-blue-200 hover:text-white transition-colors text-sm" href="#">Privacy Policy</a></li>
              <li><a className="text-blue-200 hover:text-white transition-colors text-sm" href="#">Terms &amp; Conditions</a></li>
              <li><a className="text-blue-200 hover:text-white transition-colors text-sm" href="#">Refund Policy</a></li>
              <li><a className="text-blue-200 hover:text-white transition-colors text-sm" href="#">Career</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-blue-200">
                <Phone className="mt-1 mr-3 text-orange-500" size={16} />
                +91 7974889250
              </li>
              <li className="flex items-start text-sm text-blue-200">
                <Mail className="mt-1 mr-3 text-orange-500" size={16} />
                tiwarirohit326@gmail.com
              </li>
              <li className="flex items-start text-sm text-blue-200">
                <MapPin className="mt-1 mr-3 text-orange-500" size={16} />
                Anand kunj garha, jabalpur, Madhya Pradesh, 482003
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue-300">
          <p>© 2026 Future Skill. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center">
            Designed with <Heart className="text-red-500 mx-1" size={12} fill="currentColor" /> for a Better India
          </p>
        </div>
      </div>
    </footer>
  );
}
