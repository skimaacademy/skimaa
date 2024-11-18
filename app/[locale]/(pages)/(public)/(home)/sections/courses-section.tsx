'use client'

import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import CourseCard from '../cards/courses-card';
import Link from 'next/link';
import { NavLinks } from '@/constants/global-constants';
import { StaticImageData } from 'next/image';

export interface Course {
  title: string;
  description: string;
  enrolled: string;
  imageSrc: StaticImageData;
}

export interface CoursesSectionProps {
  isDisplayViewAllButton: boolean;
  courses: Course[];
}

const CoursesSection = ({ isDisplayViewAllButton, courses }: CoursesSectionProps) => {

  const { t } = useTranslation("common");

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold text-center">Our <span className="text-primary">Courses</span></h2>
      <p className="text-center text-secondary-foreground/60 mb-8">{t('home.Our Courses Description')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            enrolled={course.enrolled}
            imageSrc={course.imageSrc}
          />
        ))}
      </div>
      {
        isDisplayViewAllButton &&
        <div className='flex mt-6'>
          <Button variant='default' className='mx-auto' asChild>
            <Link href={NavLinks.Courses}>View All</Link>
          </Button>
        </div>
      }
    </div>
  );
};

export default CoursesSection;
