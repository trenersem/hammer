import Image from 'next/image';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './style.module.scss';


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
                clipPath: 'inset(0%)'
            })
             .to(introImage.current, {height: "200px"}, 0)
             .to(background.current, {
                clipPath: 'inset(15%)'
            })

    }, [])

  return (
    <div className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={background}>
                <Image 
                    src={'/images/test-1.avif'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </div>
            <div className={styles.intro}>
                     <h1 data-scroll data-scroll-speed="-0.3">Our company name</h1>
                     {/* <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                        <Image
                            src={'/images/image-2.avif'}
                            alt="intro image"
                            fill={true} 
                            priority={true}
                        />
                    </div> */}
             </div>
        </div>
  )
}

export default Intro
