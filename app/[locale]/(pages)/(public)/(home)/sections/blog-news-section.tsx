'use client'

import * as React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Share2 } from 'lucide-react';
import Image from 'next/image';
import courseImage1 from 'images/courses/course-1.png';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { NavLinks, NavLinksWithName } from '@/constants/global-constants';

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  tag: string;
}

export interface BlogNewsSectionProps {
  isDisplayViewAllButton: boolean;
  blogPosts: BlogPost[];
}

export function BlogNewsSection({ isDisplayViewAllButton, blogPosts }: BlogNewsSectionProps) {

  const { t } = useTranslation("common");
  
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center">
        Our <span className="text-primary">Blog & News</span>
      </h1>
      <p className="text-center text-secondary-foreground/60 mb-8">{t('home.Our Blog & News Description')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="">
            <CardHeader>
              <CardTitle>{post.tag}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Image 
                  src={courseImage1}
                  alt={'Blog 1'}
                  className='max-h-56 object-cover mb-3'
                />
                <span className=''>{post.title}</span>
                <div className='text-sm absolute top-0 left-0 bg-primary text-white px-2 py-1 rounded-r-full'>Story Cycle</div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="font-bold">
                {post.author}
              </div>
              <Button variant="link" className="">
                <Share2 className="mr-1" />
                Share
              </Button>
            </CardFooter>
          </Card>
        ))}
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
