import Header from "@/components/header/header";
import TestimonialSection from "@/components/home/sections/testimonial-section";
import { BlogNewsSection } from "@/components/home/sections/blog-news-section";
import CoursesSection from "@/components/home/sections/courses-section";
import initializeTranslations from "@/app/i18n";

async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const i18nNamespaces = ["common"];
  const { t, resources } = await initializeTranslations(locale, i18nNamespaces);
  
  return (
    <>
      <Header />
      <CoursesSection />
      <SectionGap />
      <TestimonialSection />
      <SectionGap />
      <BlogNewsSection />
    </>
  );
}

function SectionGap() {
  return (<span className="my-5 border border-transparent"></span>);
}

export default HomePage;
