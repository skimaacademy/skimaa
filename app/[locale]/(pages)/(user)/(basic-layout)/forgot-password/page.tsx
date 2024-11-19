'use client'

import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

function ForgotPasswordPage() {
  
  const pathname = usePathname();
  const { t } = useTranslation("common");
  
  return (
    <>
      Forgot Password
    </>
  );
}

export default ForgotPasswordPage;
