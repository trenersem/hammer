'use client'
import React from "react";
import Intro from "./components/intro";
import Description from "./components/description";
import Projects from "./components/projects";
import Header from "./components/header";


export default function Home() {

  React.useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll({
            smartphone: {
                smooth: true,
            },
          })
      }
    )()
  }, [])

  return (
    <main>
      <Header />
      <Intro />
      <Description />
      <Projects />
    </main>
  )
}
