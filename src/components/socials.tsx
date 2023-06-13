import Link from "next/link";

export default function Socials() {

  const socials = [
    {
      name: 'Github',
      link: 'https://github.com/dorukErgun',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/dorukergun99/'
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/dorukergundev'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/dorukergun/'
    },
  ]

  return (
    <div className="flex gap-x-2">
      {socials.map((social) => (
        <Link 
          href={social.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-base text-subtext hover:text-primary transition-colors duration-300 ease-in-out"
        >
          {social.name}
        </Link>
      ))}
    </div>
  );
}
