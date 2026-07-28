import React, { useState } from "react";
import CategorySection from "../../components/commonComponents/CategorySection";
import HeroSection from "../../components/homecomponent/HeroSection";
import ActiveVendors from "../../components/homecomponent/ActiveVendors";
import ProductSection from "../../components/homecomponent/ProductSection";
import FlashDeals from "../../components/homecomponent/FlashDeals";
import Reviews from "../../components/homecomponent/Reviews";
import VendorRedirect from "../../components/homecomponent/VendorRedirect";
import Nav from "../../components/Nav";
import Login from "../../components/commonComponents/Login";
import AuthComponent from "../../components/commonComponents/AuthComponent";
import StatsSection from "../../components/homecomponent/StatsSection";
import BrowseEventsSection from "../../components/homecomponent/BrowseEventsSection";
import VenueType from "../../components/homecomponent/VenueType";
import TestimonialCard from "../../components/homecomponent/TestimonialCard";
import EventoraReviewsPage from "../../components/homecomponent/EventoraReviewsPage";

function page() {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  return (
    <div className="relative w-screen overflow-x-hidden">
      <Nav setIsLoginOpen={setIsLoginOpen} />
      {/* <CategorySection /> */}
      <HeroSection />
      <StatsSection />
      <BrowseEventsSection />
      <VenueType />
      <EventoraReviewsPage />

      {/* <ActiveVendors /> */}
      {/* <ProductSection /> */}
      {/* <FlashDeals /> */}
      {/* <Reviews /> */}
      {/* <VendorRedirect /> */}
      {isLoginOpen && (
        <div
          onClick={() => setIsLoginOpen(false)}
          className=" fixed inset-0 bg-black/60 z-50 items-center justify-center"
        >
          {/* <Login  /> */}
          <AuthComponent setIsLoginOpen={setIsLoginOpen} />
        </div>
      )}
    </div>
  );
}

export default page;
