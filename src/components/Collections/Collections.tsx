"use client";

import React, { useState, useRef, useEffect } from "react";
import { useIsMobileOrTablet } from "@hooks/use-mobile";
// Direct import from swiper for better tree-shaking
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Collections: React.FC = () => {
  const [activeTab, setActiveTab] = useState("ARTISAN");
  const navSwiperRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLDivElement>(null);
  const nextBtnRef = useRef<HTMLDivElement>(null);
  const isMobileOrTablet = useIsMobileOrTablet();

  // Extracted collection data to a constant
  const COLLECTIONS = [
    "RATTAN",
    "SOSIS",
    "LUMINOUS",
    "ARTISAN",
    "MARBLE",
    "AMAZON",
    "INDESIMONIS",
  ] as const;

  // Extracted the collection name to a typed constant
  const FEATURED_COLLECTION = "ARTISAN";

  const handleTabClick = (collection: string) => {
    setActiveTab(collection);
  };

  // Function to navigate collections (direction: 1 for next, -1 for previous)
  const handleCollectionNavigation = (direction: number) => {
    const currentIndex = COLLECTIONS.findIndex(
      (collection) => collection === activeTab
    );
    const newIndex =
      (currentIndex + direction + COLLECTIONS.length) % COLLECTIONS.length;
    setActiveTab(COLLECTIONS[newIndex]);
  };

  // Arrow SVG components to avoid duplication
  const PrevArrowSvg = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 19L8 12L15 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const NextArrowSvg = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5L16 12L9 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Initialize the swiper
  useEffect(() => {
    if (!navSwiperRef.current || !prevBtnRef.current || !nextBtnRef.current)
      return;

    const initialActiveIndex = COLLECTIONS.findIndex(
      (collection) => collection === activeTab
    );

    const swiper = new Swiper(navSwiperRef.current, {
      modules: [Navigation],
      slidesPerView: "auto",
      spaceBetween: 0,
      grabCursor: false, // Disable grab cursor to reduce accidental sliding
      centeredSlides: false,
      loop: false,
      slideToClickedSlide: false, // Disable auto sliding on click
      watchOverflow: true,
      simulateTouch: false, // Disable simulated touch events
      navigation: {
        prevEl: prevBtnRef.current,
        nextEl: nextBtnRef.current,
      },
      initialSlide: initialActiveIndex,
      touchRatio: 0.2, // Reduce touch sensitivity dramatically
      mousewheel: { forceToAxis: true, sensitivity: 0.2 }, // Reduce mousewheel sensitivity
      resistance: true,
      watchSlidesProgress: true,
      resistanceRatio: 0.8, // Higher resistance to minimize sliding
      breakpoints: {
        320: {
          spaceBetween: 0,
        },
        768: {
          spaceBetween: 0,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="collections">
      <div className="container">
        <h2 className="collections-title">EXPLORE OUR COLLECTIONS</h2>
        <div className="collections-nav-container">
          <div className="collections-nav swiper" ref={navSwiperRef}>
            <div className="swiper-wrapper">
              {COLLECTIONS.map((collection) => (
                <div
                  key={collection}
                  className={`collections-nav-item swiper-slide ${
                    activeTab === collection ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(collection)}
                >
                  {collection}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="collections-grid position-relative">
          {!isMobileOrTablet && (
            <div ref={prevBtnRef}>
              <button
                className="collections-nav-arrow collections-grid-nav-prev"
                onClick={() => handleCollectionNavigation(-1)}
                aria-label="Previous collection"
              >
                <PrevArrowSvg />
              </button>
            </div>
          )}
          <div className="row">
            <div className="col-7 collections-grid-item">
              <img src="/images/Template/Lamp.png" alt="Collection Image 1" />
            </div>
            <div className="col-5 collections-grid-item">
              <img src="/images/Template/Sofa.png" alt="Collection Image 2" />
            </div>
          </div>
          <div className="row">
            <div className="col-5 collections-grid-item">
              <img
                src="/images/Template/Sofa-Light.png"
                alt="Collection Image 3"
              />
            </div>
            <div className="col-7">
              <div className="collections-grid-item">
                <img
                  src="/images/Template/Sofa-2.png"
                  alt="Collection Image 4"
                />
                <div className="collection-feature">
                  <h3>{FEATURED_COLLECTION}</h3>
                  <p>CRAFTED FOR HOSPITALITY, RETAIL AND PROJECTS</p>
                  {!isMobileOrTablet && (
                    <p className="description">
                      At Versmissen, we specialize in designing and developing
                      complete interior collections, catering to a global
                      market. Our focus spans the hospitality, retail, and
                      project sectors, with clients ranging from hotels and
                      restaurants to interior shops, architects, and stylists.
                    </p>
                  )}
                  <button className="btn btn-primary">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
          {!isMobileOrTablet && (
            <div ref={nextBtnRef}>
              <button
                className="collections-nav-arrow collections-grid-nav-next"
                onClick={() => handleCollectionNavigation(1)}
                aria-label="Next collection"
              >
                <NextArrowSvg />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Collections;
