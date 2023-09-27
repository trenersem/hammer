import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Typography from '../atoms/typography';

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
            trigger: container.current,
            pin: true,
            start: "top-=100px",
            // end: document.body.offsetHeight - window.innerHeight - 50,
             end: `bottom-${imageContainer.current!.offsetHeight}px`
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
        </div>
    )
}