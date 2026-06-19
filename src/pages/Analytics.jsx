import { useState } from "react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell,
} from "recharts";
import { analyticsData } from "../data/products";
import "./Analytics.css";

const channelData = [
  { name: "Organic Search", value: 38, sessions: 33820 },
  { name: "Direct", value: 24, sessions: 21360 },
  { name: "Social Media", value: 20, sessions: 17800 },
  { name: "Email", value: 12, sessions: 10680 },
  { name: "Paid Ads", value: 6, sessions: 5340 },
];

const COLORS = ["#006A4E", "#C9A84C", "#00895f", "#8B6914", "#c46a2e"];

const kpis = [
  { label: "Total Sessions", value: "89,412", change: "+21%", up: true },
  { label: "Revenue (BDT)", value: "৳ 42,00,000", change: "+24%", up: true },
  { label: "Conversion Rate", value: "4.3%", change: "+0.2pp", up: true },
  { label: "Avg Order Value", value: "৳ 5,280", change: "-3%", up: false },
];

export default function Analytics() {
  const [activeMetric, setActiveMetric] = useState("revenue");

  return (
    <div className="analytics-page container">
      <div className="analytics-hero">
        <p className="section-label">Digital Marketing Analytics</p>
        <h1>Performance Dashboard</h1>
        <p>GA4 & attribution data for Aarong's digital channels — Jan to Jun 2025</p>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        {kpis.map((k) => (
          <div key={k.label} className="kpi-card">
            <p className="kpi-label">{k.label}</p>
            <p className="kpi-value">{k.value}</p>
            <span className={`kpi-change ${k.up ? "up" : "down"}`}>
              {k.change} vs prev period
            </span>
          </div>
        ))}
      </div>

      {/* Line / Bar chart toggle */}
      <div className="chart-card">
        <div className="chart-header">
          <h2>Monthly Trends</h2>
          <div className="chart-tabs">
            {["revenue", "sessions", "conversion"].map((m) => (
              <button
                key={m}
                className={`chart-tab ${activeMetric === m ? "active" : ""}`}
                onClick={() => setActiveMetric(m)}
              >
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={analyticsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0ece6" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey={activeMetric}
              stroke="#006A4E"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#006A4E" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="charts-row">
        {/* Channel Bar Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h2>Sessions by Channel</h2>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={channelData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0ece6" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={100} />
              <Tooltip />
              <Bar dataKey="sessions" fill="#006A4E" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h2>Channel Mix</h2>
          </div>
          <div className="pie-wrap">
            <ResponsiveContainer width="50%" height={220}>
              <PieChart>
                <Pie data={channelData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value">
                  {channelData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="pie-legend">
              {channelData.map((d, i) => (
                <div key={d.name} className="legend-item">
                  <span className="legend-dot" style={{ background: COLORS[i] }} />
                  <span>{d.name}</span>
                  <span className="legend-pct">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* A/B Test Table */}
      <div className="chart-card">
        <div className="chart-header">
          <h2>A/B Test Results</h2>
          <span className="tag">June 2025</span>
        </div>
        <div className="table-wrap">
          <table className="ab-table">
            <thead>
              <tr>
                <th>Test</th>
                <th>Variant A</th>
                <th>Variant B</th>
                <th>Uplift</th>
                <th>Confidence</th>
                <th>Winner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CTA Button Colour</td>
                <td>Green (#006A4E)</td>
                <td>Gold (#C9A84C)</td>
                <td>+12.4%</td>
                <td>98%</td>
                <td className="winner">B ✓</td>
              </tr>
              <tr>
                <td>Homepage Hero</td>
                <td>Static image</td>
                <td>Artisan video</td>
                <td>+8.1%</td>
                <td>95%</td>
                <td className="winner">B ✓</td>
              </tr>
              <tr>
                <td>Product Card Layout</td>
                <td>Grid (3-col)</td>
                <td>List view</td>
                <td>-3.2%</td>
                <td>91%</td>
                <td className="winner">A ✓</td>
              </tr>
              <tr>
                <td>Email Subject Line</td>
                <td>Discount-led</td>
                <td>Story-led</td>
                <td>+18.7%</td>
                <td>99%</td>
                <td className="winner">B ✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
