// app/stats/page.tsx
import StatsCard from "./StatsCard";
import ActivityChart from "./ActivityChart";

export default function StatsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Your Stats</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StatsCard title="Total Entries" value="24" icon="📓" />
        <StatsCard title="Weekly Streak" value="5 Days" icon="📅" />
        <StatsCard title="Last 7 Days" value="10 Entries" icon="🔁" />
      </div>
      <ActivityChart/>
    </div>
  );
}
