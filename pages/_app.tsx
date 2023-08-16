import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LeftNavbar from "@/components/Navbar/LeftNavbar";
import TopNavbar from "@/components/Navbar/TopNavbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LeftNavbar />
      <TopNavbar />
      <Component {...pageProps} />
    </>
  );
}
