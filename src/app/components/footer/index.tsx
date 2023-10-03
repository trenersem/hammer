import { footerLinks, socialMedia } from '@/app/constants';
import Typography from '../atoms/typography';
import Image from 'next/image';
import Logo from '../atoms/logo';

const Footer = () => (
     <footer id="footer" className="w-full max-w-[100wv]">
      <div className="max-w-[1240px] m-auto px-4 py-4 w-full">
        <div className={`flex justify-start flex-col`}>
            <div className={`flex justify-start md:flex-row flex-col mb-8 w-full`}>
            <div className="flex flex-[1] flex-col justify-start mr-10">
                {/* <img src={logo} alt="hoobank" className="w-[266px] h-[72px] object-contain" /> */}
                <Logo />
                <Typography className={`mt-4 max-w-[312px]`} size='text-s'>
                     Home improvements just got easier
                </Typography>
                <div className='mt-[auto]'/>
                <Typography
                    size='text-s'
                    tag='a'
                    href='tel:+17542751268'
                    className='mt-6  text-[#f3c600]'
                >
                    <span className=' text-[#f3c600]'>
                      754.275.1268
                    </span>
                </Typography>
                <Typography size='text-xs' weight='semibold' tag='div'>
                     Call Us 24/7
                </Typography>

                
            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerLink) => (
                <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                    <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                    {footerLink.title}
                    </h4>
                    <ul className="list-none mt-4">
                    {footerLink.links.map((link, index) => (
                        <Typography
                            key={link.name}
                            className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                                index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                            }`}
                            size='text-s'
                        >
                        {link.name}
                        </Typography>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
            </div>

            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <Typography className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white" size='text-s'>
                Copyright Ⓒ 2022 HooBank. All Rights Reserved.
            </Typography>

            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                <Image
                    key={social.id}
                    src={social.icon}
                    alt={social.id}
                    className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                    index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
                    }`}
                />
                ))}
            </div>
            </div>
        </div>
      </div>
    </footer>
);

export default Footer;