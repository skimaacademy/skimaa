'use client'

import course1 from 'images/courses/course-1.png';
import course2 from 'images/courses/course-2.png';
import course3 from 'images/courses/course-3.png';
import course4 from 'images/courses/course-4.png';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import CourseCard from '../cards/courses-card';

const CoursesSection = () => {

  const { t } = useTranslation("common");

  const courses = [
    { 
      title: 'Xth SSLC', 
      description: 'Access free classes for English/Malayalam Kerala Syllabus students...', 
      enrolled: '20,000', 
      imageSrc: course1 
    },
    { 
      title: '+1 Science - Kerala Board', 
      description: 'Specialized Plus One Board (Kerala) Science Course...', 
      enrolled: '15,000', 
      imageSrc: course2 
    },
    { 
      title: '+1 Science - Kerala Board', 
      description: 'For Students Who Dream Only Of 12th Board Examinations...', 
      enrolled: '28,000', 
      imageSrc: course3 
    },
    { 
      title: '+1 & +2 Entrance Combo', 
      description: 'For Students Who Dream to Become Doctors...', 
      enrolled: '20,000', 
      imageSrc: course4 
    },
    { 
      title: '+1 & +2 - NEET/JEE', 
      description: 'NEET and JEE preparations for aspiring students...', 
      enrolled: '25,000', 
      imageSrc: course1 
    },
    { 
      title: '+1 Commerce - Kerala Board', 
      description: 'Commerce syllabus for Kerala Board students...', 
      enrolled: '22,000', 
      imageSrc: course2 
    },
    { 
      title: '+2 Humanities', 
      description: 'Comprehensive Humanities courses for students...', 
      enrolled: '18,000', 
      imageSrc: course3 
    },
    { 
      title: 'Foundation Courses', 
      description: 'Foundation courses to strengthen basics for higher studies...', 
      enrolled: '30,000', 
      imageSrc: course4 
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-4">Our <span className="text-primary">Courses</span></h2>
      <p className="text-center text-gray-500 mb-8">{t('home.Our Courses Description')}</p>
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
      <div className='flex mt-6'>
        <Button variant='default' className='mx-auto'>View All</Button>
      </div>
    </div>
  );
};

export default CoursesSection;
