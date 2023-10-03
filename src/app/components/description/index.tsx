import React, { ReactNode, useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.scss';
import Image from 'next/image';
import Typography from '../atoms/typography';
import { phrasesWithInfo } from '@/app/constants';


export default function Description() {

  return (
    <div className={styles.description} >
        <div className="max-w-[1240px] m-auto px-4 py-4 w-full">
          <div className={styles.list}>
              {
                  phrasesWithInfo.map(({Icon, phrases, title}, index) => {
                      return <AnimatedText key={index} icon={<Icon/>} phrase={phrases} title={title} />
                  })
              }
          </div>
        </div>
    </div>
  )
}

function AnimatedText({icon, phrase, title} : {icon: JSX.Element, phrase: string, title: string}) {
    const text = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=300px bottom",
            },
            opacity: 0,
            left: "-250px",
            ease: "power3.Out"
        })
    }, [])

    return (
        <div ref={text} className={styles.item}>
            <div className={styles.item__content}>
                <Typography className={styles.title}>
                    {title}
                </Typography>
                <div className={styles.icon}>
                    {icon}
                </div>
            </div>
            <Typography size='text-s'>{phrase}</Typography>
        </div>)
}