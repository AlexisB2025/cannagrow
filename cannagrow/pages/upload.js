// pages/upload.js
import { useState } from 'react'

export default function Upload() {
  const [file, setFile] = useState(null)
  const [analysis, setAnalysis] = useState(null)

  const handleUpload = (e) => {
    e.preventDefault()
    if (file) {
      // Placeholder para análisis
      setAnalysis({
        strain: 'Indica/Mock',
        type: 'Indica',
        thc: '18%',
        cbd: '1%'
      })
    }
  }

  return (
    <div className="upload-container">
      <h1>Subir Foto de Cannabis</h1>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button type="submit">Analizar</button>
      </form>

      {analysis && (
        <div className="analysis-result">
          <p>Cepa: {analysis.strain}</p>
          <p>Tipo: {analysis.type}</p>
          <p>THC: {analysis.thc}</p>
          <p>CBD: {analysis.cbd}</p>
        </div>
      )}
    </div>
  )
}
