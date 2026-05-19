import { useRef } from 'react'

export function FileUpload({ onUpload, loading }) {
  const fileInputRef = useRef(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (!file) return

    if (!file.name.endsWith('.json')) {
      alert('Por favor selecciona un archivo JSON')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result)
        onUpload(jsonData)
      } catch (error) {
        alert('Error al parsear JSON: ' + error.message)
      }
    }
    reader.readAsText(file)
  }

  return (
    <div className="flex items-center justify-center min-h-96">
      <div className="w-full max-w-md">
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-blue-400 rounded-lg p-12 text-center cursor-pointer hover:border-blue-300 hover:bg-slate-700 transition"
        >
          <div className="text-5xl mb-4">📁</div>
          <h2 className="text-2xl font-bold text-white mb-2">Carga tu archivo JSON</h2>
          <p className="text-slate-300 mb-4">Arrastra y suelta o haz clic para seleccionar</p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleFileChange}
            disabled={loading}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={loading}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold disabled:opacity-50"
          >
            {loading ? 'Procesando...' : 'Seleccionar archivo'}
          </button>
        </div>
      </div>
    </div>
  )
}
