import { X, CreditCard, Building, Smartphone, ShieldCheck } from 'lucide-react';
import GlareHover from './GlareHover';

interface MockPaymentGatewayProps {
  isOpen: boolean;
  amount: number;
  onClose: () => void;
  onSuccess: () => void;
}

export default function MockPaymentGateway({ isOpen, amount, onClose, onSuccess }: MockPaymentGatewayProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative m-auto animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-[#0B1221] text-white p-5 flex justify-between items-center rounded-t-xl">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full border border-white/20 p-1">
                <img src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781785543/gyaanpath-logo_j41gsq.png" alt="Logo" className="w-full h-auto object-contain" />
             </div>
             <div>
                <h3 className="font-semibold text-sm">GyaanPath Digital Technologies</h3>
                <p className="text-gray-400 text-xs flex items-center mt-0.5">
                   <ShieldCheck size={12} className="mr-1 text-green-400" /> Secure Payment
                </p>
             </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-1 bg-white/5 rounded hover:bg-white/10">
            <X size={18} />
          </button>
        </div>

        {/* Amount */}
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <span className="text-gray-500 font-medium text-sm w-1/2">Amount Payable</span>
          <span className="text-2xl font-bold text-gray-900 text-right">₹{amount}</span>
        </div>

        {/* Payment Options */}
        <div className="p-6">
           <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Select Payment Method</p>
           
           <div className="space-y-3">
             <button onClick={onSuccess} className="w-full border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50/50 hover:shadow-sm transition-all group text-left cursor-target overflow-hidden block">
               <GlareHover className="flex items-center w-full h-full p-3.5" glareColor="#3b82f6" glareOpacity={0.15} glareSize={200}>
                 <div className="w-10 h-10 bg-[#E8F5E9] rounded-lg text-[#2E7D32] flex items-center justify-center mr-4 group-hover:bg-[#C8E6C9] transition-colors border border-green-100 relative z-10">
                    <Smartphone size={20} />
                 </div>
                 <div className="flex-1 relative z-10">
                   <h4 className="font-bold text-gray-800 text-sm">UPI</h4>
                   <p className="text-xs text-gray-500 mt-0.5 mt-0.5">Google Pay, PhonePe, Paytm</p>
                 </div>
               </GlareHover>
             </button>

             <button onClick={onSuccess} className="w-full border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50/50 hover:shadow-sm transition-all group text-left cursor-target overflow-hidden block">
               <GlareHover className="flex items-center w-full h-full p-3.5" glareColor="#3b82f6" glareOpacity={0.15} glareSize={200}>
                 <div className="w-10 h-10 bg-[#E3F2FD] rounded-lg text-[#1565C0] flex items-center justify-center mr-4 group-hover:bg-[#BBDEFB] transition-colors border border-blue-100 relative z-10">
                    <CreditCard size={20} />
                 </div>
                 <div className="flex-1 relative z-10">
                   <h4 className="font-bold text-gray-800 text-sm">Card</h4>
                   <p className="text-xs text-gray-500 mt-0.5">Visa, MasterCard, RuPay & More</p>
                 </div>
               </GlareHover>
             </button>

             <button onClick={onSuccess} className="w-full border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50/50 hover:shadow-sm transition-all group text-left cursor-target overflow-hidden block">
               <GlareHover className="flex items-center w-full h-full p-3.5" glareColor="#3b82f6" glareOpacity={0.15} glareSize={200}>
                 <div className="w-10 h-10 bg-[#F3E5F5] rounded-lg text-[#6A1B9A] flex items-center justify-center mr-4 group-hover:bg-[#E1BEE7] transition-colors border border-purple-100 relative z-10">
                    <Building size={20} />
                 </div>
                 <div className="flex-1 relative z-10">
                   <h4 className="font-bold text-gray-800 text-sm">Net Banking</h4>
                   <p className="text-xs text-gray-500 mt-0.5">All major Indian banks</p>
                 </div>
               </GlareHover>
             </button>
           </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 p-4 border-t border-gray-100 flex flex-col items-center justify-center gap-1">
            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">Powered by</span>
            <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold text-[#0B1221] tracking-tight">razorpay</span>
                <span className="text-gray-300">|</span>
                <span className="text-xs font-bold text-blue-800 tracking-tight">cashfree</span>
            </div>
        </div>
      </div>
    </div>
  );
}
