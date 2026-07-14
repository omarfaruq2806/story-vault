const SkeletonCard = () => {
  return (
    <div className="flex flex-col h-full bg-[#083344] border border-[#06b6d4]/10 rounded-2xl overflow-hidden shadow-lg animate-pulse">
      <div className="h-48 w-full bg-[#061e29]" />

      <div className="p-5 flex flex-col flex-grow space-y-4">
        
        <div className="h-6 w-3/4 bg-[#061e29] rounded-md" />
        
        <div className="space-y-2">
          <div className="h-4 w-full bg-[#061e29] rounded-md" />
          <div className="h-4 w-5/6 bg-[#061e29] rounded-md" />
        </div>

        <div className="h-4 w-1/2 bg-[#061e29] rounded-md mt-auto" />

        <div className="flex gap-3 mt-4 pt-4 border-t border-[#06b6d4]/10">
          <div className="h-10 flex-1 bg-[#061e29] rounded-lg" />
          <div className="h-10 flex-1 bg-[#061e29] rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;