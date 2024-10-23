import Header from "@/components/header/header";
import initializeTranslations from "@/app/i18n";
import CoursesSection from "./sections/courses-section";
import GuardianReviewsSection from "./sections/guardian-reviews-section";
import { BlogNewsSection } from "./sections/blog-news-section";
import ImageTextCardSection from "./sections/image-text-card-section";
import { BlogPosts } from "../blog-and-news/blog-and-news-data";
import { Courses } from "../courses/courses-data";

async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const i18nNamespaces = ["common"];
  const { t, resources } = await initializeTranslations(locale, i18nNamespaces);
  
  return (
    <>
      <Header />
      <SectionGap />
      <ImageTextCardSection />
      <SectionGap />
      <CoursesSection isDisplayViewAllButton={true} courses={Courses} />
      <SectionGap />
      <GuardianReviewsSection />
      <SectionGap />
      <BlogNewsSection isDisplayViewAllButton={true} blogPosts={BlogPosts} />
    </>
  );
}

function SectionGap() {
  return (<span className="my-5 border border-transparent"></span>);
}

export default HomePage;
