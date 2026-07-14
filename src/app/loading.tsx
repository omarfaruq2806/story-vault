"use client";

import Spinner from "@/components/loading/Spinner";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#061e29] flex items-center justify-center">
      <Spinner />
    </div>
  );
}