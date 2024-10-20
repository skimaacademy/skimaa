import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react'; // Importing an icon
import { Button } from '@/components/ui/button';

interface PricingPlan {
  name: string;
  price: string;
  time: string;
  segmentPrice: string;
  features: string[];
  buttonLabel: string;
}

const PricingCard: FC<{ pricingPlan: PricingPlan }> = ({ pricingPlan: pricingPlan }) => {
  return (
    <Card className="rounded-xl p-4 shadow-md text-center ">
      <CardHeader>
        <CardTitle className="text-2xl font-bold default-text-color uppercase">{pricingPlan.name}</CardTitle>
        <div className="mt-2 default-text-color text-3xl font-extrabold">{pricingPlan.time}</div>
        <div className="default-text-color text-3xl font-bold">{pricingPlan.price}</div>
        <CardDescription className="text-white bg-primary rounded-lg mt-2 px-2 py-2 inline-block">
          {pricingPlan.segmentPrice}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mt-4">
          {pricingPlan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <CheckCircle className="text-primary w-5 h-5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center mt-6">
        <Button className="border rounded-full px-6">
          {pricingPlan.buttonLabel}
        </Button>
      </CardFooter>
    </Card>
  );
};


const PricingPage: FC = () => {

  const pricingPlans: PricingPlan[] = [
    {
      name: "Popular",
      time: "1T : 15S",
      price: "৳ 1500",
      segmentPrice: "Paid per Segment",
      features: [
        "10 Core Classes",
        "5 Practice Session",
        "Total Duration 5 Weeks / 35 Days",
        "Class Duration 60 Minutes",
      ],
      buttonLabel: "Choose Plan",
    },
    {
      name: "Standard",
      time: "1T : 5S",
      price: "৳ 3000",
      segmentPrice: "Paid per Segment",
      features: [
        "10 Core Classes",
        "5 Practice Session",
        "Total Duration 5 Weeks / 35 Days",
        "Class Duration 60 Minutes",
      ],
      buttonLabel: "Choose Plan",
    },
    {
      name: "Special",
      time: "1T : 3S",
      price: "৳ 5000",
      segmentPrice: "Paid per Segment",
      features: [
        "10 Core Classes",
        "5 Practice Session",
        "Total Duration 5 Weeks / 35 Days",
        "Class Duration 60 Minutes",
      ],
      buttonLabel: "Choose Plan",
    },
    {
      name: "Premium",
      time: "1T : 1S",
      price: "৳ 8000",
      segmentPrice: "Paid per Segment",
      features: [
        "10 Core Classes",
        "5 Practice Session",
        "Total Duration 5 Weeks / 35 Days",
        "Class Duration 60 Minutes",
      ],
      buttonLabel: "Choose Plan",
    }
  ];

  return (
    <div className='mt-5'>
      <h2 className="text-3xl font-bold text-center">Pricing <span className="text-primary">Plans</span></h2>
      <p className="text-center text-secondary-foreground/60">Affordable education fee</p>

      <div className="flex justify-center items-center mt-10">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((pricingPlan, index) => (
            <PricingCard key={index} pricingPlan={pricingPlan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
