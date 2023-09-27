import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Typography from '../atoms/typography';
import { detectMobile } from '@/app/utils/detect-mobile';

const projects = [
    {
        title: "Demolition",
        src: "test-2.avif",
         icon: 'plumbing.png'
    },
    {
        title: "ODD Jobs",
        src: "image-2.avif",
         icon: 'plumbing.png'
    },
    {
        title: "Painting",
        src: "paint.avif",
         icon: 'plumbing.png'
    },
    {
        title: "Makeovers",
        src: "image-4.avif",
         icon: 'plumbing.png'
    },
    {
        title: "Electrical",
        src: "image-3.avif",
        icon: 'plumbing.png'
    },
    {
        title: "Plumbing",
        src: "backgraund.avif",
        icon: 'plumbing.png'
    },
    {
        title: "Installation",
        src: "image-5.avif"
    },

]

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef<HTMLDivElement | null>(null);
    const imageContainer = useRef<HTMLDivElement | null>(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: detectMobile() ?  "+=300px" : `+=${container.current!.offsetHeight - imageContainer.current!.offsetHeight - 250}px`,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <Typography
                tag='h2'
                className={styles.title}
                // data-scroll data-scroll-speed="0.3"
            >
                Our Services
            </Typography>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column} data-scroll data-scroll-speed="0.3">
                    <Typography size='text-xs'>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</Typography>
                </div>
                <div className={styles.column} data-scroll data-scroll-speed="0.3">
                    <Typography size='text-xs'>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</Typography>
                </div>
            </div>
            
            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return (
                            <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                                <h2>{project.title}</h2>
                            </div>
                        )
                    })
                }
            </div>
            <Snapping />
        </div>
    )
}

const Snapping = () => {
    const container = useRef(null)

     React.useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                // base vertical scrolling on how wide the container is so it feels more natural.
                end: "+=1500",
            }
            });
        // gsap.from(text.current, {
        //     scrollTrigger: {
        //         trigger: text.current,
        //         scrub: 3,
        //         start: "0px bottom",
        //         end: "bottom+=200px bottom",
        //         toggleActions: 'restart pause none none'
        //     },
        //     x: -400,
        //     rotation: 720,
        //     duration:3,
        // })
    }, [])
    return (
        <div ref={container} className=''>
            <div className='panel bg-red-50 w-[100vw] h-[500px]'>
                1
            </div>
            <div className='panel bg-green w-[100vw] h-[500px]'>
                2
            </div>
            <div className='panel bg-yellow-600 w-[100vw] h-[500px]'>
                3
            </div>
            <div className='panel bg-slate-500 w-[100vw] h-[500px]'>
                3
            </div>
        </div>
    )
}