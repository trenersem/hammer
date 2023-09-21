import Image from 'next/image';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './style.module.css';


const Intro = () => {

    const background = React.useRef(null);
    const introImage = React.useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            }
        })

        timeline
            .from(background.current, {
                clipPath: 'inset(15%)'
            })
             .to(introImage.current, {height: "200px"}, 0)

    }, [])

  return (
    <div className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={background}>
                <Image 
                    src={'/images/background.png'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </div>
            <div className={styles.intro}>
                     <h1 data-scroll data-scroll-speed="0.3">Our company name</h1>
             </div>
        </div>
  )
}

export default Intro