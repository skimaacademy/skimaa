import { FC } from 'react';
import { cn } from '@/lib/utils';
import SkimaaFullLogo from '../logo/skimaa-full-logo';
import { NavLinksWithName } from '@/constants/global-constants';

const Footer: FC = () => {
  return (
    <footer className="">
      <div className='mx-4 md:mx-6'>
        <div className="py-6 mt-5 border-t container mx-auto flex flex-col justify-start lg:flex-row lg:justify-between lg:items-center md:gap-2 lg:gap-2">
          <div className="md:text-left">
            <SkimaaFullLogo />
            <p className="text-sm mt-1">
              Empowering your future through education.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <nav className="flex flex-col sm:flex-row sm:gap-5">
              {
                NavLinksWithName.map((nav, index) => (
                  <a key={index} href={nav.href} className="hover:text-secondary-foreground/60">
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
