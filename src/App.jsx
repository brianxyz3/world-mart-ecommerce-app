import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Explore from "./components/Explore";
import TestimonialList from "./components/TestimonialList";
import GetStarted from "./components/GetStarted";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const body = document.querySelector("body");
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  useEffect(() => {
    body.classList.toggle("dark");
  }, [toggleDarkMode])

  const handleDarkModeToggle = () => {
    setToggleDarkMode(!toggleDarkMode);
  }


  return (
    <>
      <Navbar handleToggle={handleDarkModeToggle} />
      <Hero />
      <Features />
      <Explore />
      <TestimonialList />
      <GetStarted />
      <Questions />
      <Footer />
    </>
  )
}

export default App;
