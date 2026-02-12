import { useNavigate, useLocation } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

const frames = [
  { path: "/frame1", label: "Frame 1: Storefront" },
  { path: "/product", label: "Frame 2: Product Page" },
  { path: "/checkout", label: "Frame 3: Checkout" },
  { path: "/admin", label: "Frame 4: Admin Dashboard" },
  { path: "/expansion", label: "Frame 5: Expansion Options" },
];

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentIndex = frames.findIndex(frame => frame.path === location.pathname);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < frames.length - 1;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200">
        <button
          onClick={() => navigate(frames[currentIndex - 1].path)}
          disabled={!canGoPrev}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-900" />
        </button>
        
        <div className="text-sm text-gray-900">
          <span className="font-medium">{currentIndex + 1}</span>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-400">{frames.length}</span>
        </div>
        
        <button
          onClick={() => navigate(frames[currentIndex + 1].path)}
          disabled={!canGoNext}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-900" />
        </button>
      </div>
    </div>
  );
}