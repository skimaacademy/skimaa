import Image, { StaticImageData } from 'next/image';
import {
  CheckCircleIcon
} from '@heroicons/react/20/solid';


interface CourseCardProps {
  title: string;
  description: string;
  enrolled: string;
  imageSrc: string | StaticImageData;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, enrolled, imageSrc }) => {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="relative w-full h-40">
        <Image 
          src={imageSrc} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-card-foreground/60 text-sm mb-4">{description}</p>
        <div className="flex items-center text-primary text-sm font-medium">
          <CheckCircleIcon width={20} className='mr-2'/>
          {enrolled} Enrolled
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
