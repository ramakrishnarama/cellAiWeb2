import Footer11 from "@/components/footers/Footer11";
import Header11 from "@/components/headers/Header11";
import About from "@/components/homes/home-11/About";
import Blogs from "@/components/homes/home-11/Blogs";
import Cta from "@/components/homes/home-11/Cta";
import Cta2 from "@/components/homes/home-11/Cta2";
import Hero from "@/components/homes/home-11/Hero";
import ProjectGallery from "@/components/homes/home-11/ProjectGallery";
import Services from "@/components/homes/home-11/Services";
import Team from "@/components/homes/home-11/Team";
import Testimonials from "@/components/homes/home-11/Testimonials";
import React from "react";

export const metadata = {
  title: "Cell AI | Battery Intelligence & Digital Twin for EVs & IoT",
  description:
    "Cell AI revolutionizes EV and IoT batteries with advanced SOC/SOH estimation, digital twins, and scalable BMS for energy storage.",
  keywords: [
    "battery intelligence",
    "BMS software",
    "digital twin battery",
    "SOC estimation",
    "SOH estimation",
    "EV battery monitoring",
    "IoT energy storage",
    "battery lifetime prediction",
  ],
  openGraph: {
    title: "Cell AI | Battery Intelligence for EVs & IoT",
    description:
      "Next-gen battery intelligence — SOC/SOH estimation, model-based BMS, and digital twins for EVs and IoT.",
    url: "https://www.cellai.in",
    siteName: "Cell AI",
    images: [
      {
        url: "https://www.cellai.in/images/logo/cellAi.svg",
        width: 800,
        height: 800,
        alt: "Cell AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_handle", // if you have Twitter
    title: "Cell AI | Battery Intelligence & Digital Twin",
    description:
      "Scalable BMS, SOC/SOH estimation, and battery digital twins for EVs, IoT, and energy storage.",
    images: ["https://www.cellai.in/images/logo/cellAi.svg"],
  },
  icons: {
    icon: "/images/logo/cellAi.svg",
  },
};
export default function page() {
  return (
    <div className="page-wraper roboto-condensed  ">
      <Header11 />
      <Hero />
      <div className="page-content bg-white">
        <div className="content-block">
          <Cta />
          <Services />
          <ProjectGallery />
          <About />
          <Cta2 />
          <Team />
          <Testimonials />
          <Blogs />
        </div>
      </div>
      <Footer11 />
    </div>
  );
}
