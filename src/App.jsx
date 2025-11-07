import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import FeaturedGames from "./components/FeaturedGames";
import NewsCTA from "./components/NewsCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <FeaturedGames />
        <NewsCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
