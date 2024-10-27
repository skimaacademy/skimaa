import Header from "@/components/header/header";
import initializeTranslations from "@/app/i18n";
import CoursesSection from "./sections/courses-section";
import GuardianReviewsSection from "./sections/guardian-reviews-section";
import { BlogNewsSection } from "./sections/blog-news-section";
import ImageTextCardSection from "./sections/image-text-card-section";
import { BlogPosts } from "../blog-and-news/blog-and-news-data";
import { Courses } from "../courses/courses-data";
import { FaqModel, FaqSection } from "./sections/faq-section";
import RoadmapSection from "./sections/roadmap-section";

async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const i18nNamespaces = ["common"];
  const { t, resources } = await initializeTranslations(locale, i18nNamespaces);

  const faqs: FaqModel[] = [
    {
      id: 1,
      question: t('faq.whatIsSkimaa'),
      answer: t('faq.skimaaDescription'),
    },
    {
      id: 2,
      question: t('faq.services'),
      answer: t('faq.servicesDescription'),
    },
    {
      id: 3,
      question: t('faq.whoCanJoin'),
      answer: t('faq.whoCanJoinDescription'),
    },
    {
      id: 4,
      question: t('faq.coursesOffered'),
      answer: t('faq.coursesOfferedDescription'),
    },
    {
      id: 5,
      question: t('faq.courseDelivery'),
      answer: t('faq.courseDeliveryDescription'),
    },
    {
      id: 6,
      question: t('faq.recordedOrLive'),
      answer: t('faq.recordedOrLiveDescription'),
    },
    {
      id: 7,
      question: t('faq.courseLanguages'),
      answer: t('faq.courseLanguagesDescription'),
    },
    {
      id: 8,
      question: t('faq.technicalSupport'),
      answer: t('faq.technicalSupportDescription'),
    },
    {
      id: 9,
      question: t('faq.courseCost'),
      answer: t('faq.courseCostDescription'),
    },
    {
      id: 10,
      question: t('faq.enrollCourse'),
      answer: t('faq.enrollCourseDescription'),
    },
  ];
  
  return (
    <>
      <Header />
      <SectionGap />
      <ImageTextCardSection />
      <SectionGap />
      <CoursesSection isDisplayViewAllButton={true} courses={Courses} />
      <SectionGap />
      <RoadmapSection />
      <SectionGap />
      <GuardianReviewsSection />
      <SectionGap />
      <FaqSection isDisplayViewAllButton={false} faqs={faqs}/>
      <SectionGap />
    </>
  );
}

function SectionGap() {
  return (<span className="my-5 border border-transparent"></span>);
}

export default HomePage;
