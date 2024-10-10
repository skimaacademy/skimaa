'use client'

import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Button } from "../ui/button";

interface UnavailableFeatureToastButtonProps {
  className?: string;
  buttonText: string;
}

export function UnavailableFeatureToastButton({ className, buttonText }: UnavailableFeatureToastButtonProps) {
  const { t } = useTranslation("common");

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = t("other.Feature Coming Soon");
    toast.success(message);
  };

  return (
    <Button className={className || ''} onClick={handleClick}>
      {buttonText} 
    </Button>
  );
}
