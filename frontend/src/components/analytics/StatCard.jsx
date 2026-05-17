export default function StatCard({ label, value, icon }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          {label}
        </span>
        <span className="text-gray-300">{icon}</span>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}
