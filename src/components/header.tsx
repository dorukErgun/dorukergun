import Image from 'next/image';
import Socials from './socials';

export default function Header () {
  return (
    <header className="flex bg-secondary text-maintext font-extralight h-screen md:h-full py-24 pl-12 md:pl-36">
      <div className="flex flex-col justify-between pr-12 md:pr-36 border-0 md:border-r border-primary">
        <div className="flex flex-col gap-y-1">
          <div className="relative mb-3">
            <Image 
              src={'/pp.jpeg'} 
              alt={'Doruk Ergün'}      
              className="border-2 border-primary rounded-full"    
              width={170}
              height={170} 
              placeholder="blur" 
              blurDataURL={'/pp.jpeg'}
            />
          </div>
          <h1 className="text-4xl">Doruk Ergün</h1>
          <h2 className="text-xl">Software Engineer at Accenture</h2>
          <h3 className="text-base text-subtext">
            I&apos;m a full-stack web developer specializing in creating accessible digital products. I strive to build user-friendly websites that cater to diverse audiences!
          </h3>
        </div>  
        <div>
          <Socials />
        </div>
      </div>
    </header>
  );
}