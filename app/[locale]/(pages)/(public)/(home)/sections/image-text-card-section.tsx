import Image, { StaticImageData } from 'next/image';
import React from 'react';
import eduImage1 from 'images/resources/education/online-education.png';
import eduImage2 from 'images/resources/education/online-education2.png';
import eduImage3 from 'images/resources/education/online-education3.png';
import { CheckCircle } from 'lucide-react';

interface ImageTextCardProps {
  index: number;
  title: string;
  description: string;
  options: string[];
  image: StaticImageData;
  alt: string;
}

const ImageTextCardSection = () => {

  const imageTextCardsData: ImageTextCardProps[] = [
    {
      index: 0,
      title: "What You Will Learn",
      description: "Transform your skills and knowledge with our engaging courses.",
      options: [
        "Unlock Your Potential: Master New Skills with Confidence",
        "Everyone Has the Power to Learn: Embrace Your Journey",
        "Discover the Joy of Learning: Explore New Possibilities",
      ],
      image: eduImage1,
      alt: "What you will learn"
    },
    {
      index: 1,
      title: "Skills You Will Cover",
      description: "Dive deep into essential skills that enhance your learning experience.",
      options: [
        "Critical Thinking: Develop analytical and problem-solving skills.",
        "Time Management: Learn how to manage your time effectively.",
        "Communication: Improve your verbal and written communication skills.",
        "Technical Proficiency: Gain hands-on experience with modern tools and technologies.",
      ],
      image: eduImage2,
      alt: "Skills you will cover"
    },
    {
      index: 2,
      title: "What You Will Achieve",
      description: "Set yourself on a path to success with tangible achievements.",
      options: [
        "Certification: Receive recognized certificates upon course completion.",
        "Portfolio Development: Build a portfolio showcasing your projects and skills.",
        "Job Readiness: Prepare yourself for new job opportunities with relevant skills.",
        "Personal Growth: Achieve a deeper understanding of your interests and strengths.",
      ],
      image: eduImage3,
      alt: "What you will achieve"
    }
  ];
  
  return (
    <>
      {
        imageTextCardsData.map((cardData, index) => (
          <div key={index} className='my-8'>
            <ImageTextCard
              index={cardData.index}
              title={cardData.title}
              description={cardData.description}
              options={cardData.options}
              image={cardData.image}
              alt={cardData.alt}
              />
          </div>
        ))
      }
    </>
  );
};

const ImageTextCard: React.FC<ImageTextCardProps> = ({ index, title, description, options, image, alt }) => {
  return (
    <div className={`flex ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} flex-col gap-8`}>
      {/* Left Part: Image */}
      <div className="flex-1">
        <Image
          src={image}
          alt={alt}
          height={350}
          objectFit='cover'
          className="rounded-lg mx-auto"
        />
      </div>

      {/* Right Part: Text */}
      <div className={`flex ${index % 2 === 0 ? '' : ''} justify-center items-center flex-1 flex`}>
        <div className='h-fit'>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-secondary-foreground/60">
            {description}
          </p>
          <div className=''>
            <ul className="space-y-2 mt-4">
              {options.map((option, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextCardSection;
