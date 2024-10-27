'use client'

import * as React from 'react';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { NavLinks } from '@/constants/global-constants';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export interface FaqModel {
  id: number;
  question: string;
  answer: string;
}

export interface FaqSectionSectionProps {
  isDisplayViewAllButton: boolean;
  faqs: FaqModel[];
}

export function FaqSection({ isDisplayViewAllButton, faqs }: FaqSectionSectionProps) {
  const { t } = useTranslation("common");

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center">
        F<span className="text-primary">AQ</span>
      </h1>
      <p className="text-center text-secondary-foreground/60 mb-8">{t('faq.Description')}</p>

      <div className="">
        <Accordion type="multiple">
          {faqs.map((faq, index) => (
            <AccordionItem value={"item-" + index} key={index}>
              <AccordionTrigger className='text-lg text-primary'>{faq.question}</AccordionTrigger>
              <AccordionContent className='text-md'>
                  {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {
        isDisplayViewAllButton &&
        <div className='flex mt-6'>
          <Button variant='default' className='mx-auto' asChild>
            <Link href={NavLinks.BlogAndNews}>View All</Link>
          </Button>
        </div>
      }
    </div>
  );
}
