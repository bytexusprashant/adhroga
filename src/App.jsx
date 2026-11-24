import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PageV1 from './v1/main.jsx'
import PageV2 from './v2/main.jsx'



import { createRoot } from 'react-dom/client'

import './styles.css'
export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/v1" replace />} />
      <Route path="/v1" element={<PageV1 />} />
      <Route path="/v2" element={<PageV2 />} />
      <Route path="*" element={<Navigate to="/v1" replace />} />
    </Routes>
  </BrowserRouter>
}


createRoot(document.getElementById('root')).render(<App />)
