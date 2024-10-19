'use client'

import { Button } from "../ui/button";
import SkimaaFullLogo from "../logo/skimaa-full-logo";
import Navbar from "../navbar/navbar";
import groupStudyImage from 'images/resources/group-study-fill.png';
import Image from 'next/image';
import { FeaturedCoursesCard } from "@/app/[locale]/(pages)/(home)/cards/feature-courses-card";
import { useTranslation } from "react-i18next";
import { UnavailableFeatureToastButton } from "../button/unavailable-feature-toast-button";

export default function Header() {

  const { t } = useTranslation("common");
  
  return (
    <div className="flex flex-col">
      <div className="md:h-[calc(100vh-4rem)] flex flex-col">
        <div className="mt-2 h-full min-h-[400px] flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col md:flex-row justify-between max-w-screen-lg w-full">
            <div className="flex flex-col justify-center items-center md:items-start">
              <SkimaaFullLogo height={40} className='mb-2'></SkimaaFullLogo>
              <h5 className="">{t("home.Slogan")}</h5>
              {/* <Button onClick={willBeAvailableSoon} className="mt-5">Enroll Now!</Button> */}
              <UnavailableFeatureToastButton className='mt-5' buttonText="Enroll Now!" />
            </div>
            <div className="hidden md:block rounded-full bg-slate-300">
              <Image
                className=""
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
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      <FeaturedCoursesCard title="Feature Courses" amount="Over $800M" />
      <FeaturedCoursesCard title="Current Progress" amount="7,366%" />
      <FeaturedCoursesCard title="Community Engagement" amount="Over $3.6B" />
      <FeaturedCoursesCard title="Active Participation" amount="90.4%" />
    </div>
  );
}

