// components/AnimatedToast.tsx
import toast from 'react-hot-toast';
import { CheckCircle, AlertCircle } from 'lucide-react';

export const AnimatedToast = (message: string, type: 'success' | 'error') => {
  toast.custom((t) => (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'} 
      max-w-md w-full bg-[#061e29]/80 backdrop-blur-xl shadow-2xl rounded-2xl pointer-events-auto flex border border-[#22d3ee]/30`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {type === 'success' ? (
              <CheckCircle className="text-[#22d3ee] h-6 w-6" />
            ) : (
              <AlertCircle className="text-[#ff4757] h-6 w-6" />
            )}
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-white">{message}</p>
          </div>
        </div>
      </div>
    </div>
  ), { 
    duration: 1000,
    position: 'top-center' 
  });
};