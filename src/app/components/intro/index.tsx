import Image from 'next/image';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './style.module.scss';
import Typography from '../atoms/typography';


const Intro = () => {

    const background = React.useRef(null);
    const title = React.useRef(null);

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
             .to(background.current, {
                clipPath: 'inset(0%)',
            })
            .to(title.current, {
                opacity: '0'
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
            <div className={styles.intro} ref={title} data-scroll data-scroll-speed="-0.3">
                     <Typography tag='h1' size='text-l' data-scroll data-scroll-speed="-0.3">Home Improvements Just Got Easier</Typography>
                     <Typography tag='h2' size='text-m' data-scroll data-scroll-speed="-0.3">Service You Can Trust</Typography>
                    <button
                        className="w-full md:max-w-xs max-w-[250px] md:p-4 p-2 self-center text-black mt-4 bg-[#f3c600] rounded-xl hover:bg-[#f3c900] hover:text-white ease-in-out duration-75 "
                        type="button"
                        data-scroll data-scroll-speed="-0.45"
                    >
                        Schedule Appoinment
                    </button>
             </div>
        </div>
  )
}

export default Intro
