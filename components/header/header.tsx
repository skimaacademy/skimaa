'use client'

import { Button } from "../ui/button";
import SkimaaFullLogo from "../logo/skimaa-full-logo";
import Navbar from "../navbar/navbar";
import groupStudyImage from 'images/resources/group-study-fill.png';
import Image from 'next/image';
import { FeaturedCoursesCard } from "@/app/[locale]/(pages)/(home)/cards/feature-courses-card";
import { useTranslation } from "react-i18next";
import { UnavailableFeatureToastButton } from "../button/unavailable-feature-toast-button";
import { Typewriter } from 'react-simple-typewriter';
import { PuzzlePieceIcon, AcademicCapIcon, ChartBarIcon, StarIcon } from "@heroicons/react/20/solid";
import { PhoneInput } from "../inputs/phone-input";
import './header.css';

export default function Header() {

  const { t } = useTranslation("common");
  const slogans = [
    t('home.Slogan1'),
    t('home.Slogan2'),
    t('home.Slogan3')
  ];
  
  return (
    <div className="flex flex-col">
      <div className="md:h-[calc(100vh-4rem)] flex flex-col my-10 md:my-0">
        <div className="mt-2 h-full min-h-[400px] flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col md:flex-row justify-between container w-full gap-6">
            <div className="flex flex-col justify-center items-center md:items-start">

              <div className="mb-10">
                <h3 className="text-xl font-medium mb-8 text-center md:text-left">
                  Empowering <u>kids</u> to learn, create, and lead with hands-on <u>programming</u>, <u>coding</u>, and <u>essential tech skills</u>.
                </h3>
                <div className="flex justify-center md:justify-start">
                  <Highlights />
                </div>
              </div>

              <SkimaaFullLogo height={40} className='mb-2'></SkimaaFullLogo>
              {/* <h5 className="">{t("home.Slogan")}</h5> */}
              <h5 className="text-center md:text-left">
                <Typewriter
                  words={slogans}
                  loop={true}
                  cursor={true}
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                  // cursorBlinking={true}
                />
              </h5>

              <form className="flex flex-col md:flex-row justify-center gap-2 items-center mt-5">
                <PhoneInput 
                  className="" 
                  defaultCountry={"BD"}
                  countries={["BD"]}
                  smartCaret={true}
                  countryCallingCodeEditable={false}
                  international={true}
                />
                <Button className="">Get a Free Lesson!</Button>
              </form>
            </div>
            <div className="hidden md:block">
              <Image
                className="min-w-[350px] min-h-[350px] bg-slate-300 rounded-full"
                src={groupStudyImage}
                alt="Group Study"
              />
            </div>
          </div>
          <FeatureCards className="hidden md:grid"/>
        </div>
      </div>
      <div>
        <FeatureCards className="grid md:hidden"/>
      </div>
    </div>
  );
}

interface FeatureCardsProps {
  className?: string;
}

export function FeatureCards({ className }: FeatureCardsProps) {
  return (
    <div className={`container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      <FeaturedCoursesCard title="Feature Courses" amount="Over $800M" />
      <FeaturedCoursesCard title="Current Progress" amount="7,366%" />
      <FeaturedCoursesCard title="Community Engagement" amount="Over $3.6B" />
      <FeaturedCoursesCard title="Active Participation" amount="90.4%" />
    </div>
  );
}

const Highlights: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex items-start space-x-2">
        <AcademicCapIcon className="w-6 h-6 text-red-600" />
        <div>
          <h3 className="font-medium">Interactive hands-on learning</h3>
          {/* <p>Experience dynamic, hands-on activities that enhance understanding.</p> */}
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <StarIcon className="w-6 h-6 text-purple-600" />
        <div>
          <h3 className="font-medium">Expert instructors at your service</h3>
          {/* <p>Learn from experienced educators who guide you through every step.</p> */}
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <ChartBarIcon className="w-6 h-6 text-orange-600" />
        <div>
          <h3 className="font-medium">Track your progress effortlessly</h3>
          {/* <p>Monitor your achievements and set goals for continuous improvement.</p> */}
        </div>
      </div>
    </div>
  );
};
