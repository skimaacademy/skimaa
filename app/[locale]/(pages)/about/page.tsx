'use client'

import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

function AboutPage() {
  
  const pathname = usePathname();
  const { t } = useTranslation("common");
  
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-5 flex flex-col gap-3">
          <h1 className="text-3xl font-medium text-center mb-4">About <span className="text-primary">Us</span></h1>

          <h3 className="text-xl font-medium text-primary">Introduction</h3>
          <p className="">
            {t("about.Introduction")}
          </p>

          <h3 className="text-xl font-medium text-primary mt-6">Our Mission</h3>
          <p>
            {t("about.Mission")}
          </p>

          <h3 className="text-xl font-medium text-primary mt-6">Our Vision</h3>
          <p>
            {t("about.Vision")}
          </p>

          <h3 className="text-xl font-medium text-primary mt-6">Our Values</h3>
          <p>
            {t("about.Values")}
          </p>

          <h3 className="text-xl font-medium text-primary mt-6">Our Team</h3>
          <p>
            {t("about.Team")}
          </p>

          <h3 className="text-xl font-medium text-primary mt-6">Our History</h3>
          <p>
            {t("about.History")}
          </p>

          <h3 className="text-xl font-medium text-primary mt-6">Why Choose Us</h3>
          <p>
            {t("about.WhyChooseUs")}
          </p>

          <h3 className="text-xl font-medium text-primary mt-6">What We Offer</h3>
          <p>
            {t("about.Offerings")}
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
