// import Footer15 from "@/components/footers/Footer15";
// import Header1 from "@/components/headers/Header1";
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
        <div className="page-content">
          <div
            className="section-full dz_error-405 content-inner overlay-black-dark"
            style={{
              backgroundImage: "url(/images/background/bg1.jpg)",
              backgroundPosition: "50% 50%",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5 text-center text-gray m-tb30">
                  <div className="dz_error">403</div>
                </div>
                <div className="col-lg-7 m-b30">
                  <h2 className="error-head text-gray">
                    Something went wrong !
                  </h2>
                  <p className="font-16 text-gray">
                    We are sorry but it appears that the page you are looking
                    for could not be found. We are working on it and we will get
                    it fixed as soon as possible.
                  </p>
                  <div className="dlab-divider bg-gray-dark" />
                  <p className="text-gray">
                    You can go back to the Main Page by clicking the button.
                  </p>
                  <div className="widget">
                    <div className="subscribe-form p-a0 col-lg-6 col-md-6">
                      <div>
                        <div className="input-group">
                          <input
                            name="text"
                            className="form-control radius-no"
                            placeholder="Search For Pages"
                            type="text"
                          />
                          <span className="input-group-btn">
                            <button
                              type="submit"
                              className="site-button radius-no"
                            >
                              SEARCH
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer15 /> */}
      </div>
    </>
  );
}
