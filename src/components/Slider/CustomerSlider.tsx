"use client";

import React, { useRef, useEffect } from "react";
// Direct import from swiper for better tree-shaking
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// Import the useIsMobileOrTablet hook
import { useIsMobileOrTablet } from "@hooks/use-mobile";

// Define configuration constants
const SWIPER_CONFIG = {
  SPEED: 600,
  SPACE_BETWEEN: {
    DEFAULT: 25,
    MOBILE: 15,
    TABLET: 20,
  },
  BREAKPOINTS: {
    MOBILE_SM: 320,
    MOBILE: 480,
    TABLET_SM: 640,
    TABLET: 768,
    DESKTOP: 1024,
  },
};

// Define product types for better type safety
interface Product {
  id: number;
  name: string;
  productCode: string;
  image: string;
}

// Define products array
const FEATURED_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Congo Dining Table",
    productCode: "Product code: CONGODIN80-RC",
    image: "/images/Template/Card/Product-highlight/Table.png",
  },
  {
    id: 2,
    name: "Sotho Dining Chair",
    productCode: "Product code: SOTHODC-RC",
    image: "/images/Template/Card/Product-highlight/Chair.png",
  },
  {
    id: 3,
    name: "Luggage Rack 1",
    productCode: "Product code: LUGRACK1",
    image: "/images/Template/Card/Product-highlight/Luggage.png",
  },
  {
    id: 4,
    name: "Astor Wall Lamp Ant Black",
    productCode: "Product code: ASTORWLAB",
    image: "/images/Template/Card/Product-highlight/Lamp.png",
  },
];

const CustomerSlider: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLDivElement>(null);
  const nextBtnRef = useRef<HTMLDivElement>(null);
  // Use the hook to determine if we're on mobile or tablet
  const isMobileOrTablet = useIsMobileOrTablet();

  useEffect(() => {
    if (!swiperRef.current || !prevBtnRef.current || !nextBtnRef.current)
      return;

    const swiper = new Swiper(swiperRef.current, {
      modules: [Navigation],
      slidesPerView: "auto",
      spaceBetween: SWIPER_CONFIG.SPACE_BETWEEN.DEFAULT,
      grabCursor: true,
      centeredSlides: false,
      loop: false,
      slideToClickedSlide: true,
      watchOverflow: true,
      simulateTouch: true,
      touchRatio: 1,
      resistance: true,
      resistanceRatio: 0.2, // Lower resistance for better end-scrolling
      watchSlidesProgress: true,
      speed: SWIPER_CONFIG.SPEED,
      mousewheel: { forceToAxis: true, sensitivity: 1 },
      navigation: {
        prevEl: prevBtnRef.current,
        nextEl: nextBtnRef.current,
      },
      breakpoints: {
        [SWIPER_CONFIG.BREAKPOINTS.MOBILE_SM]: {
          slidesPerView: 1.1,
          centeredSlides: true,
          spaceBetween: SWIPER_CONFIG.SPACE_BETWEEN.MOBILE,
        },
        [SWIPER_CONFIG.BREAKPOINTS.MOBILE]: {
          slidesPerView: 1.1,
          centeredSlides: false,
          spaceBetween: SWIPER_CONFIG.SPACE_BETWEEN.MOBILE,
        },
        [SWIPER_CONFIG.BREAKPOINTS.TABLET_SM]: {
          slidesPerView: 1.8, // Better view for iPad Mini
          centeredSlides: false,
          spaceBetween: SWIPER_CONFIG.SPACE_BETWEEN.TABLET,
        },
        [SWIPER_CONFIG.BREAKPOINTS.TABLET]: {
          slidesPerView: 2.2, // Reduced from 3 to ensure better sliding
          spaceBetween: SWIPER_CONFIG.SPACE_BETWEEN.TABLET,
        },
        [SWIPER_CONFIG.BREAKPOINTS.DESKTOP]: {
          slidesPerView: 4,
          spaceBetween: SWIPER_CONFIG.SPACE_BETWEEN.DEFAULT,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="customers-slider">
      {isMobileOrTablet ? (
        // Mobile/Tablet Layout (vertical header with full-width slider)
        <>
          <div className="slider-header slider-header--vertical">
            <p className="slider-browse">Browse through</p>
            <h3 className="slider-title">CUSTOMERS FAVORITES</h3>
            <p className="slider-subtitle">and get inspired</p>
          </div>
          <div className="slider-main slider-main--mobile">
            <div ref={swiperRef} className="swiper">
              <div className="swiper-wrapper">
                {FEATURED_PRODUCTS.map((product) => (
                  <div key={product.id} className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card-image">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="product-card-content">
                        <h4 className="product-card-title">{product.name}</h4>
                        <p className="product-card-price">
                          {product.productCode}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation controls positioned at bottom for mobile */}
            <div className="slider-navigation-mobile">
              <div
                className="slider-nav-button slider-nav-prev"
                ref={prevBtnRef}
              >
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
              </div>
              <div
                className="slider-nav-button slider-nav-next"
                ref={nextBtnRef}
              >
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
              </div>
            </div>
          </div>
        </>
      ) : (
        // Desktop Layout (horizontal header with integrated controls)
        <>
          <div className="slider-header-row">
            <div className="slider-nav-button slider-nav-prev" ref={prevBtnRef}>
              <svg
                width="24"
                height="24"
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
            </div>
            <div className="slider-header slider-header--horizontal">
              <p className="slider-browse">Browse through</p>
              <h3 className="slider-title">CUSTOMERS FAVORITES</h3>
              <p className="slider-subtitle">and get inspired</p>
            </div>
            <div className="slider-nav-button slider-nav-next" ref={nextBtnRef}>
              <svg
                width="24"
                height="24"
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
            </div>
          </div>
          <div className="slider-main">
            <div ref={swiperRef} className="swiper">
              <div className="swiper-wrapper">
                {FEATURED_PRODUCTS.map((product) => (
                  <div key={product.id} className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card-image">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="product-card-content">
                        <h4 className="product-card-title">{product.name}</h4>
                        <p className="product-card-code">
                          {product.productCode}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default CustomerSlider;
