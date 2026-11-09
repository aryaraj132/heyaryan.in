import type { GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";


export const meta = {
  description:
    "Aryan Raj — Backend & AI Engineer at MovableInk. Building Agentic AI frameworks, distributed systems, and open-source tools. Open-source contributor to the A2A framework. Previously slashed cloud costs by $50K+ at Mailmodo.",
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
          <SkipToMain />
          <Header page="index" />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};


export default Home;
