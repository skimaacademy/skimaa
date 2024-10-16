import { FC } from 'react';
import { cn } from '@/lib/utils';
import SkimaaFullLogo from '../logo/skimaa-full-logo';

const Footer: FC = () => {
  return (
    <footer className={cn("bg-primary-foreground py-6 mt-5")}>
      <div className='mx-4 md:mx-6'>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <SkimaaFullLogo />
            <p className="text-sm mt-1">
              Empowering your future through education.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <nav className="flex flex-col md:flex-row space-x-4">
              <a href="/about" className="hover:text-gray-400">About Us</a>
              <a href="/courses" className="hover:text-gray-400">Courses</a>
              <a href="/contact" className="hover:text-gray-400">Contact</a>
              <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
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
