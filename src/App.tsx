import "./App.css";
import CategorySection from "./components/commonComponents/CategorySection";
import Footer from "./components/commonComponents/Footer";
// import ForgetPassword from "./components/commonComponents/ForgetPassword";
// import Login from "./components/commonComponents/Login";
// import OTPLogin from "./components/commonComponents/OTPLogin";
// import Register from "./components/commonComponents/Register";
import ActiveVendors from "./components/homecomponent/ActiveVendors";
import FlashDeals from "./components/homecomponent/FlashDeals";
import HeroSection from "./components/homecomponent/HeroSection";
import ProductSection from "./components/homecomponent/ProductSection";
import Reviews from "./components/homecomponent/Reviews";
import VendorRedirect from "./components/homecomponent/VendorRedirect";
import Nav from "./components/Nav";
// import Cart from "./pages/cart/page";

function App() {
  return (
    <div className="border w-screen">
      <Nav />
      <CategorySection />
      <HeroSection />
      <ActiveVendors />
      <ProductSection />
      <FlashDeals />
      <Reviews />
      {/* <Cart />
      <Login />
      <OTPLogin />
      <Register />
      <ForgetPassword /> */}
      <VendorRedirect />
      <Footer />
      <div>i am Anubhav chaurasiya </div>
    </div>
  );
}

export default App;
