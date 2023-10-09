import LeftNavbar from "@/components/Navbar/LeftNavbar";
import TopNavbar from "@/components/Navbar/TopNavbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import dynamic from "next/dynamic";

const WalletProvider: any = dynamic(
  () => import("../components/WalletProvider"),
  {
    ssr: false,
  }
);


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WalletProvider>
      <ToastContainer theme="dark" />
      <LeftNavbar />
      <TopNavbar />
      <Component {...pageProps} />
      </WalletProvider>
    </>
  );
}
