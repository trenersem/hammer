import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.scss';
import Image from 'next/image';
import Typography from '../atoms/typography';
import { FaBrain } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { BsFillPeopleFill } from 'react-icons/bs';


const phrasesWithInfo = [
  {
    icon: <FaBrain/>,
    phrases: "We are the team of highly professional technician with an average 15 years of experience in the field.",
    title: "Experienced",
    id: 1
  },
  {
    icon: <IoMdSettings />,
    phrases: "Our technicians are experienced with a variety of skills in different fields and get work done.",
    title: "Trustworthy",
    id: 2
  },
  {
    icon: <BsFillPeopleFill />,
    phrases: "At FixIt Handyman we offer an exceptional service and high-quality workmanship which is",
    title: "Reliable",
    id: 3
  }
];

export default function Description() {

  return (
    <div className={styles.description} >
        <div className={styles.list}>
            {
                phrasesWithInfo.map((item, index) => {
                    return <AnimatedText key={index} icon={item.icon} phrase={item.phrases} title={item.title} />
                })
            }
        </div>
    </div>
  )
}

function AnimatedText({icon, phrase, title} : {icon: React.ReactNode, phrase: string, title: string}) {
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