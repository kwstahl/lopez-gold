import Navigation from "./Navigation";
import { User, Mail, BarChart3, Tag, Lock } from "lucide-react";

export default function Frame5() {
  return (
    <div className="min-h-screen bg-white">
      {/* Frame Label */}
      <div className="bg-[#F5F5F5] py-3 px-6 border-b border-gray-200">
        <p className="text-sm text-gray-600">Frame 5: Optional Expansion Features</p>
      </div>

      {/* Desktop View */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="bg-white">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl text-[#111111] mb-2">Expansion Options</h1>
            <p className="text-sm text-gray-600">Additional features available for your store</p>
          </header>

          <div className="grid grid-cols-2 gap-8 mb-12">
            {/* Customer Accounts */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center mb-6">
                <User className="w-6 h-6 text-[#111111]" />
              </div>
              <h3 className="text-xl text-[#111111] mb-3">Customer Accounts</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Allow customers to create accounts, save shipping information, and view order history.
              </p>
              
              {/* Mock UI */}
              <div className="bg-[#F5F5F5] rounded-xl p-6 space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-sm text-[#111111]">customer@email.com</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Password</p>
                  <p className="text-sm text-[#111111]">••••••••</p>
                </div>
                <button className="w-full py-2 bg-[#111111] text-white rounded-lg text-sm">
                  Sign In
                </button>
              </div>
            </div>

            {/* VIP Portal */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-[#111111]" />
              </div>
              <h3 className="text-xl text-[#111111] mb-3">VIP Buyer Portal</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Create an exclusive portal for VIP customers with early access to new items and special pricing.
              </p>
              
              {/* Mock UI */}
              <div className="bg-[#F5F5F5] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center text-white text-sm">
                    VIP
                  </div>
                  <div>
                    <p className="text-sm text-[#111111]">Sarah Martinez</p>
                    <p className="text-xs text-gray-600">Gold Member</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                    <span className="text-xs text-gray-600">Early Access</span>
                    <span className="text-xs text-green-600">Active</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                    <span className="text-xs text-gray-600">VIP Discount</span>
                    <span className="text-xs text-[#111111]">15%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Automation */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-[#111111]" />
              </div>
              <h3 className="text-xl text-[#111111] mb-3">Email Automation</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Automated order confirmations, shipping updates, and abandoned cart recovery emails.
              </p>
              
              {/* Mock UI */}
              <div className="bg-[#F5F5F5] rounded-xl p-6 space-y-3">
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-[#111111]">Order Confirmation</p>
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">Active</span>
                  </div>
                  <p className="text-xs text-gray-600">Sent automatically after purchase</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-[#111111]">Shipping Update</p>
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Active</span>
                  </div>
                  <p className="text-xs text-gray-600">Sent when order ships</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-[#111111]">Cart Recovery</p>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Optional</span>
                  </div>
                  <p className="text-xs text-gray-600">Recover abandoned carts</p>
                </div>
              </div>
            </div>

            {/* Discount Campaigns */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center mb-6">
                <Tag className="w-6 h-6 text-[#111111]" />
              </div>
              <h3 className="text-xl text-[#111111] mb-3">Promotions & Discounts</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Create discount codes, run seasonal promotions, and offer special deals to customers.
              </p>
              
              {/* Mock UI */}
              <div className="bg-[#F5F5F5] rounded-xl p-6">
                <div className="bg-white rounded-lg p-4 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm text-[#111111] mb-1">WELCOME15</p>
                      <p className="text-xs text-gray-600">15% off first purchase</p>
                    </div>
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">Active</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm text-[#111111] mb-1">SPRING2026</p>
                      <p className="text-xs text-gray-600">$500 off orders over $3000</p>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Scheduled</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-[#111111] text-white rounded-lg text-sm">
                  Create Discount Code
                </button>
              </div>
            </div>
          </div>

          {/* Analytics Dashboard */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-[#111111]" />
              </div>
              <div>
                <h3 className="text-xl text-[#111111] mb-1">Analytics Dashboard</h3>
                <p className="text-sm text-gray-600">Track sales performance, customer behavior, and inventory trends</p>
              </div>
            </div>

            {/* Mock Analytics UI */}
            <div className="bg-[#F5F5F5] rounded-xl p-8">
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6">
                  <p className="text-xs text-gray-600 mb-2">Total Revenue</p>
                  <p className="text-3xl text-[#111111] mb-1">$42,850</p>
                  <p className="text-xs text-green-600">+12.5% from last month</p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <p className="text-xs text-gray-600 mb-2">Conversion Rate</p>
                  <p className="text-3xl text-[#111111] mb-1">3.8%</p>
                  <p className="text-xs text-green-600">+0.4% from last month</p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <p className="text-xs text-gray-600 mb-2">Avg. Order Value</p>
                  <p className="text-3xl text-[#111111] mb-1">$768</p>
                  <p className="text-xs text-gray-600">Stable</p>
                </div>
              </div>

              {/* Simple Bar Chart Visualization */}
              <div className="bg-white rounded-xl p-6">
                <p className="text-sm text-[#111111] mb-6">Sales by Month</p>
                <div className="flex items-end gap-4 h-48">
                  {[40, 65, 45, 80, 70, 90, 100].map((height, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-[#111111] rounded-t-lg transition-all hover:bg-gray-700"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-xs text-gray-500">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
}
