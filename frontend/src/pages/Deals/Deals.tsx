import React from "react";

const dealsData = {
  New: [
    { name: "Website Development", company: "ABC Pvt Ltd", amount: "₹50,000" },
  ],
  Proposal: [
    { name: "Mobile App", company: "XYZ Tech", amount: "₹1,20,000" },
  ],
  Negotiation: [],
  "Closed Won": [
    { name: "CRM Setup", company: "PQR Solutions", amount: "₹80,000" },
  ],
};

const Deals = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">

      {/* 🔷 HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Deals Dashboard</h1>
        <input
          type="text"
          placeholder="Search deals..."
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg outline-none"
        />
      </div>

      {/* 🔷 STATS */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Stat title="Total Deals" value="12" />
        <Stat title="Revenue" value="₹5,20,000" />
        <Stat title="Won Deals" value="4" />
        <Stat title="Lost Deals" value="2" />
      </div>

      {/* 🔷 PIPELINE */}
      <div className="flex gap-5 overflow-x-auto pb-4">

        {Object.entries(dealsData).map(([stage, deals]) => (
          <div
            key={stage}
            className="min-w-[280px] bg-gray-800 rounded-xl p-4"
          >
            {/* Column Header */}
            <h3 className="text-lg font-semibold mb-4">{stage}</h3>

            {/* Cards */}
            {deals.length === 0 ? (
              <p className="text-gray-400 text-sm">No deals</p>
            ) : (
              deals.map((deal, i) => (
                <div
                  key={i}
                  className="bg-gray-700 p-4 rounded-lg mb-3 hover:shadow-lg transition"
                >
                  <h4 className="font-semibold">{deal.name}</h4>
                  <p className="text-sm text-gray-300">{deal.company}</p>
                  <p className="mt-2 font-bold">{deal.amount}</p>

                  {/* Actions */}
                  <div className="flex gap-2 mt-3">
                    <button className="bg-blue-500 px-3 py-1 rounded text-xs hover:bg-blue-600">
                      Call
                    </button>
                    <button className="bg-green-500 px-3 py-1 rounded text-xs hover:bg-green-600">
                      WhatsApp
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

const Stat = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-gray-800 p-4 rounded-xl">
    <p className="text-gray-400 text-sm">{title}</p>
    <h2 className="text-xl font-bold">{value}</h2>
  </div>
);

export default Deals;