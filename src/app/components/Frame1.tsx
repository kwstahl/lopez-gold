import Navigation from "./Navigation";
import { Instagram, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Frame1() {
  const products = [
    {
      id: 1,
      name: "Classic Gold Ring",
      price: "$2,850",
      image:
        "https://images.unsplash.com/photo-1758995116142-c626a962a682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwcmluZyUyMGpld2Vscnl8ZW58MXx8fHwxNzcwODAwNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "Diamond Necklace",
      price: "$4,200",
      image:
        "https://images.unsplash.com/photo-1624929090883-3d2f7874a019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwbmVja2xhY2UlMjBqZXdlbHJ5fGVufDF8fHx8MTc3MDgwOTk3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "Silver Bracelet",
      price: "$1,650",
      image:
        "https://images.unsplash.com/photo-1725368844213-c167fe556f98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBicmFjZWxldCUyMGpld2Vscnl8ZW58MXx8fHwxNzcwODE4ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      name: "Pearl Earrings",
      price: "$980",
      image:
        "https://images.unsplash.com/photo-1704957205757-50bb01eb3183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFybCUyMGVhcnJpbmdzJTIwamV3ZWxyeXxlbnwxfHx8fDE3NzA4MzA1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  // Shared styles (keeps everything consistent)
  const primaryBtn =
    "bg-black text-white hover:bg-black/90 transition-colors";
  const iconBtn =
    "p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors";
  const card =
    "rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm";

  return (
    <div className="min-h-screen bg-white">
      {/* Frame Label */}
      <div className="bg-[#F5F5F5] py-3 px-6 border-b border-gray-200">
        <p className="text-sm text-gray-600">
          Frame 1: Storefront Landing Page (Mobile First)
        </p>
      </div>

      {/* Mobile Device Container */}
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-[375px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Mobile Content */}
          <div className="bg-white">
            {/* Header */}
            <header className="py-6 px-6 border-b border-gray-100">
              <h1 className="text-2xl text-center text-[#111111] tracking-tight">
                ATELIER
              </h1>
            </header>

            {/* Social Links */}
            <div className="py-6 px-6 flex justify-center gap-6">
              <button className={iconBtn} aria-label="Instagram">
                <Instagram className="w-5 h-5 text-[#111111]" />
              </button>

              <button className={iconBtn} aria-label="TikTok">
                <svg
                  className="w-5 h-5 text-[#111111]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </button>

              <button className={iconBtn} aria-label="Message">
                <MessageCircle className="w-5 h-5 text-[#111111]" />
              </button>
            </div>

            {/* Featured Section */}
            <div className="px-6 py-8">
              <h2 className="text-lg text-[#111111] mb-6">
                Featured Collection
              </h2>

              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className={card}>
                    <div className="aspect-square bg-white">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="text-[#111111] mb-1">{product.name}</h3>
                      <p className="text-[#111111] mb-3">{product.price}</p>

                      <button
                        className={`w-full py-3 rounded-full ${primaryBtn}`}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="px-6 py-8 bg-[#FAFAFA] mt-8 border-t border-gray-100">
              <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#111111] rounded-full flex items-center justify-center">
                    <svg
                      className="w-2.5 h-2.5 text-white"
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
                  <span>Secure Checkout</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#111111] rounded-full flex items-center justify-center">
                    <svg
                      className="w-2.5 h-2.5 text-white"
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
                  <span>Financing Available</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="py-6 px-6 border-t border-gray-100">
              <p className="text-xs text-center text-gray-500">
                © 2026 Atelier. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
}
