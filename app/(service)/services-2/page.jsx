// import Footer15 from "@/components/footers/Footer15";
// import Header1 from "@/components/headers/Header1";

// import Banner2 from "@/components/service/Banner2";
// import Cta from "@/components/service/Cta";

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
    <>
      <div className="page-wraper  ">
        {/* <Header1 /> */}
        <div className="page-content bg-white">
          {/* <Banner2 /> */}
          <div className="content-block">
            {/* <Cta /> */}
            {/* <Service /> */}
          </div>
        </div>
        {/* <Footer15 /> */}
      </div>
    </>
  );
}
