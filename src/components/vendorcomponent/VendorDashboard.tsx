const VendorDashboard: React.FC = () => {
  const stats = [
    { label: "Today's Sales", value: "₹4,250", grow: "+12%", icon: "💰" },
    {
      label: "Pending Orders",
      value: "12",
      grow: "Action Required",
      icon: "📦",
    },
    { label: "Store Rating", value: "4.8", grow: "Top Vendor", icon: "⭐" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar - Desktop */}
      <aside className="w-64 bg-slate-900 p-6 hidden md:flex flex-col">
        <h2 className="text-xl font-black text-white italic mb-10">
          GM <span className="text-green-500">PARTNER</span>
        </h2>
        <nav className="space-y-4 flex-1">
          {["Dashboard", "Orders", "Inventory", "Payouts", "Settings"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider ${item === "Dashboard" ? "bg-green-600 text-white" : "text-slate-400 hover:bg-slate-800"}`}
              >
                {item}
              </a>
            ),
          )}
        </nav>
        <button className="mt-auto bg-slate-800 text-red-400 py-3 rounded-xl font-bold text-xs uppercase tracking-widest">
          Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-black text-slate-900 uppercase">
              Welcome back, Gupta Ji!
            </h1>
            <p className="text-slate-500 font-medium">
              Here is what's happening in your shop today.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-black text-slate-900 uppercase tracking-widest">
              Store Open
            </span>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-md uppercase">
                  {stat.grow}
                </span>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <h3 className="font-black text-slate-900 uppercase tracking-tight">
              Recent Orders
            </h3>
            <button className="text-xs font-bold text-green-600 uppercase">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Items</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[1, 2, 3].map((order) => (
                  <tr
                    key={order}
                    className="text-sm font-medium text-slate-700"
                  >
                    <td className="px-6 py-4">#GM-9921</td>
                    <td className="px-6 py-4">Rahul S.</td>
                    <td className="px-6 py-4">5 Items</td>
                    <td className="px-6 py-4 font-bold">₹840</td>
                    <td className="px-6 py-4">
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-[10px] font-black uppercase">
                        Pending
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VendorDashboard;
