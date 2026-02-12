import Navigation from "./Navigation";
import { ChevronLeft, Minus, Plus } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export default function Frame2() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1758995116142-c626a962a682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwcmluZyUyMGpld2Vscnl8ZW58MXx8fHwxNzcwODAwNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1624929090883-3d2f7874a019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwbmVja2xhY2UlMjBqZXdlbHJ5fGVufDF8fHx8MTc3MDgwOTk3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1725368844213-c167fe556f98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBicmFjZWxldCUyMGpld2Vscnl8ZW58MXx8fHwxNzcwODE4ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  // Shared button styles
  const primaryBtn =
    "bg-black text-white hover:bg-black/90 transition-colors";
  const iconBtn =
    "w-10 h-10 rounded-full flex items-center justify-center " + primaryBtn;

  return (
    <div className="min-h-screen bg-white">
      {/* Frame Label */}
      <div className="bg-[#F5F5F5] py-3 px-6 border-b border-gray-200">
        <p className="text-sm text-gray-600">Frame 2: Product Page</p>
      </div>

      {/* Mobile Device Container */}
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-[375px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Mobile Content */}
          <div className="bg-white max-h-[812px] overflow-y-auto">
            {/* Header */}
            <header className="py-4 px-6 border-b border-gray-100 flex items-center gap-4 sticky top-0 bg-white z-10">
              <button className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
                <ChevronLeft className="w-5 h-5 text-[#111111]" />
              </button>
              <h1 className="text-sm text-[#111111]">ATELIER</h1>
            </header>

            {/* Product Image */}
            <div className="aspect-square bg-white">
              <ImageWithFallback
                src={images[selectedImage]}
                alt="Classic Gold Ring"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="px-6 py-4 flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? "border-[#111111]" : "border-gray-200"
                  }`}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Product Info */}
            <div className="px-6 py-6">
              <h2 className="text-2xl text-[#111111] mb-2">
                Classic Gold Ring
              </h2>
              <p className="text-2xl text-[#111111] mb-4">$2,850</p>

              <div className="py-3 px-4 bg-[#F5F5F5] rounded-lg mb-6">
                <p className="text-sm text-gray-700">
                  Pay in 4 interest-free installments of $712.50
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="text-sm text-gray-600 mb-2 block">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className={iconBtn}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <span className="text-lg text-[#111111] min-w-[2rem] text-center">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className={iconBtn}
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                className={`w-full py-4 rounded-full ${primaryBtn} mb-6`}
              >
                Add to Cart
              </button>

              {/* Product Description */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <h3 className="text-sm text-[#111111] mb-3">Description</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Handcrafted 18k gold ring featuring a timeless design. Each
                  piece is carefully made by our artisans using ethically sourced
                  materials. This ring represents elegance and quality
                  craftsmanship.
                </p>
              </div>

              {/* Shipping & Returns Accordion */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer text-sm text-[#111111] mb-4">
                    <span>Shipping & Returns</span>
                    <svg
                      className="w-4 h-4 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="text-sm text-gray-700 leading-relaxed">
                    <p className="mb-2">Free shipping on all orders over $500.</p>
                    <p>30-day return policy for unworn items in original packaging.</p>
                  </div>
                </details>
              </div>

              {/* Trust Icons */}
              <div className="flex items-center gap-6 py-6 border-t border-gray-100">
                {["Secure", "Authentic", "Warranty"].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-xs text-gray-600"
                  >
                    <div className="w-5 h-5 bg-[#111111] rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
}
