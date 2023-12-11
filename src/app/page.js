"use client";
import {
  Box,
  Grid,
} from "@chakra-ui/react";
import About from "../components/About";
import Banda from "../components/Banda";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Home from "../components/Home";


function MainPage() {
  return (
    
    <Grid className="dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <section id="home">
       <Home />
      </section>
      <section id="about">
        <Box mt="6em">
          <About />
        </Box>
      </section>
      <Banda />
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Grid>
  );
}

export default MainPage;
