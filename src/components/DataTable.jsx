export function DataTable({ data }) {
  const databases = data?.databases || []

  if (databases.length === 0) {
    return (
      <div className="bg-slate-800 rounded-lg p-8 text-center">
        <p className="text-slate-300">No hay datos disponibles</p>
      </div>
    )
  }

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-700">
              <th className="px-6 py-3 text-left text-white font-semibold">Base de Datos</th>
              <th className="px-6 py-3 text-left text-white font-semibold">Tipo</th>
              <th className="px-6 py-3 text-left text-white font-semibold">Tamaño (GB)</th>
              <th className="px-6 py-3 text-left text-white font-semibold">Tablas</th>
              <th className="px-6 py-3 text-left text-white font-semibold">Conexiones</th>
              <th className="px-6 py-3 text-left text-white font-semibold">Desempeño</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {databases.map((db, idx) => (
              <tr key={idx} className="hover:bg-slate-700 transition">
                <td className="px-6 py-4 text-white font-medium">{db.name}</td>
                <td className="px-6 py-4 text-slate-300">
                  <span className="px-3 py-1 bg-blue-500 text-white rounded text-sm">{db.type}</span>
                </td>
                <td className="px-6 py-4 text-slate-300">{db.size_gb} GB</td>
                <td className="px-6 py-4 text-slate-300">{db.tables}</td>
                <td className="px-6 py-4 text-slate-300">{db.connections}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-slate-600 rounded h-2 max-w-xs">
                      <div
                        className="bg-green-500 h-2 rounded"
                        style={{ width: `${db.performance || 0}%` }}
                      />
                    </div>
                    <span className="text-white text-sm font-semibold w-12 text-right">{db.performance}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
