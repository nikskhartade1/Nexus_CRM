const Sidebar = () => {
  return (
    <div className="w-60 bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">NexusCRM</h1>

      <ul className="space-y-3">
        <li className="text-gray-400">Dashboard</li>
        <li className="bg-blue-600 p-2 rounded">Deals</li>
        <li>Leads</li>
        <li>Contacts</li>
        <li>WhatsApp</li>
      </ul>
    </div>
  );
};

export default Sidebar;