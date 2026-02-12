import Navigation from "./Navigation";
import { ChevronLeft, Lock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Frame3() {
  return (
    <div className="min-h-screen bg-white">
      {/* Frame Label */}
      <div className="bg-[#F5F5F5] py-3 px-6 border-b border-gray-200">
        <p className="text-sm text-gray-600">Frame 3: Checkout Page</p>
      </div>

      {/* Mobile Device Container */}
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-[375px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Mobile Content */}
          <div className="bg-white max-h-[812px] overflow-y-auto">
            {/* Header */}
            <header className="py-4 px-6 border-b border-gray-100 flex items-center gap-4 sticky top-0 bg-white z-10">
              <button className="p-2 -ml-2">
                <ChevronLeft className="w-5 h-5 text-[#111111]" />
              </button>
              <h1 className="text-sm text-[#111111]">Checkout</h1>
            </header>

            {/* Checkout Content */}
            <div className="px-6 py-6">
              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-lg text-[#111111] mb-4">Contact Information</h2>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#111111] transition-colors"
                />
              </section>

              {/* Shipping Information */}
              <section className="mb-8">
                <h2 className="text-lg text-[#111111] mb-4">Shipping Information</h2>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#111111] transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#111111] transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, etc. (optional)"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#111111] transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#111111] transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="ZIP code"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section className="mb-8">
                <h2 className="text-lg text-[#111111] mb-4">Payment Method</h2>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="payment" defaultChecked className="w-4 h-4" />
                      <span className="text-sm text-[#111111]">Credit Card</span>
                    </label>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 bg-[#F5F5F5]">
                    <label className="flex items-center gap-3 cursor-pointer mb-3">
                      <input type="radio" name="payment" className="w-4 h-4" />
                      <span className="text-sm text-[#111111]">Pay in 4 with Klarna</span>
                    </label>
                    <p className="text-xs text-gray-600 ml-7">
                      4 interest-free payments of $712.50
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="payment" className="w-4 h-4" />
                      <span className="text-sm text-[#111111]">Afterpay</span>
                    </label>
                  </div>
                </div>
              </section>

              {/* Order Summary */}
              <section className="mb-8 bg-[#F5F5F5] rounded-2xl p-6">
                <h2 className="text-lg text-[#111111] mb-4">Order Summary</h2>
                
                <div className="flex gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1758995116142-c626a962a682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwcmluZyUyMGpld2Vscnl8ZW58MXx8fHwxNzcwODAwNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Classic Gold Ring"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#111111] mb-1">Classic Gold Ring</p>
                    <p className="text-xs text-gray-600 mb-2">Quantity: 1</p>
                    <p className="text-sm text-[#111111]">$2,850</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-[#111111]">$2,850</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-[#111111]">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-[#111111]">$228</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-lg text-[#111111]">Total</span>
                    <span className="text-lg text-[#111111]">$3,078</span>
                  </div>
                </div>
              </section>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 mb-6 py-4 bg-[#F5F5F5] rounded-lg">
                <Lock className="w-4 h-4 text-gray-600" />
                <span className="text-xs text-gray-600">Secure SSL Encrypted Payment</span>
              </div>

              {/* Complete Order Button */}
              <button className="w-full py-4 bg-[#111111] text-white rounded-full hover:bg-gray-800 transition-colors mb-6">
                Complete Order
              </button>

              <p className="text-xs text-center text-gray-500">
                By completing your order, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
}
