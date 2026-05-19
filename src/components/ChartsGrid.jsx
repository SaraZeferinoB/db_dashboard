import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export function ChartsGrid({ data }) {
  const databases = data?.databases || []

  const performanceData = databases.map(db => ({
    name: db.name,
    performance: db.performance || 0
  }))

  const sizeData = databases.map(db => ({
    name: db.name,
    size: db.size_gb || 0
  }))

  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Performance Chart */}
      <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-white font-bold mb-4">📊 Desempeño por BD</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937' }} />
            <Bar dataKey="performance" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Size Chart */}
      <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-white font-bold mb-4">💾 Tamaño de BD (GB)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sizeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937' }} />
            <Line type="monotone" dataKey="size" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Distribution */}
      <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-white font-bold mb-4">🔄 Distribución de Conexiones</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={databases} dataKey="connections" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
              {databases.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#1f2937' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Tables Distribution */}
      <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-white font-bold mb-4">📑 Cantidad de Tablas</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={databases}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937' }} />
            <Bar dataKey="tables" fill="#f59e0b" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
