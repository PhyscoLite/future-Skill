import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import BlurText from './BlurText';

export default function ContactUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12 flex flex-col items-center">
          <span className="text-blue-800 font-bold text-sm tracking-widest uppercase">Contact Us</span>
          <BlurText as="h2" text="Get in Touch" delay={100} className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4" />
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full relative">
            <div className="absolute w-3 h-3 bg-white border-2 border-orange-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Have questions or need assistance? Reach out to us through any of the channels below. Our team is always ready to help you on your learning journey.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* Call Us */}
              <div className="flex items-center p-5 border border-gray-200 rounded-xl bg-gray-50 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all text-left">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold mb-1">Call Us</p>
                  <p className="font-bold text-gray-900">+91 7974889250</p>
                </div>
              </div>
              {/* WhatsApp */}
              <div className="flex items-center p-5 border border-gray-200 rounded-xl bg-gray-50 hover:bg-white hover:border-green-500 hover:shadow-md transition-all text-left">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold mb-1">WhatsApp</p>
                  <p className="font-bold text-gray-900">+91 7974889250</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center p-5 border border-gray-200 rounded-xl bg-gray-50 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all text-left">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold mb-1">Email Us</p>
                  <p className="font-bold text-gray-900 text-sm">tiwarirohit326@gmail.com</p>
                </div>
              </div>
              {/* Office */}
              <div className="flex items-center p-5 border border-gray-200 rounded-xl bg-gray-50 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all text-left">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold mb-1">Our Office</p>
                  <p className="font-bold text-gray-900 text-sm">Anand kunj garha, jabalpur, Madhya Pradesh, 482003</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl shadow-blue-900/5">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-lg transition-colors shadow-md mt-2 flex justify-center items-center">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
