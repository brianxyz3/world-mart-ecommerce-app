import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Explore from "./components/Explore";
import TestimonialList from "./components/TestimonialList";
import GetStarted from "./components/GetStarted";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Explore />
      <TestimonialList />
      <GetStarted />
    </>
  )
}

export default App;
