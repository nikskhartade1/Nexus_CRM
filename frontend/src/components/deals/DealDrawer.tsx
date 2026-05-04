const DealDrawer = ({ deal, onClose }: any) => {
  return (
    <div className="w-[420px] bg-white shadow-xl p-4">
      
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Deal Details</h2>
        <button onClick={onClose}>✖</button>
      </div>

      <div className="mt-4 space-y-3">
        <p><b>{deal.title}</b></p>
        <p>{deal.company}</p>
        <p>{deal.value}</p>

        {/* Call Section */}
        <button className="bg-green-500 text-white px-3 py-2 rounded w-full">
          Call Now
        </button>

        {/* WhatsApp */}
        <div className="border rounded p-2 mt-4">
          <p className="text-sm text-gray-500">WhatsApp Chat</p>
          <div className="bg-gray-100 p-2 mt-2 rounded">
            Hi Rajesh, follow up on CRM?
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealDrawer;