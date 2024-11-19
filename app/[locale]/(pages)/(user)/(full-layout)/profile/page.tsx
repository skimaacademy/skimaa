'use client'

import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

function ProfilePage() {
  
  const pathname = usePathname();
  const { t } = useTranslation("common");
  
  return (
    <>
      Profile page
    </>
  );
}

export default ProfilePage;
