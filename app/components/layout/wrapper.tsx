import dynamic from "next/dynamic";
import type { WrapperProps } from "@/types/layout";

const Header = dynamic(() => import("./header"));
const Footer = dynamic(() => import("./footer"));

export default function Wrapper({ children }: WrapperProps) {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
