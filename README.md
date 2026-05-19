# 📊 DB Dashboard - Dashboard Gerencial

Dashboard gerencial interactivo para visualizar información de bases de datos mediante carga de archivos JSON.

## ✨ Características

- 📤 Carga de archivos JSON
- 📈 Gráficas interactivas
- 💼 Interfaz gerencial profesional
- 📊 Múltiples tipos de visualización
- 🎨 Diseño responsivo

## 🚀 Inicio Rápido

### Requisitos
- Node.js 16+
- npm o yarn

### Instalación

```bash
npm install
npm run dev
```

## 📊 Formato JSON Esperado

```json
{
  "databases": [
    {
      "name": "PostgreSQL",
      "type": "SQL",
      "size_gb": 125.5,
      "tables": 45,
      "connections": 1250,
      "performance": 95
    }
  ],
  "metrics": {
    "total_queries": 50000,
    "avg_response_time_ms": 45,
    "uptime_percentage": 99.9
  }
}
```

## 🛠️ Uso

1. Instala dependencias: `npm install`
2. Inicia desarrollo: `npm run dev`
3. Carga tu archivo JSON con datos de BD
4. ¡Visualiza tus datos en gráficas interactivas!
