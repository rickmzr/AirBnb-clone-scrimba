import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./assets/data";
import Card from "./components/Card";

function App() {
  const experienceCards = data.map((data) => {
    return (
      <Card
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
        description={data.description}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      {experienceCards}
    </>
  );
}

export default App;
