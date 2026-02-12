import Navigation from "./Navigation";
import {
  Plus,
  Search,
  Package,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  MoreVertical,
} from "lucide-react";

export default function Frame4() {
  const products = [
    { id: 1, name: "Classic Gold Ring", price: "$2,850", stock: 3, status: "Active" },
    { id: 2, name: "Diamond Necklace", price: "$4,200", stock: 1, status: "Active" },
    { id: 3, name: "Silver Bracelet", price: "$1,650", stock: 5, status: "Active" },
    { id: 4, name: "Pearl Earrings", price: "$980", stock: 0, status: "Sold Out" },
  ];

  const recentOrders = [
    { id: "#4892", customer: "Sarah M.", total: "$2,850", status: "Completed" },
    { id: "#4891", customer: "James K.", total: "$4,200", status: "Processing" },
    { id: "#4890", customer: "Emily R.", total: "$1,650", status: "Shipped" },
  ];

  // Shared styling helpers (black-primary, cleaner neutrals)
  const primaryBtn =
    "bg-black text-white hover:bg-black/90 transition-colors";
  const iconChip =
    "w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200";
  const card =
    "rounded-2xl p-6 border border-gray-200 bg-white shadow-sm";
  const tableWrap =
    "border border-gray-200 rounded-2xl overflow-hidden bg-white";
  const thead =
    "bg-[#FAFAFA] border-b border-gray-200";

  return (
    <div className="min-h-screen bg-white">
      {/* Frame Label */}
      <div className="bg-[#F5F5F5] py-3 px-6 border-b border-gray-200">
        <p className="text-sm text-gray-600">Frame 4: Shopify Admin Dashboard</p>
      </div>

      {/* Desktop View */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="bg-white">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl text-[#111111] mb-2">Dashboard</h1>
            <p className="text-sm text-gray-600">Manage your online store</p>
          </header>

          {/* Stats Overview */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            <div className={card}>
              <div className="flex items-center justify-between mb-4">
                <div className={iconChip}>
                  <DollarSign className="w-5 h-5 text-[#111111]" />
                </div>
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-2xl text-[#111111] mb-1">$18,450</p>
              <p className="text-xs text-gray-600">Total Sales</p>
            </div>

            <div className={card}>
              <div className="flex items-center justify-between mb-4">
                <div className={iconChip}>
                  <ShoppingCart className="w-5 h-5 text-[#111111]" />
                </div>
              </div>
              <p className="text-2xl text-[#111111] mb-1">24</p>
              <p className="text-xs text-gray-600">Orders</p>
            </div>

            <div className={card}>
              <div className="flex items-center justify-between mb-4">
                <div className={iconChip}>
                  <Package className="w-5 h-5 text-[#111111]" />
                </div>
              </div>
              <p className="text-2xl text-[#111111] mb-1">12</p>
              <p className="text-xs text-gray-600">Products</p>
            </div>

            <div className={card}>
              <div className="flex items-center justify-between mb-4">
                <div className={iconChip}>
                  <span className="text-sm text-[#111111]">$</span>
                </div>
              </div>
              <p className="text-2xl text-[#111111] mb-1">$768</p>
              <p className="text-xs text-gray-600">Avg. Order Value</p>
            </div>
          </div>

          {/* Products Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-[#111111]">Products</h2>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <button className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${primaryBtn}`}>
                  <Plus className="w-4 h-4" />
                  Add Product
                </button>
              </div>
            </div>

            <div className={tableWrap}>
              <table className="w-full">
                <thead className={thead}>
                  <tr>
                    <th className="text-left px-6 py-4 text-xs text-gray-600 font-normal">Product</th>
                    <th className="text-left px-6 py-4 text-xs text-gray-600 font-normal">Price</th>
                    <th className="text-left px-6 py-4 text-xs text-gray-600 font-normal">Stock</th>
                    <th className="text-left px-6 py-4 text-xs text-gray-600 font-normal">Status</th>
                    <th className="text-left px-6 py-4 text-xs text-gray-600 font-normal"></th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {products.map((product, index) => (
                    <tr
                      key={product.id}
                      className={[
                        index !== products.length - 1 ? "border-b border-gray-100" : "",
                        "hover:bg-gray-50 transition-colors",
                      ].join(" ")}
                    >
                      <td className="px-6 py-4 text-sm text-[#111111]">{product.name}</td>
                      <td className="px-6 py-4 text-sm text-[#111111]">{product.price}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{product.stock}</td>
                      <td className="px-6 py-4">
                        <span
                          className={[
                            "inline-flex px-3 py-1 rounded-full text-xs border",
                            product.status === "Active"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : "bg-gray-50 text-gray-700 border-gray-200",
                          ].join(" ")}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical className="w-4 h-4 text-gray-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Recent Orders Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-[#111111]">Recent Orders</h2>
              <button className="text-sm text-gray-600 hover:text-[#111111] transition-colors">
                View All
              </button>
            </div>

            <div className={tableWrap}>
              <table className="w-full">
                <thead className={thead}>
                  <tr>
                    <th className="text-left px-6 py-4 text-xs text-gray-600 font-normal">Order ID</th>
                    <th className="text-left px-6 py-4 text-xs text-gray-600 font-normal">Customer</th>
                    <th className="text-left px-6 py-4 text-xs text-gray-600 font-normal">Total</th>
                    <th className="text-left px-6 py-4 text-xs text-gray-600 font-normal">Status</th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {recentOrders.map((order, index) => (
                    <tr
                      key={order.id}
                      className={[
                        index !== recentOrders.length - 1 ? "border-b border-gray-100" : "",
                        "hover:bg-gray-50 transition-colors",
                      ].join(" ")}
                    >
                      <td className="px-6 py-4 text-sm text-[#111111]">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-[#111111]">{order.customer}</td>
                      <td className="px-6 py-4 text-sm text-[#111111]">{order.total}</td>
                      <td className="px-6 py-4">
                        <span
                          className={[
                            "inline-flex px-3 py-1 rounded-full text-xs border",
                            order.status === "Completed"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : order.status === "Processing"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : "bg-yellow-50 text-yellow-800 border-yellow-200",
                          ].join(" ")}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

      <Navigation />
    </div>
  );
}
