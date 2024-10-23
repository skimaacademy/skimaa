'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getNameInitials } from "@/services/utility/utility.service";
import * as Avatar from "@radix-ui/react-avatar";
import Image from 'next/image';
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    name: 'Kristin Watson',
    location: 'Iran (Islamic Republic of)',
    image: '/images/kristin.png',
    testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.'
  },
  {
    name: 'Brooklyn Rocky',
    location: 'Bangladesh',
    image: '/images/brooklyn.png',
    testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.'
  },
  {
    name: 'Kathryn Murphy',
    location: 'Palestine, State of',
    image: '/images/kathryn.png',
    testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.'
  },
  {
    name: 'Jenny Wilson',
    location: 'Serbia',
    image: '/images/jenny.png',
    testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.'
  },
  {
    name: 'Savannah Nguyen',
    location: 'Åland Islands',
    image: '/images/savannah.png',
    testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.'
  },
  {
    name: 'Albert Flores',
    location: 'Central African Republic',
    image: '/images/albert.png',
    testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.'
  }
];

export default function GuardianReviewsSection() {

  const { t } = useTranslation("common");
  
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold text-center">
        Guardian <span className="text-primary">Reviews</span>
      </h2>
      <p className="text-center text-gray-500 mb-8">{t('home.Guardian Reviews Description')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader>
              <div className="flex items-center">
                <Avatar.Root className="inline-flex size-[45px] border-2 select-none items-center justify-center overflow-hidden rounded-full align-middle">
                  <Avatar.Image
                    className="size-full rounded-[inherit] object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <Avatar.Fallback
                    className="leading-1 flex size-full items-center justify-center text-[15px] font-medium"
                    delayMs={500}
                  >
                    {getNameInitials(testimonial.name)}
                  </Avatar.Fallback>
                </Avatar.Root>
                <div className="ml-3">
                  <CardTitle className="font-semibold">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{testimonial.testimonial}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* <div className='flex mt-6'>
        <Button variant='default' className='mx-auto'>View All</Button>
      </div> */}

    </div>
  );
}
