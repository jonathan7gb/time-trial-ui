import Header from "./components/Header"
import Hero from "./components/Hero"
import Team from "./components/Team"

function App() {

  return (
    <div className="min-h-screen bg-[var(--color-background)] transition-colors">
      <Header />
      <Hero />
      <Team />
    </div>
  )
}

export default App
