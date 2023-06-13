import Image from 'next/image';
import Socials from './socials';

export default function Header () {
  return (
    <header className="flex bg-secondary text-maintext font-extralight h-full py-24 pl-36">
      <div className="flex flex-col justify-between pr-36 border-r border-primary">
        <div className="flex flex-col gap-y-1">
          <div className="relative mb-3">
            <Image 
              src={'/pp.jpeg'} 
              alt={'Doruk Ergün'}      
              className="border-2 border-primary rounded-full"    
              width={170}
              height={170}  
            />
          </div>
          <h1 className="text-4xl">Doruk Ergün</h1>
          <h2 className="text-xl">Software Engineer at Accenture</h2>
          <h3 className="text-base text-subtext">I build accessible, inclusive products and digital experiences for the web</h3>
        </div>  
        <div>
          <Socials />
        </div>
      </div>
    </header>
  );
}