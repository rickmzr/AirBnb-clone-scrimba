import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./assets/data";
import Card from "./components/Card";

function App() {
  const experienceCards = data.map((data) => {
    return (
      <Card
        key={data.id}
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
        description={data.description}
        openSpots={data.openSpots}
      />
    );
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
