import type { GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import AboutSection from "@/sections/AboutSection";
import Footer from "@/components/Footer";
import KnowMoreSection from "@/sections/KnowMoreSection";


export const meta = {
  description:
    "Aryan Raj — Backend & AI Engineer. Remote-first SDE at MovableInk architecting Agentic AI frameworks. Open-source contributor. Self-hosted homelab enthusiast. B.Tech CSE, GEC Jhalawar.",
  author: "Aryan Raj",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/og.png`,
  siteName: "Aryan Raj",
  imageAlt: "Aryan Raj portfolio website",
};

const Home: NextPage = () => {
  return (
    <>
      <AppHead
        title="Aryan Raj — Backend & AI Engineer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>heyaryan.in</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-darkred selection:text-bglight dark:selection:bg-lightred dark:selection:text-bgdark">
          <Header />
          <main id="main">
            <AboutSection homePage = {false}/>
            <KnowMoreSection />
          </main>
          <SocialLinks />
          <Footer />
        </div>
      </div>
    </>
  );
};


export default Home;
