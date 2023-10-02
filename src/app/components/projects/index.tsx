import React from 'react'
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

    const [selectedProject, setSelectedProject] = React.useState(0);
    const container = React.useRef<HTMLDivElement | null>(null);
    const imageContainer = React.useRef<HTMLDivElement | null>(null);
    const [width, setWidth ]= React.useState(0);

    React.useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    React.useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            scrub: 3,
            start: "top-=100px",
            end: detectMobile() ?  "+=80px" : `+=${container.current!.offsetHeight + 400}px`,
        })
    }, []);

    return (
        <>
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
                {width >= 768 && (
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
                )}
            </div>
            {width <= 768 && (
                <Snapping />
            )}
        </>
    )
}

const Snapping = () => {
    const container = React.useRef<HTMLDivElement | null>(null);

     React.useLayoutEffect( () => {
        if(window && window.innerWidth <= 768) {

            gsap.registerPlugin(ScrollTrigger);
    
            let sections = gsap.utils.toArray(".panel");
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    pin: true,
                    start: "top-=100px",
                    scrub: 0.1,
                    snap: 1 / (sections.length - 1),
                    end: () => `+=` + (container.current ? container.current.offsetWidth + 24 * projects.length : 0),
    
                }
                });
        }
    }, [])
    return (
        <div ref={container}>
            <div className='flex flex-nowrap overflow-hidden'>
                  {projects.map( (project, index) => {
                        return (
                            <div key={index} className='panel flex flex-col justify-center items-center min-w-[100vw]'>
                                <Typography className='mb-4'>{project.title}</Typography>
                                <div className='relative h-[50vh] w-[96vw] rounded-lg overflow-hidden px-5'>
                                    <Image 
                                        src={`/images/${project.src}`}
                                        fill={true}
                                        alt="project image"
                                        priority={true}
                                        className={`w-[250px] h-[100px] object-cover z-[-1] brightness-75`}
                                    />
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}