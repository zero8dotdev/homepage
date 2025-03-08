"use client";
import { ChevronRight } from "lucide-react";

interface SlideButtonProps {
  title: string;
}

const SlideButton: React.FC<SlideButtonProps> = ({ title }) => {
  return (
    <button className=" relative overflow-hidden group flex items-center gap-3 px-6 py-4 border-2 text-lg lg:text-2xl font-medium text-onyx transition-all duration-300 bg-primary">
      <span className="relative z-10">{title}</span>
      <ChevronRight className="relative z-10 w-6 h-6" />
      
      {/* Hover Slide Effect */}
      <span className="absolute inset-0 w-full h-full bg-iconGreen scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
    </button>
  );
};

export default SlideButton;