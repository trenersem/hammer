import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.scss';
import Image from 'next/image';

const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

export default function Description() {
  const descriptionImage = React.useRef(null);

    React.useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: descriptionImage.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=500px",
            }
        })

        timeline
            .from(descriptionImage.current, {
                bottom: '200%',
                opacity: '0',
                clipPath: 'inset(15%)'
            })
             .to(descriptionImage.current, {
                bottom: 'unset',
                opacity: '1',
                clipPath: 'inset(0%)'
            })

    }, [])

  return (
    <div className={styles.description} >
         <div ref={descriptionImage} data-scroll data-scroll-speed="0.3" className={styles.descriptionImage}>
            <Image
                src={'/images/paint.avif'}
                alt="intro image"
                fill={true} 
                priority={true}
            />
        </div>
        {
            phrases.map( (phrase, index) => {
                return <AnimatedText key={index}>{phrase}</AnimatedText>
            })
        }
    </div>
  )
}

function AnimatedText({children} : {children : React.ReactNode}) {
    const text = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            left: "-200px",
            ease: "power3.Out"
        })
    }, [])

    return <p ref={text}>{children}</p>
}