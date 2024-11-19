import Navbar from "@/components/navbar/navbar";
import { ReactNode } from "react";
import Footer from "@/components/footer/footer";

async function UserPageFullLayout({ children, params: { locale } }: { children: ReactNode, params: { locale: string } }) {
  return (
    <>
      <div className="mx-4 md:mx-6">
        {children}
      </div>
      <SectionGap />
      <Footer />
    </>
  );
}

function SectionGap() {
  return (<span className="my-5 border border-transparent"></span>);
}

export default UserPageFullLayout;
