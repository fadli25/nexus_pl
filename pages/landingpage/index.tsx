import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header1 from "@/components/landingPage/TopHeader/Header1";
import Chains from "@/components/landingPage/TopHeader/chains";
import Header2 from "@/components/landingPage/Second Header/header2";
import Footer from "@/components/landingPage/Footer/footer";
import { DefaultSeo } from "next-seo";
const inter = Inter({ subsets: ["latin"] });
import TransitionEffect from "@/components/landingPage/transition";
import Navbar from "@/components/landingPage/Navbar/navbar";
export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <TransitionEffect />
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          description:
            "All in one web3 staffing and recruiting solutions platform.",
          url: "https://www.nexusweb3.io/", // Replace with your site's URL
          site_name: "Nexus",
          images: [
            {
              url: "https://cdn.discordapp.com/attachments/1085293900706627595/1135710968425492531/nexus.jpg",
              width: 1200,
              height: 1200,
              alt: "Nexus",
            },
          ],
        }}
      />

      <Head>
        <title>NEXUS</title>
      </Head>
      <Navbar />
      <Header1 />
      <Chains />
      <Header2 />
      <Footer />
    </div>
  );
}
