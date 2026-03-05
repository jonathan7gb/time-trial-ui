import Header from "./components/Header"
import Hero from "./components/Hero"
import Team from "./components/Team"

function App() {

  return (
    <div className="min-h-screen bg-[var(--color-background)] transition-colors">
      <Header />
      <div className="max-w-2xl mx-auto text-center mb-4">
        <h2 className="text-2xl  md:text-4xl text-foreground font-sans tracking-wide italic text-primary">
          Ranking
        </h2>
        <p className="mt-1 text-muted-foreground-2 text-[var(--color-text)] font-mono">
          Top 10 Fastest Cars and Top 10 Recently Cars
        </p>
      </div>
      <Hero />
      <Team />
    </div>
  )
}

export default App
