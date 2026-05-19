export function DatabaseMetrics({ data }) {
  const metrics = data?.metrics || {}
  const databases = data?.databases || []

  const cards = [
    {
      title: 'Total de Bases de Datos',
      value: databases.length,
      icon: '🗄️',
      color: 'from-blue-600 to-blue-400'
    },
    {
      title: 'Consultas Totales',
      value: (metrics.total_queries || 0).toLocaleString(),
      icon: '⚡',
      color: 'from-green-600 to-green-400'
    },
    {
      title: 'Tiempo Promedio',
      value: `${metrics.avg_response_time_ms || 0}ms`,
      icon: '⏱️',
      color: 'from-purple-600 to-purple-400'
    },
    {
      title: 'Disponibilidad',
      value: `${metrics.uptime_percentage || 0}%`,
      icon: '✅',
      color: 'from-orange-600 to-orange-400'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`bg-gradient-to-br ${card.color} rounded-lg p-6 text-white shadow-lg`}
        >
          <div className="text-3xl mb-2">{card.icon}</div>
          <p className="text-sm opacity-90 mb-1">{card.title}</p>
          <p className="text-3xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  )
}
