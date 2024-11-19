import { usePathname, useRouter, useSearchParams } from "next/navigation";

export interface ClientRoutesModel {
  Admin: {
    SignIn: string;
    Overview: string;
    Salesman: string;
    Territory: string;
    Settings: string;
    AuthTest: string;
  };
}

export const ClientRoutes: ClientRoutesModel = {
  Admin: {
    SignIn: "/admin/signin",
    Overview: "/admin",
    Salesman: "/admin/salesman",
    Territory: "/admin/territory",
    Settings: "/admin/settings",
    AuthTest: "/admin/auth-test",
  },
};

export class RouteService {
  private router = useRouter();
  private pathname = usePathname();
  private searchParams = useSearchParams();

  constructor() {}
}
