import CardGrid from "../component/CardGrid";
import Hero from "../component/Hero";

const Home = ({ features }) => {
  return (
    <>
      <Hero
        title="Solusi Terbaik untuk Bisnismu"
        subtitle="Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil."
        buttonText="Mulai Gratis"
        onTap={() => console.log("Button clicked!")}
      />

      {/* <CardGrid features={features} /> */}
    </>
  );
};

export default Home;
