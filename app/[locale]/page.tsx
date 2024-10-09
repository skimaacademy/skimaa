import TranslationsProvider from "@/components/TranslationsProvider";
import Navigation from "@/components/Navigation";
import initializeTranslations from "../i18n";
import { Button } from "@/components/ui/button";

const i18nNamespaces = ["common"];

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initializeTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navigation />
      <div className="container">
        <div className="mt-5">
          <Button>Click me</Button>
          <h1>{t("home.Home title")}</h1>
          <p className="h-[3000px] border border-red-500">{t("home.Home description")}</p>
        </div>
      </div>
    </TranslationsProvider>
  );
}

export default Home;
