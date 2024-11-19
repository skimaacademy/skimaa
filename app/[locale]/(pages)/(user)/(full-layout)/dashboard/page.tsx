'use client'

import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

function DashboardPage() {
  
  const pathname = usePathname();
  const { t } = useTranslation("common");
  
  return (
    <>
      Dashboard page
    </>
  );
}

export default DashboardPage;
