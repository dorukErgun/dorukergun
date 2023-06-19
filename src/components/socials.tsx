import Link from "next/link";
import { Github as GithubIcon, Twitter as TwitterIcon, Linkedin as LinkedinIcon, Instagram as InstagramIcon } from 'lucide-react';

export default function Socials() {

  const socials = [
    {
      name: 'Github',
      link: 'https://github.com/dorukErgun',
      icon: GithubIcon
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/dorukergun99/',
      icon: LinkedinIcon
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/dorukergundev',
      icon: TwitterIcon
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/dorukergn/',
      icon: InstagramIcon
    },
  ]

  return (
    <div className="flex gap-x-3">
      {socials.map((social, index) => (
        <Link 
          key={index.toString()}
          href={social.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-base text-subtext hover:text-primary transition-colors duration-300 ease-in-out"
        >
          <social.icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
}
