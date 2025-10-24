"use client";
import {
  contactLinks,
  homeItems
} from "@/data/menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Nav() {
  const pathname = usePathname();
  const isMenuActive = (menuMain) => {
    let isActive = false;
    if (menuMain.href && menuMain.href !== "#") {
      if (pathname.split("/")[1] == menuMain.href?.split("/")[1]) {
        isActive = true;
      }
    }
    menuMain.length &&
      menuMain.forEach((menu) => {
        if (menu.href && menu.href !== "#") {
          if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
            isActive = true;
          }
        }
        if (menu.links) {
          menu.links.forEach((el) => {
            if (el.href && el.href != "#") {
              if (pathname.split("/")[1] == el.href?.split("/")[1]) {
                isActive = true;
              }
            }
            if (el.links) {
              el.links.map((elm) => {
                if (elm.href && elm.href != "#") {
                  if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                    isActive = true;
                  }
                }
              });
            }
          });
        }
      });
    return isActive;
  };

  const [headerHeight, setHeaderHeight] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 991);
  const [menuOpen1, setMenuOpen1] = useState("");

  // Function to handle resizing
  const handleResize = () => {
    // Update screen width state
    setIsLargeScreen(window.innerWidth > 991);

    // Update header height state
    const headerElement = document.querySelector(".header");
    if (headerElement) {
      const newHeight = headerElement.offsetHeight;
      setHeaderHeight(newHeight);
    }
  };

  useEffect(() => {
    // Call handleResize on component mount
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  // Calculate the height for the mega-menu if large screen
  const megaMenuHeight = isLargeScreen
    ? `calc(100vh - ${headerHeight}px)`
    : "auto";

  return (
    <>
      <li
        className={` has-mega-menu homedemo ${
          menuOpen1 == "home" ? "open" : ""
        }  ${isMenuActive(homeItems) ? "active" : ""}`}
      >
        <a onClick={() => setMenuOpen1((pre) => (pre == "home" ? "" : "home"))}>
          Home
          <i className="fas fa-chevron-down" />
        </a>
      </li>
            <li
        className={` ${isMenuActive(contactLinks) ? "active" : ""} ${
          menuOpen1 == "technology" ? "open" : ""
        }  `}
      >
        <a
          onClick={() =>
            setMenuOpen1((pre) => (pre == "contact" ? "" : "contact"))
          }
        >
          Technology
          <i className="fas fa-chevron-down" />
        </a>
        </li>
                    <li
        className={` ${isMenuActive(contactLinks) ? "active" : ""} ${
          menuOpen1 == "solutions" ? "open" : ""
        }  `}
      >
        <a
          onClick={() =>
            setMenuOpen1((pre) => (pre == "contact" ? "" : "contact"))
          }
        >
          Solutions
          <i className="fas fa-chevron-down" />
        </a>
        </li>
                    <li
        className={` ${isMenuActive(contactLinks) ? "active" : ""} ${
          menuOpen1 == "about" ? "open" : ""
        }  `}
      >
        <a
          onClick={() =>
            setMenuOpen1((pre) => (pre == "contact" ? "" : "contact"))
          }
        >
          About
          <i className="fas fa-chevron-down" />
        </a>
        </li>
                    <li
        className={` ${isMenuActive(contactLinks) ? "active" : ""} ${
          menuOpen1 == "contactUs" ? "open" : ""
        }  `}
      >
        <a
          onClick={() =>
            setMenuOpen1((pre) => (pre == "contact" ? "" : "contact"))
          }
        >
          Contact Us
          <i className="fas fa-chevron-down" />
        </a>
        </li>
         </>
  );
}
