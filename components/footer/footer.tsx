import { FC } from 'react';
import { cn } from '@/lib/utils';
import SkimaaFullLogo from '../logo/skimaa-full-logo';
import { NavLinksWithName } from '@/constants/global-constants';

const Footer: FC = () => {
  return (
    <footer className="">
      <div className='mx-4 md:mx-6'>
        <div className="py-6 mt-5 border-t container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <SkimaaFullLogo />
            <p className="text-sm mt-1">
              Empowering your future through education.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <nav className="flex flex-col md:flex-row space-x-5">
              {
                NavLinksWithName.map((nav, index) => (
                  <a key={index} href={nav.href} className="hover:text-gray-400">
                    {nav.name}
                  </a>
                ))
              }
            </nav>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm">© {new Date().getFullYear()} Skimaa. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
