import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MinhasReunioes from "./pages/MinhasReunioes"
import AgendarReuniao from "./pages/AgendarReuniao"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} caseSensitive={false} />
        <Route path="/agendar-reuniao" element={<AgendarReuniao />} caseSensitive={false} />
        <Route path="/minhas-reunioes" element={<MinhasReunioes />} caseSensitive={false} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
