import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram, MessageCircle, ShoppingBag, Menu, Search, User, X, Minus, Plus, CreditCard, Lock, Package, Truck, CheckCircle, Star } from "lucide-react";
import { useState } from "react";

export default function DeviceMockup() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'confirmation'>('cart');
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const [orderNumber, setOrderNumber] = useState<string>('');

  const products = [
    {
      id: 1,
      name: "Eternal Solitaire Diamond Ring",
      price: 8950,
      image: "https://images.unsplash.com/photo-1662434921251-a6eba45ac40c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaWFtb25kJTIwZW5nYWdlbWVudCUyMHJpbmclMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwODY2NjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "18K White Gold, 2.5ct Diamond"
    },
    {
      id: 2,
      name: "Heritage Gold Pendant",
      price: 4200,
      image: "https://images.unsplash.com/photo-1758995115560-59c10d6cc28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZ29sZCUyMG5lY2tsYWNlJTIwcGVuZGFudCUyMGpld2Vscnl8ZW58MXx8fHwxNzcwODY2NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "22K Yellow Gold, Handcrafted"
    },
    {
      id: 3,
      name: "Luminous Pearl Drops",
      price: 3200,
      image: "https://images.unsplash.com/photo-1770721478216-3e5dbbe8dcc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZWFybCUyMGVhcnJpbmdzJTIwZWxlZ2FudCUyMGpld2Vscnl8ZW58MXx8fHwxNzcwODY2NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "South Sea Pearls, 18K Gold"
    },
    {
      id: 4,
      name: "Celestial Diamond Bracelet",
      price: 12500,
      image: "https://images.unsplash.com/photo-1763029513623-37d488cb97b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwdGVubmlzJTIwYnJhY2VsZXQlMjBsdXh1cnklMjBqZXdlbHJ5fGVufDF8fHx8MTc3MDg2NjYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Platinum, 5.0ct Total Weight"
    },
    {
      id: 5,
      name: "Sapphire Halo Ring",
      price: 6800,
      image: "https://images.unsplash.com/photo-1762019313711-8b5d1e4f7ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXBwaGlyZSUyMGdlbXN0b25lJTIwcmluZyUyMGx1eHVyeSUyMGpld2Vscnl8ZW58MXx8fHwxNzcwODY2NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Ceylon Sapphire, Diamond Halo"
    },
    {
      id: 6,
      name: "Emerald Eternity Band",
      price: 9200,
      image: "https://images.unsplash.com/photo-1762505464779-17f78cbfa8b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwZGlhbW9uZCUyMHJpbmclMjBsdXh1cnklMjBqZXdlbHJ5fGVufDF8fHx8MTc3MDg2NjYyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Colombian Emeralds, Platinum"
    },
  ];

  const addToCart = (product: any) => {
    const existing = cartItems.find(item => item.id === product.id);
    if (existing) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setCartOpen(true);
    setCheckoutStep('cart');
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const taxAmount = cartTotal * 0.08;
  const shippingAmount = cartTotal > 5000 ? 0 : 35;
  const finalTotal = cartTotal + taxAmount + shippingAmount;

  const proceedToCheckout = () => {
    setCheckoutStep('checkout');
  };

  const completeOrder = () => {
    setOrderNumber(`LJZ${Math.floor(Math.random() * 900000) + 100000}`);
    setCheckoutStep('confirmation');
  };

  const closeCheckout = () => {
    setCartOpen(false);
    setCheckoutStep('cart');
  };

  // Desktop Store Component
  const DesktopStore = () => (
    <div className="bg-white h-[500px] overflow-y-auto relative">
      {/* Cart/Checkout Sidebar */}
      {cartOpen && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-50" onClick={closeCheckout}>
          <div className="absolute right-0 top-0 bottom-0 w-96 bg-white shadow-2xl overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            
            {/* Cart View */}
            {checkoutStep === 'cart' && (
              <>
                <div className="p-6 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
                  <h3 className="text-lg tracking-tight">Shopping Cart ({cartItems.length})</h3>
                  <button onClick={closeCheckout} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6 space-y-4 flex-1 overflow-y-auto">
                  {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p className="text-sm text-gray-500">Your cart is empty</p>
                    </div>
                  ) : (
                    cartItems.map(item => (
                      <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-50">
                        <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                          <ImageWithFallback src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm mb-1 tracking-tight">{item.name}</p>
                          <p className="text-sm text-gray-500 mb-2">${item.price.toLocaleString()}</p>
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm w-6 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {cartItems.length > 0 && (
                  <div className="p-6 border-t border-gray-100 bg-white flex-shrink-0">
                    <div className="flex justify-between mb-4 text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="tracking-tight">${cartTotal.toLocaleString()}</span>
                    </div>
                    <button 
                      onClick={proceedToCheckout}
                      className="w-full py-3.5 bg-black text-white rounded-full hover:bg-gray-900 transition-colors tracking-tight"
                    >
                      Proceed to Checkout
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-3">Complimentary shipping over $5,000</p>
                  </div>
                )}
              </>
            )}

            {/* Checkout View */}
            {checkoutStep === 'checkout' && (
              <>
                <div className="p-6 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
                  <button onClick={() => setCheckoutStep('cart')} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h3 className="text-lg tracking-tight">Secure Checkout</h3>
                  <Lock className="w-4 h-4 text-emerald-600 ml-auto" />
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-2xl p-5">
                    <h4 className="text-sm tracking-tight mb-4">Order Summary</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="tracking-tight">${cartTotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="tracking-tight">{shippingAmount === 0 ? 'FREE' : `$${shippingAmount}`}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax (Est.)</span>
                        <span className="tracking-tight">${taxAmount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between pt-3 border-t border-gray-200">
                        <span className="font-medium tracking-tight">Total</span>
                        <span className="font-medium tracking-tight">${finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div>
                    <h4 className="text-sm tracking-tight mb-3">Contact Information</h4>
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm mb-3 focus:outline-none focus:border-gray-400 transition-colors"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone number" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-400 transition-colors"
                    />
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h4 className="text-sm tracking-tight mb-3">Shipping Address</h4>
                    <div className="space-y-3">
                      <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                      <input type="text" placeholder="Address" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                      <div className="grid grid-cols-2 gap-3">
                        <input type="text" placeholder="City" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                        <input type="text" placeholder="ZIP" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div>
                    <h4 className="text-sm tracking-tight mb-3 flex items-center gap-2">
                      <CreditCard className="w-4 h-4" />
                      Payment Method
                    </h4>
                    
                    {/* Shop Pay */}
                    <button 
                      onClick={() => setSelectedPayment('shoppay')}
                      className={`w-full p-4 border-2 rounded-xl mb-3 transition-all ${selectedPayment === 'shoppay' ? 'border-[#5A31F4] bg-[#5A31F4]/5' : 'border-gray-100 hover:border-gray-200'}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#5A31F4] rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M14.5 2L9.5 2C7.5 2 6 3.5 6 5.5v13c0 2 1.5 3.5 3.5 3.5h5c2 0 3.5-1.5 3.5-3.5v-13C18 3.5 16.5 2 14.5 2z"/>
                            </svg>
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-medium tracking-tight">Shop Pay</p>
                            <p className="text-xs text-gray-500">Express checkout</p>
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 ${selectedPayment === 'shoppay' ? 'border-[#5A31F4] bg-[#5A31F4]' : 'border-gray-300'}`}>
                          {selectedPayment === 'shoppay' && (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Klarna */}
                    <button 
                      onClick={() => setSelectedPayment('klarna')}
                      className={`w-full p-4 border-2 rounded-xl mb-3 transition-all ${selectedPayment === 'klarna' ? 'border-[#FFB3C7] bg-[#FFB3C7]/5' : 'border-gray-100 hover:border-gray-200'}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl overflow-hidden">
                            <svg viewBox="0 0 80 80" fill="none">
                              <rect width="80" height="80" fill="#FFB3C7"/>
                              <path d="M25 25h8v30h-8V25zm12 0h8v12.5c2.5-3 5-4.5 8-4.5 5 0 9 4 9 9.5V55h-8V43c0-3-2-5-5-5s-5 2-5 5v12h-8V25z" fill="#0A0B09"/>
                            </svg>
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-medium tracking-tight">Klarna</p>
                            <p className="text-xs text-gray-500">4 × ${(finalTotal / 4).toFixed(2)} interest-free</p>
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 ${selectedPayment === 'klarna' ? 'border-[#FFB3C7] bg-[#FFB3C7]' : 'border-gray-300'}`}>
                          {selectedPayment === 'klarna' && (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Afterpay */}
                    <button 
                      onClick={() => setSelectedPayment('afterpay')}
                      className={`w-full p-4 border-2 rounded-xl mb-3 transition-all ${selectedPayment === 'afterpay' ? 'border-[#B2FCE4] bg-[#B2FCE4]/5' : 'border-gray-100 hover:border-gray-200'}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl overflow-hidden">
                            <svg viewBox="0 0 80 80" fill="none">
                              <rect width="80" height="80" fill="#B2FCE4"/>
                              <path d="M28 35l12-10 12 10-12 20-12-20z" fill="#000"/>
                            </svg>
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-medium tracking-tight">Afterpay</p>
                            <p className="text-xs text-gray-500">4 × ${(finalTotal / 4).toFixed(2)} every 2 weeks</p>
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 ${selectedPayment === 'afterpay' ? 'border-[#B2FCE4] bg-[#B2FCE4]' : 'border-gray-300'}`}>
                          {selectedPayment === 'afterpay' && (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Credit Card */}
                    <button 
                      onClick={() => setSelectedPayment('card')}
                      className={`w-full p-4 border-2 rounded-xl transition-all ${selectedPayment === 'card' ? 'border-black bg-gray-50' : 'border-gray-100 hover:border-gray-200'}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                            <CreditCard className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-medium tracking-tight">Credit Card</p>
                            <p className="text-xs text-gray-500">Visa, Mastercard, Amex</p>
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 ${selectedPayment === 'card' ? 'border-black bg-black' : 'border-gray-300'}`}>
                          {selectedPayment === 'card' && (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-100 bg-white flex-shrink-0">
                  <button 
                    onClick={completeOrder}
                    disabled={!selectedPayment}
                    className="w-full py-3.5 bg-black text-white rounded-full hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 tracking-tight"
                  >
                    <Lock className="w-4 h-4" />
                    Complete Order · ${finalTotal.toFixed(2)}
                  </button>
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <Lock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">Secure 256-bit SSL encryption</span>
                  </div>
                </div>
              </>
            )}

            {/* Order Confirmation */}
            {checkoutStep === 'confirmation' && (
              <>
                <div className="p-6 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
                  <h3 className="text-lg tracking-tight">Order Confirmed</h3>
                  <button onClick={closeCheckout} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h4 className="text-xl tracking-tight mb-2">Thank you for your order!</h4>
                    <p className="text-sm text-gray-600">Order #{orderNumber}</p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-5 mb-6">
                    <h5 className="text-sm tracking-tight mb-4">Order Details</h5>
                    <div className="space-y-3">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex gap-3">
                          <div className="w-14 h-14 bg-white rounded-lg overflow-hidden flex-shrink-0">
                            <ImageWithFallback src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm tracking-tight">{item.name}</p>
                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                          </div>
                          <p className="text-sm tracking-tight">${(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 mt-4 border-t border-gray-200">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="tracking-tight">${cartTotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Shipping</span>
                        <span className="tracking-tight">{shippingAmount === 0 ? 'FREE' : `$${shippingAmount}`}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-gray-600">Tax</span>
                        <span className="tracking-tight">${taxAmount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-medium pt-3 border-t border-gray-200">
                        <span className="tracking-tight">Total</span>
                        <span className="tracking-tight">${finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Package className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium tracking-tight">Processing</p>
                        <p className="text-xs text-gray-600">Your order is being carefully prepared</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 opacity-50">
                      <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Truck className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-400 tracking-tight">Shipping</p>
                        <p className="text-xs text-gray-400">Estimated delivery in 2-3 business days</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
                    <p className="text-sm mb-2 tracking-tight">📧 Confirmation email sent</p>
                    <p className="text-xs text-gray-600">Order details and tracking info sent to your email</p>
                  </div>

                  {selectedPayment === 'klarna' && (
                    <div className="bg-pink-50 border border-pink-100 rounded-xl p-4">
                      <p className="text-sm mb-2 tracking-tight">💳 Klarna Payment Plan</p>
                      <p className="text-xs text-gray-600">First payment ${(finalTotal / 4).toFixed(2)} charged today. 3 remaining payments every 2 weeks.</p>
                    </div>
                  )}

                  {selectedPayment === 'afterpay' && (
                    <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                      <p className="text-sm mb-2 tracking-tight">💳 Afterpay Payment Plan</p>
                      <p className="text-xs text-gray-600">First payment ${(finalTotal / 4).toFixed(2)} due today. 3 remaining payments every 2 weeks.</p>
                    </div>
                  )}
                </div>

                <div className="p-6 border-t border-gray-100 bg-white flex-shrink-0">
                  <button 
                    onClick={() => {
                      setCartItems([]);
                      closeCheckout();
                    }}
                    className="w-full py-3.5 bg-black text-white rounded-full hover:bg-gray-900 transition-colors tracking-tight"
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Social Media Top Bar */}
      <div className="bg-black text-white py-2.5 px-12">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <span className="text-gray-400 tracking-wide">FIND US ON</span>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Instagram className="w-3.5 h-3.5" />
              <span className="tracking-wide">Instagram</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="tracking-wide">Facebook</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span className="tracking-wide">TikTok</span>
            </a>
          </div>
          <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="tracking-wide">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="py-6 px-12 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-40">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl tracking-tighter font-light">LOPEZ JEWELRY</h1>
          <div className="px-2.5 py-1 bg-black rounded-md text-white text-[9px] font-medium flex items-center gap-1 tracking-wider">
            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
            SHOP
          </div>
        </div>
        <div className="flex items-center gap-6">
          <nav className="flex gap-8 text-sm text-gray-600 tracking-wide">
            <button className="hover:text-black transition-colors">COLLECTION</button>
            <button className="hover:text-black transition-colors">ABOUT</button>
            <button className="hover:text-black transition-colors">ATELIER</button>
          </nav>
          <div className="flex gap-3">
            <button className="p-2.5 hover:bg-gray-50 rounded-full transition-colors">
              <Search className="w-4.5 h-4.5" />
            </button>
            <button className="p-2.5 hover:bg-gray-50 rounded-full transition-colors">
              <User className="w-4.5 h-4.5" />
            </button>
            <button 
              onClick={() => setCartOpen(true)}
              className="p-2.5 hover:bg-gray-50 rounded-full transition-colors relative"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-black text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="px-12 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-5xl tracking-tight font-light">Timeless Elegance</h2>
          </div>
          <p className="text-lg text-gray-600 mb-5 tracking-wide">Handcrafted fine jewelry for life's precious moments</p>
          <div className="flex items-center gap-2 mb-8 bg-white border border-gray-200 rounded-full px-5 py-3 w-fit shadow-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
            <span className="text-xs tracking-wide"><strong>TikTok Shop Enabled</strong> – Shop from our videos</span>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3.5 bg-black text-white rounded-full hover:bg-gray-900 transition-colors text-sm tracking-wide">
              View Collection
            </button>
            <button className="px-8 py-3.5 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all text-sm tracking-wide">
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-12 py-16 bg-white">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl tracking-tight font-light">Featured Collection</h3>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm text-gray-600 ml-2 tracking-wide">4.9 (2,847 reviews)</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden relative mb-4">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button 
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white"
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/80 backdrop-blur-sm text-white text-[10px] rounded-full tracking-wider font-medium">
                  BESTSELLER
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-base tracking-tight mb-1 font-light">{product.name}</h4>
                <p className="text-xs text-gray-500 mb-2 tracking-wide">{product.description}</p>
                <p className="text-base mb-4 tracking-tight">${product.price.toLocaleString()}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full py-2.5 bg-black text-white rounded-full hover:bg-gray-900 transition-colors text-sm tracking-wide"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <div className="px-12 py-10 bg-gray-50 border-y border-gray-100">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 tracking-wide">Follow Our Journey</span>
            <div className="flex gap-3">
              <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm">
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-8 text-xs text-gray-600 tracking-wide">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Complimentary Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Flexible Financing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Lifetime Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shopify Badge */}
      <div className="px-12 py-6 bg-white">
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <span className="tracking-wide">Powered by</span>
          <svg className="h-4" viewBox="0 0 109 30" fill="#96bf48">
            <path d="M95.9 8.6c-.1 0-3.2-.4-3.2-.4s-2.1-2.1-2.4-2.4c-.3-.3-1-.2-1.2-.1 0 0-.2.1-.6.2-.4-1.3-1.2-2.5-2.6-2.5h-.1c-.8-.9-1.7-1.3-2.5-1.3-6.5 0-9.6 8.1-10.5 12.2-2.6.8-4.5 1.4-4.7 1.4-1.4.4-1.5.5-1.6 1.8-.1 1-3.5 27-3.5 27l26.7 4.6 11.8-2.9S95.9 8.9 95.9 8.6zM85.5 6.2c-.5.2-1.1.3-1.8.5V6c0-1-.1-1.8-.4-2.5.9.2 1.6 1.2 2.2 2.7zM81.2 7c-1.4.4-2.9.9-4.4 1.4.4-1.7 1.3-3.4 2.3-4.5.3-.3.8-.7 1.2-.9.5.8.8 2 .9 4zM78.1 3c.2 0 .4.1.6.2-.4.2-.9.6-1.4 1.1-1.4 1.5-2.4 3.9-2.7 6.2l-3.4 1.1c.9-3.5 3.4-8.6 6.9-8.6z"/>
            <path d="M95.7 9.2s-3.2-.4-3.2-.4-2.1-2.1-2.4-2.4c-.1-.1-.3-.2-.5-.2L84 30.7l11.8-2.9S95.8 9.5 95.7 9.2z" fillOpacity=".3"/>
            <path d="M78.2 13.9l-1.6 6.1s-1.8-1-4-.8c-3.2.2-3.2 2.3-3.2 2.8.2 2.8 7.4 3.4 7.8 9.9.3 5.1-2.7 8.6-7.1 8.9-5.3.3-8.2-2.8-8.2-2.8l1.1-4.8s2.9 2.2 5.3 2c1.5-.1 2.1-1.3 2-2.2-.3-3.6-6.1-3.4-6.4-9.3-.3-4.9 2.9-9.9 10-10.4 2.7-.2 4.1.4 4.1.4zM28.8 21.3L32.2 6s.3-1.2-.7-1.2h-6s-1 .1-1.3 1.2c0 0-3.4 9.4-4.9 13.6l-3-14.5s-.2-1.2-1.2-1.2H8.8s-1 .1-1.1 1.1c0 0-1.6 9.9-2.2 13.9-.1.6-.7 5.1-.7 5.2 0 0-.6 3.8 2.9 3.8h7.3s1-.1 1.1-1.1l1.2-7.5 3.4 8.4s.3 1.2 1.3 1.2h5.9c.8 0 1-.5 1-.5z" fill="#FFF"/>
          </svg>
        </div>
      </div>
    </div>
  );

  // Mobile Store Component
  const MobileStore = () => (
    <div className="bg-white h-[680px] overflow-y-auto relative">
      {/* Cart Overlay */}
      {cartOpen && (
        <div className="absolute inset-0 bg-white z-50 flex flex-col">
          {checkoutStep === 'cart' && (
            <>
              <div className="p-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white">
                <h3 className="text-lg tracking-tight">Cart ({cartItems.length})</h3>
                <button onClick={closeCheckout} className="p-2">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p className="text-sm text-gray-500">Your cart is empty</p>
                  </div>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className="flex gap-3 pb-4 border-b border-gray-50">
                      <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                        <ImageWithFallback src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm mb-1 tracking-tight">{item.name}</p>
                        <p className="text-sm text-gray-500 mb-2">${item.price.toLocaleString()}</p>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-4 border-t border-gray-100 bg-white">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="tracking-tight">${cartTotal.toLocaleString()}</span>
                  </div>
                  <button 
                    onClick={proceedToCheckout}
                    className="w-full py-3.5 bg-black text-white rounded-full tracking-tight"
                  >
                    Checkout
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-2">Free shipping over $5,000</p>
                </div>
              )}
            </>
          )}

          {checkoutStep === 'checkout' && (
            <>
              <div className="p-4 border-b border-gray-100 flex items-center gap-3 bg-white">
                <button onClick={() => setCheckoutStep('cart')} className="p-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h3 className="text-lg tracking-tight">Checkout</h3>
                <Lock className="w-4 h-4 text-emerald-600 ml-auto" />
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="tracking-tight">${cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="tracking-tight">{shippingAmount === 0 ? 'FREE' : `$${shippingAmount}`}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-600">Tax</span>
                    <span className="tracking-tight">${taxAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-medium pt-3 border-t border-gray-200">
                    <span className="tracking-tight">Total</span>
                    <span className="tracking-tight">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm" />
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm" />
                  <input type="text" placeholder="Address" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm" />
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium tracking-tight">Payment Method</p>
                  
                  <button 
                    onClick={() => setSelectedPayment('klarna')}
                    className={`w-full p-3 border-2 rounded-xl ${selectedPayment === 'klarna' ? 'border-[#FFB3C7] bg-[#FFB3C7]/10' : 'border-gray-100'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-left tracking-tight">Klarna</p>
                        <p className="text-xs text-gray-600 text-left">4 × ${(finalTotal / 4).toFixed(2)}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${selectedPayment === 'klarna' ? 'bg-[#FFB3C7] border-[#FFB3C7]' : 'border-gray-300'}`}></div>
                    </div>
                  </button>

                  <button 
                    onClick={() => setSelectedPayment('afterpay')}
                    className={`w-full p-3 border-2 rounded-xl ${selectedPayment === 'afterpay' ? 'border-[#B2FCE4] bg-[#B2FCE4]/10' : 'border-gray-100'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-left tracking-tight">Afterpay</p>
                        <p className="text-xs text-gray-600 text-left">4 × ${(finalTotal / 4).toFixed(2)}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${selectedPayment === 'afterpay' ? 'bg-[#B2FCE4] border-[#B2FCE4]' : 'border-gray-300'}`}></div>
                    </div>
                  </button>

                  <button 
                    onClick={() => setSelectedPayment('card')}
                    className={`w-full p-3 border-2 rounded-xl ${selectedPayment === 'card' ? 'border-black bg-gray-50' : 'border-gray-100'}`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium tracking-tight">Credit Card</p>
                      <div className={`w-4 h-4 rounded-full border-2 ${selectedPayment === 'card' ? 'bg-black border-black' : 'border-gray-300'}`}></div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="p-4 border-t bg-white">
                <button 
                  onClick={completeOrder}
                  disabled={!selectedPayment}
                  className="w-full py-3.5 bg-black text-white rounded-full disabled:opacity-50 tracking-tight"
                >
                  Complete · ${finalTotal.toFixed(2)}
                </button>
              </div>
            </>
          )}

          {checkoutStep === 'confirmation' && (
            <>
              <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white">
                <h3 className="text-lg tracking-tight">Confirmed</h3>
                <button onClick={closeCheckout} className="p-2">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h4 className="text-xl tracking-tight mb-2">Thank you!</h4>
                  <p className="text-sm text-gray-600">Order #{orderNumber}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-3 mb-3">
                      <div className="w-12 h-12 bg-white rounded-lg overflow-hidden">
                        <ImageWithFallback src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm tracking-tight">{item.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm tracking-tight">${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                  <div className="pt-3 border-t text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Total</span>
                      <span className="font-medium tracking-tight">${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                      <Package className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium tracking-tight">Processing</p>
                      <p className="text-xs text-gray-600">Being prepared</p>
                    </div>
                  </div>
                  <div className="flex gap-3 opacity-50">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                      <Truck className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-400 tracking-tight">Shipping</p>
                      <p className="text-xs text-gray-400">2-3 days</p>
                    </div>
                  </div>
                </div>

                {selectedPayment === 'klarna' && (
                  <div className="bg-pink-50 border border-pink-100 rounded-xl p-3 mb-3">
                    <p className="text-sm font-medium mb-1 tracking-tight">Klarna Plan</p>
                    <p className="text-xs text-gray-600">First ${(finalTotal / 4).toFixed(2)} today</p>
                  </div>
                )}

                {selectedPayment === 'afterpay' && (
                  <div className="bg-green-50 border border-green-100 rounded-xl p-3 mb-3">
                    <p className="text-sm font-medium mb-1 tracking-tight">Afterpay Plan</p>
                    <p className="text-xs text-gray-600">First ${(finalTotal / 4).toFixed(2)} today</p>
                  </div>
                )}
              </div>

              <div className="p-4 border-t bg-white">
                <button 
                  onClick={() => {
                    setCartItems([]);
                    closeCheckout();
                  }}
                  className="w-full py-3.5 bg-black text-white rounded-full tracking-tight"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Mobile Header with Social Bar */}
      <div className="bg-black text-white py-2 px-4 pt-8">
        <div className="flex items-center justify-between text-[10px] mb-2">
          <span className="text-gray-400 tracking-wider">FIND US</span>
          <div className="flex gap-3">
            <Instagram className="w-3.5 h-3.5" />
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
            <MessageCircle className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="py-6 px-6 border-b border-gray-100 bg-white">
        <div className="flex items-center justify-between mb-4">
          <button className="p-2 -ml-2">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <h1 className="text-base tracking-tighter font-light">LOPEZ JEWELRY</h1>
            <div className="px-1.5 py-0.5 bg-black rounded text-white text-[7px] font-medium flex items-center gap-0.5 tracking-wider">
              <svg className="w-2 h-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
          </div>
          <button 
            onClick={() => setCartOpen(true)}
            className="p-2 -mr-2 relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-black text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Banner Mobile */}
      <div className="py-8 px-6 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-2xl tracking-tight font-light mb-2">Timeless Elegance</h2>
        <p className="text-sm text-gray-600 mb-4 tracking-wide">Handcrafted fine jewelry</p>
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-2 text-[10px] mb-4">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
          <span className="tracking-wide"><strong>TikTok Shop</strong> – Shop from videos</span>
        </div>
      </div>

      {/* Featured Section */}
      <div className="px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg tracking-tight font-light">Featured</h2>
          <div className="flex items-center gap-0.5 text-amber-500">
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
          </div>
        </div>
        
        <div className="space-y-6">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="aspect-square bg-white relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-sm text-white text-[9px] rounded-full tracking-wider font-medium">
                  BESTSELLER
                </div>
              </div>
              <div className="p-4">
                <h3 className="tracking-tight mb-1">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-2 tracking-wide">{product.description}</p>
                <p className="mb-3 tracking-tight">${product.price.toLocaleString()}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full py-3 bg-black text-white rounded-full tracking-wide text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="px-6 py-8 bg-gray-50 mt-8">
        <div className="flex items-center justify-center gap-4 text-[10px] text-gray-600 mb-6 flex-wrap">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="tracking-wide">Free Ship</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="tracking-wide">Financing</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="tracking-wide">Warranty</span>
          </div>
        </div>

        {/* Shopify Badge */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-4 border-t border-gray-200">
          <span className="tracking-wide">Powered by</span>
          <svg className="h-3" viewBox="0 0 109 30" fill="#96bf48">
            <path d="M95.9 8.6c-.1 0-3.2-.4-3.2-.4s-2.1-2.1-2.4-2.4c-.3-.3-1-.2-1.2-.1 0 0-.2.1-.6.2-.4-1.3-1.2-2.5-2.6-2.5h-.1c-.8-.9-1.7-1.3-2.5-1.3-6.5 0-9.6 8.1-10.5 12.2-2.6.8-4.5 1.4-4.7 1.4-1.4.4-1.5.5-1.6 1.8-.1 1-3.5 27-3.5 27l26.7 4.6 11.8-2.9S95.9 8.9 95.9 8.6zM85.5 6.2c-.5.2-1.1.3-1.8.5V6c0-1-.1-1.8-.4-2.5.9.2 1.6 1.2 2.2 2.7zM81.2 7c-1.4.4-2.9.9-4.4 1.4.4-1.7 1.3-3.4 2.3-4.5.3-.3.8-.7 1.2-.9.5.8.8 2 .9 4zM78.1 3c.2 0 .4.1.6.2-.4.2-.9.6-1.4 1.1-1.4 1.5-2.4 3.9-2.7 6.2l-3.4 1.1c.9-3.5 3.4-8.6 6.9-8.6z"/>
            <path d="M95.7 9.2s-3.2-.4-3.2-.4-2.1-2.1-2.4-2.4c-.1-.1-.3-.2-.5-.2L84 30.7l11.8-2.9S95.8 9.5 95.7 9.2z" fillOpacity=".3"/>
            <path d="M78.2 13.9l-1.6 6.1s-1.8-1-4-.8c-3.2.2-3.2 2.3-3.2 2.8.2 2.8 7.4 3.4 7.8 9.9.3 5.1-2.7 8.6-7.1 8.9-5.3.3-8.2-2.8-8.2-2.8l1.1-4.8s2.9 2.2 5.3 2c1.5-.1 2.1-1.3 2-2.2-.3-3.6-6.1-3.4-6.4-9.3-.3-4.9 2.9-9.9 10-10.4 2.7-.2 4.1.4 4.1.4zM28.8 21.3L32.2 6s.3-1.2-.7-1.2h-6s-1 .1-1.3 1.2c0 0-3.4 9.4-4.9 13.6l-3-14.5s-.2-1.2-1.2-1.2H8.8s-1 .1-1.1 1.1c0 0-1.6 9.9-2.2 13.9-.1.6-.7 5.1-.7 5.2 0 0-.6 3.8 2.9 3.8h7.3s1-.1 1.1-1.1l1.2-7.5 3.4 8.4s.3 1.2 1.3 1.2h5.9c.8 0 1-.5 1-.5z" fill="#FFF"/>
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-3">
            <svg className="h-8" viewBox="0 0 109 30" fill="#96bf48">
              <path d="M95.9 8.6c-.1 0-3.2-.4-3.2-.4s-2.1-2.1-2.4-2.4c-.3-.3-1-.2-1.2-.1 0 0-.2.1-.6.2-.4-1.3-1.2-2.5-2.6-2.5h-.1c-.8-.9-1.7-1.3-2.5-1.3-6.5 0-9.6 8.1-10.5 12.2-2.6.8-4.5 1.4-4.7 1.4-1.4.4-1.5.5-1.6 1.8-.1 1-3.5 27-3.5 27l26.7 4.6 11.8-2.9S95.9 8.9 95.9 8.6zM85.5 6.2c-.5.2-1.1.3-1.8.5V6c0-1-.1-1.8-.4-2.5.9.2 1.6 1.2 2.2 2.7zM81.2 7c-1.4.4-2.9.9-4.4 1.4.4-1.7 1.3-3.4 2.3-4.5.3-.3.8-.7 1.2-.9.5.8.8 2 .9 4zM78.1 3c.2 0 .4.1.6.2-.4.2-.9.6-1.4 1.1-1.4 1.5-2.4 3.9-2.7 6.2l-3.4 1.1c.9-3.5 3.4-8.6 6.9-8.6z"/>
              <path d="M95.7 9.2s-3.2-.4-3.2-.4-2.1-2.1-2.4-2.4c-.1-.1-.3-.2-.5-.2L84 30.7l11.8-2.9S95.8 9.5 95.7 9.2z" fillOpacity=".3"/>
              <path d="M78.2 13.9l-1.6 6.1s-1.8-1-4-.8c-3.2.2-3.2 2.3-3.2 2.8.2 2.8 7.4 3.4 7.8 9.9.3 5.1-2.7 8.6-7.1 8.9-5.3.3-8.2-2.8-8.2-2.8l1.1-4.8s2.9 2.2 5.3 2c1.5-.1 2.1-1.3 2-2.2-.3-3.6-6.1-3.4-6.4-9.3-.3-4.9 2.9-9.9 10-10.4 2.7-.2 4.1.4 4.1.4zM28.8 21.3L32.2 6s.3-1.2-.7-1.2h-6s-1 .1-1.3 1.2c0 0-3.4 9.4-4.9 13.6l-3-14.5s-.2-1.2-1.2-1.2H8.8s-1 .1-1.1 1.1c0 0-1.6 9.9-2.2 13.9-.1.6-.7 5.1-.7 5.2 0 0-.6 3.8 2.9 3.8h7.3s1-.1 1.1-1.1l1.2-7.5 3.4 8.4s.3 1.2 1.3 1.2h5.9c.8 0 1-.5 1-.5z" fill="#FFF"/>
            </svg>
            <h1 className="text-4xl tracking-tight font-light">Lopez Jewelry Store</h1>
            <div className="px-4 py-2 bg-black rounded-lg text-white text-sm font-medium flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span className="tracking-wide">TikTok Shop</span>
            </div>
          </div>
          <p className="text-gray-600 tracking-wide">Luxury Shopify store with TikTok Shop integration &amp; flexible financing</p>
        </div>
      </div>

      {/* Mockups Container */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Laptop Mockup */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
                  <path d="M8 21h8" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 17v4" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl tracking-tight">Desktop Experience</h2>
                <p className="text-sm text-gray-600 tracking-wide">Full e-commerce + TikTok Shop</p>
              </div>
            </div>

            {/* Laptop Frame */}
            <div className="bg-gray-800 rounded-t-2xl p-3 shadow-2xl">
              <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 mx-2">
                    lopez-jewelry.myshopify.com
                  </div>
                </div>

                <DesktopStore />
              </div>
            </div>
            <div className="bg-gray-700 h-4 rounded-b-2xl shadow-lg"></div>
            <div className="bg-gray-600 h-1 w-48 mx-auto rounded-b-lg"></div>
          </div>

          {/* Phone Mockup */}
          <div className="space-y-6 lg:pt-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2" />
                  <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl tracking-tight">Mobile Experience</h2>
                <p className="text-sm text-gray-600 tracking-wide">Shop from TikTok or website</p>
              </div>
            </div>

            <div className="max-w-[340px] mx-auto">
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                  
                  <MobileStore />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm tracking-tight mb-3">TikTok Shop Integration</h3>
              <p className="text-sm text-gray-600 leading-relaxed tracking-wide">
                Official TikTok for Shopify app. Products sync automatically—customers shop directly from videos, live streams, and your profile.
              </p>
            </div>
            <div>
              <h3 className="text-sm tracking-tight mb-3">Luxury Shopping Experience</h3>
              <p className="text-sm text-gray-600 leading-relaxed tracking-wide">
                High-end design with flexible financing (Klarna, Afterpay), secure checkout, order tracking, and white-glove customer service.
              </p>
            </div>
            <div>
              <h3 className="text-sm tracking-tight mb-3">Social Commerce Ready</h3>
              <p className="text-sm text-gray-600 leading-relaxed tracking-wide">
                Multi-channel presence on Instagram, TikTok, Facebook, and WhatsApp. Build community, showcase craftsmanship, drive conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
