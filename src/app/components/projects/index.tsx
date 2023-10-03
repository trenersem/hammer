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
        icon: 'plumbing.png',
        description: 'Our demolition services are carried out with precision and safety in mind. We specialize in removing structures efficiently while minimizing disruption to your surroundings. Trust us to clear the way for your new beginnings.',
    },
    {
        title: "ODD Jobs",
        src: "image-2.avif",
        icon: 'plumbing.png',
         description: 'Have odd jobs that need attention? We’ve got you covered. Our team excels in handling various tasks around your property, from repairs to installations. Let us take care of the small details so you can focus on what matters most.',
    },
    {
        title: "Painting",
        src: "paint.avif",
        icon: 'plumbing.png',
        description: 'Transform your space with our expert painting services. Whether you need a fresh coat of paint or a complete color overhaul, our skilled painters ensure a flawless finish. Elevate the aesthetic appeal of your property with our painting solutions.',
    },
    {
        title: "Makeovers",
        src: "image-4.avif",
        icon: 'plumbing.png',
        description: 'Give your property a makeover that reflects your style. Our makeover services include interior and exterior transformations. Experience a revitalized and appealing space that meets your vision and lifestyle.',
    },
    {
        title: "Electrical",
        src: "image-3.avif",
        icon: 'plumbing.png',
        description: 'Electrical projects require precision and expertise. Our team is equipped to handle all your electrical needs, from installations to repairs. Safety and reliability are our top priorities when dealing with electrical systems.',
    },
    {
        title: "Plumbing",
        src: "backgraund.avif",
        icon: 'plumbing.png',
        description: 'When it comes to plumbing, we have the experience to address any issue. From fixing leaks to installing new fixtures, our plumbing services are efficient and reliable. Count on us to keep your water systems in top condition.',
    },
    {
        title: "Installation",
        src: "image-5.avif",
        icon: 'plumbing.png',
        description: 'Installation projects require attention to detail. Our team specializes in installing various components and systems to enhance your property. Experience hassle-free and professional installations with our services.',
    },
];


export default function Projects() {

    const [selectedProject, setSelectedProject] = React.useState(0);
    const container = React.useRef<HTMLDivElement | null>(null);
    const imageContainer = React.useRef<HTMLDivElement | null>(null);
    const [width, setWidth ]= React.useState(0);

    React.useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    React.useLayoutEffect( () => {

        if(!detectMobile()) {
            gsap.registerPlugin(ScrollTrigger);
            ScrollTrigger.create({
                trigger: imageContainer.current,
                pin: true,
                scrub: 3,
                start: "top-=50px",
                end: `+=${container.current!.offsetHeight + 400}px`,
            })
        }
    }, []);

    return (
        <>
            <div ref={container} className={styles.projects}>
                <Typography
                    tag='h2'
                    className={styles.title}
                    size='text-l'
                >
                    Our Services
                </Typography>
                <div className={styles.projectDescription}>
                        <div ref={imageContainer} className={styles.imageContainer}>
                           <div className='relative w-[100%] h-[470px] mb-5 rounded-lg overflow-hidden'>
                            {width <= 768 ? (
                                <Image 
                                    src={`/images/about.avif`}
                                    fill={true}
                                    alt="project image"
                                    priority={true}
                                    className='object-cover object-right'
                                />
                            ) : (
                                <Image 
                                    src={`/images/${projects[selectedProject].src}`}
                                    fill={true}
                                    alt="project image"
                                    priority={true}
                                />
                            ) }
                                
                           </div>
                            <Typography size='text-s'>
                                    {projects[selectedProject].description}
                            </Typography>
                        </div>
                    <div className={styles.column} data-scroll data-scroll-speed="0.3">
                        <Typography size='text-xs'>
                            At our company, we&apos;re your trusted partner in the world of repairs and renovations. We specialize in creating beauty and comfort in your home. Our services span a wide spectrum, including interior and exterior remodeling, painting, fence installation, and a variety of handyman services.
                        </Typography>
                    </div>
                    <div className={styles.column} data-scroll data-scroll-speed="0.3">
                        <Typography size='text-xs'>
                            Our team of experienced professionals is always ready to bring your ideas to life. We strive for the highest standards of quality in every project and put in the utmost effort to ensure you receive an excellent result. When you entrust us with your tasks, you not only get a professional approach but also confidence in our ability to get things done right. Make your life better by choosing our company for your remodeling and construction projects.
                        </Typography>
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
                    scrub: 5,
                    snap: 1 / (sections.length - 1),
                    end: () => `+=` + (container.current ? container.current.offsetWidth + 24 * projects.length : 0),
    
                }
                });
        }
    }, [])
    return (
        <div ref={container}>
            <div className='flex flex-nowrap overflow-hidden w-full mt-10'>
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