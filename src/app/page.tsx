'use client'
import React from "react";
import Intro from "./components/intro";
import Description from "./components/description";
import Projects from "./components/projects";


export default function Home() {

  React.useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main>
      <Intro />
      <Description />
      <Projects />
    </main>
  )
}
