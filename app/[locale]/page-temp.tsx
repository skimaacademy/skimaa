import TranslationsProvider from "@/components/TranslationsProvider";
import Navigation from "@/components/Navigation";
import initializeTranslations from "../i18n";
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Header from "@/components/header/header";
import CoursesSection from "./(pages)/(home)/sections/courses-section";
import TestimonialSection from "./(pages)/(home)/sections/testimonial-section";
import { BlogNewsSection } from "./(pages)/(home)/sections/blog-news-section";

const i18nNamespaces = ["common"];

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initializeTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="mx-4 md:mx-6">
        {/* <LocaleSwitcher />
        <div className="container">
          <div className="mt-5">
            <h1>{t("home.Home title")}</h1>
            <p>{t("home.Home description")}</p>
          </div>
        </div> */}

        <Header />
        <CoursesSection />
        <SectionGap />
        <TestimonialSection />
        <SectionGap />
        <BlogNewsSection />
        <div className="mt-2"></div>
        {/* <FeatureSection /> */}
      </div>
    </TranslationsProvider>
  );
}

function SectionGap() {
  return (<span className="my-5 border border-transparent"></span>);
}

export default Home;
