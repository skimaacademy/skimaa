import Header from "@/components/header/header";
import initializeTranslations from "@/app/i18n";
import CoursesSection from "./sections/courses-section";
import GuardianReviewsSection from "./sections/guardian-reviews-section";
import { BlogNewsSection } from "./sections/blog-news-section";

async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const i18nNamespaces = ["common"];
  const { t, resources } = await initializeTranslations(locale, i18nNamespaces);
  
  return (
    <>
      <Header />
      <CoursesSection />
      <SectionGap />
      <GuardianReviewsSection />
      <SectionGap />
      <BlogNewsSection />
    </>
  );
}

function SectionGap() {
  return (<span className="my-5 border border-transparent"></span>);
}

export default HomePage;
