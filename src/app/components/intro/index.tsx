import Image from 'next/image';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './style.module.scss';
import Typography from '../atoms/typography';


const Intro = () => {

    const background = React.useRef(null);

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
            //  .to(introImage.current, {height: "200px"}, 0)
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
                     <Typography tag='h1' size='text-l' data-scroll data-scroll-speed="-0.3">Home Improvements Just Got Easier</Typography>
                     <Typography tag='h2' size='text-m' data-scroll data-scroll-speed="-0.3">Service You Can Trust</Typography>
             </div>
        </div>
  )
}

export default Intro
