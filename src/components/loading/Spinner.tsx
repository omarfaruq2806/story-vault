const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="relative">
     
        <div className="w-16 h-16 border-4 border-[#061e29] border-t-[#22d3ee] border-r-[#22d3ee] rounded-full animate-spin"></div>
      
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-[#061e29] border-b-[#06b6d4] rounded-full animate-spin-reverse"></div>
      </div>
      <style jsx>{`
        .animate-spin-reverse {
          animation: spin 1s linear infinite reverse;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Spinner;