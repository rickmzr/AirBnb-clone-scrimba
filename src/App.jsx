import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./assets/data";
import Card from "./components/Card";

function App() {
  const experienceCards = data.map((data) => {
    return <Card key={data.id} item={data} />;
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{experienceCards}</section>
    </>
  );
}

export default App;
