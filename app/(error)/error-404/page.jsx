import Link from "next/link";
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
        <div
          className="dlab-bnr-inr full-height overlay-black-dark"
          style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="row max-w700 dlab-bnr-inr-entry dz_error-404-area align-m dz_error-404 text-white m-auto">
              <div className="col-lg-4 col-md-4 m-tb30">
                <div className="bg-primary dz_error">404</div>
              </div>
              <div className="col-lg-8 col-md-8 m-b30 text-left">
                <h2 className="error-head">Something went wrong !</h2>
                <p className="font-16">
                  We are sorry but it appears that the page you are looking for
                  could not be found. We are working on it and we will get it
                  fixed as soon as possible.
                </p>
                <p className="font-16">
                  You can go back to the Main Page by clicking the button.
                </p>
                <Link href={`/`} className="site-button">
                  Go To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
