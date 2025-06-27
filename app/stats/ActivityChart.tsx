// app/stats/ActivityChart.tsx
'use client'

import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


// Dummy data showing entries per weekday
const data = [
  { day: "Mon", entries: 3 },
  { day: "Tue", entries: 1 },
  { day: "Wed", entries: 2 },
  { day: "Thu", entries: 0 },
  { day: "Fri", entries: 4 },
  { day: "Sat", entries: 2 },
  { day: "Sun", entries: 1 },
]

export default function ActivityChart() {
  return (
    <div className="w-full h-64 bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="entries" fill="#4F46E5" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
