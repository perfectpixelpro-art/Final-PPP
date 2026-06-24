import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Blogs from "../components/Blogs";
import Framework from "../components/Framework";
import ScrollSection from "../components/ScrollSection";
import Text from "../components/Text";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Text />
      <Framework />
      
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;