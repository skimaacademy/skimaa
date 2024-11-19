'use client'

import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../ui/dropdown-menu";
import SkimaaFullLogo from "../../logo/skimaa-full-logo";
import SkimaaLogo from "../../logo/skimaa-logo";
import { ThemeToggler } from "../../ThemeProvider/theme-toggler";
import { LocaleToggler } from "../../LocaleProvider/locale-togger";
import { useTranslation } from "react-i18next";
import { refineLocalePrefixForRoute, refineRoutePath } from "@/i18nConfig";
import { UnavailableFeatureToastButton } from "../../button/unavailable-feature-toast-button";
import { NavLink, NavLinksWithName } from "@/constants/global-constants";

export type GeneralNavbarProps = {
  navLinks: NavLink[];
};

export default function PublicNavbar() {

  const pathname = usePathname();
  const { i18n } = useTranslation();
  const { t } = useTranslation("common");
  const currentLocale = i18n.language;

  return (
    <div className="md:sticky md:top-0 flex py-1 items-center gap-4 border-b bg-background z-[50] min-h-[4rem]">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 w-full">
        <div className="w-[110px]">
          <SkimaaFullLogo height={24} />
        </div>

        {NavLinksWithName.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`${ pathname === refineLocalePrefixForRoute(currentLocale) + refineRoutePath(item.href, currentLocale)
              ? "text-primary"
              : "text-muted-foreground"
              } transition-colors hover:text-foreground text-base border border-transparent mt-[5px]`}
          >
            {item.name}
            {/* {t('navigation.' + item.name)} */}
          </Link>
        ))}
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="">
          <nav className="grid gap-6 text-lg font-medium">
          <SkimaaLogo height={26} />

            {NavLinksWithName.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${ pathname === refineLocalePrefixForRoute(currentLocale) + refineRoutePath(item.href, currentLocale)
                  ? "text-primary"
                  : "text-muted-foreground"
                  } transition-colors hover:text-foreground text-base`}
                aria-current={pathname === refineLocalePrefixForRoute(currentLocale) + refineRoutePath(item.href, currentLocale) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center w-full justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">

        <div>
          <LocaleToggler />
        </div>

        <div>
          <ThemeToggler />
        </div>

        <Button asChild>
          <Link href="/signin">Sign In</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>

        {/* <Button onClick={willBeAvailableSoon}>Contact Us</Button> */}
        {/* <UnavailableFeatureToastButton buttonText="Contact Us" /> */}

        {/* <div>
          <NotificationSystem></NotificationSystem>
        </div> */}

        {/* <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                {context?.userData && (
                  <ReactAvatar
                    size="28"
                    src={`${ImageApi}/${context?.userData?.picture}`}
                    round={true}
                    name={context?.userData?.name}
                    email={context?.userData?.email}
                    alt={context?.userData?.name}
                    className="object-cover"
                  />
                )}
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col font-normal">
                  <span>{context?.userData?.name}</span>
                  <span>{context?.userData?.email}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={goToSetting}>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}
      </div>
    </div>
  );
}