import CanvasModel from './canvas/CanvasModel';
import { Customizer, Home } from "./pages";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  )
}

export default App;