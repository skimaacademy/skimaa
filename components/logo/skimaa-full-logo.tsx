'use client'

import { useTheme } from "next-themes"
import Image from 'next/image';
import SkimaaLogoFull from 'images/logo/Skimaa Branding Logo - Full.png';
import SkimaaLogoFullDarkTheme from 'images/logo/Skimaa Branding Logo - Full - Dark Theme.png';
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";

interface SkimaaFullLogoProps {
  height?: number;
  className?: string;
}

const SkimaaFullLogo: React.FC<SkimaaFullLogoProps> = ({ height = 24, className = '' }) => {
  const { theme } = useTheme();
  const original_width = 1370;
  const original_height = 307;
  const width = (original_width / original_height) * height

  const [logoSrc, setLogoSrc] = useState(SkimaaLogoFull);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (theme === 'dark') {
      setLogoSrc(SkimaaLogoFullDarkTheme);
    } else {
      setLogoSrc(SkimaaLogoFull);
    }
  }, [theme]);

  return (
    <Link href="/" className={className}>
      {isLoading && (
        <Skeleton className={`bg-muted-foreground/20`} style={{ width: `${width}px`, height: `${height}px` }} />
      )}
      <Image
        className={isLoading ? "invisible w-0 h-0" : "visible"}
        src={logoSrc}
        height={height}
        alt="Skimaa Logo"
        onLoadingComplete={() => {
          setIsLoading(false);
        }}
      />
    </Link>
  );
};

export default SkimaaFullLogo;
