import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Explore from "./components/Explore";
import TestimonialList from "./components/TestimonialList";
import GetStarted from "./components/GetStarted";
import Questions from "./components/Questions";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Explore />
      <TestimonialList />
      <GetStarted />
      <Questions />
    </>
  )
}

export default App;
