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