import TranslationsProvider from "@/components/TranslationsProvider";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Header from "@/components/header/header";
import FeatureSection from "@/components/home/sections/feature-section";
import TestimonialSection from "@/components/home/sections/testimonial-section";
import { BlogNewsSection } from "@/components/home/sections/blog-news-section";
import initializeTranslations from "@/app/i18n";
import CoursesSection from "@/components/home/sections/courses-section";
import Navbar from "@/components/navbar/navbar";
import { ReactNode } from "react";
import Footer from "@/components/footer/footer";

const i18nNamespaces = ["common"];

async function PagesLayout({ children, params: { locale } }: { children: ReactNode, params: { locale: string } }) {
  const { t, resources } = await initializeTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="mx-4 md:mx-6">
        <Navbar />
        {children}
      </div>
      <SectionGap />
      <Footer />
    </TranslationsProvider>
  );
}

function SectionGap() {
  return (<span className="my-5 border border-transparent"></span>);
}

export default PagesLayout;
