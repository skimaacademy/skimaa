import Image from 'next/image';
import educationImage from 'images/resources/education/education.png'

export default function FeatureSection() {
  return (
    <div className="border border-blue-500 container mx-auto flex flex-row gap-4">
      {/* Left: Image Section */}
      <div className="border border-red-500 w-1/2 h-[450px] overflow-hidden relative">
      <Image
          src={educationImage}
          layout="fill" objectFit="cover"
          className="rounded-lg" alt={''}  />
      </div>

      <div className="border border-green-500 w-1/2 ">
        <h2 className="text-2xl font-bold text-gray-900">
          Classes by <span className="text-orange-500">NIT/IIT/AIIMS</span> Alumnus
        </h2>

        {/* Features List */}
        <div className="space-y-4">
          <FeatureItem
            icon="📚"
            title="Conceptual Understanding"
            description="Our tutors prioritize ensuring a thorough grasp of concepts for every student."
          />
          <FeatureItem
            icon="🎓"
            title="Inspiring Study Tips"
            description="Receive valuable study tips and motivations to ignite and sustain your academic drive."
          />
          <FeatureItem
            icon="🎯"
            title="Goal-Oriented Motivation"
            description="Be inspired to achieve your goals through tailored motivation and guidance from our tutors."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: string, title: string, description: string }) {
  return (
    <div className="flex items-start space-x-3">
      {/* Icon */}
      <div className="text-xl">
        <span>{icon}</span>
      </div>
      {/* Text Content */}
      <div>
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
