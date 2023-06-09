import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </>
  );
}

export default App;
