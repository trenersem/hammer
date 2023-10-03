import { facebook, instagram, linkedin, twitter } from "../../../public/icons";
import { FaBrain } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IconType } from "react-icons";

interface PhraseInfo {
  Icon: IconType;
  phrases: string;
  title: string;
  id: number;
}

export 
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
export const phrasesWithInfo: PhraseInfo[] = [
  {
    Icon: FaBrain,
    phrases: "We are the team of highly professional technician with an average 15 years of experience in the field.",
    title: "Experienced",
    id: 1
  },
  {
    Icon: IoMdSettings,
    phrases: "Our technicians are experienced with a variety of skills in different fields and get work done.",
    title: "Trustworthy",
    id: 2
  },
  {
    Icon: BsFillPeopleFill,
    phrases: "At FixIt Handyman we offer an exceptional service and high-quality workmanship which is",
    title: "Reliable",
    id: 3
  }
];

export const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      {
        name: 'Content',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'How it Works',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Explore',
        link: 'https://www.hoobank.com/explore/',
      },
      {
        name: 'Terms & Services',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Help Center',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Partners',
        link: 'https://www.hoobank.com/partners/',
      },
    ],
  },
];

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://www.linkedin.com/',
  },
];