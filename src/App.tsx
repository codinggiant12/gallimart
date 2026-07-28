import "./App.css";
import CategorySection from "./components/commonComponents/CategorySection";
import Footer from "./components/commonComponents/Footer";
// import ForgetPassword from "./components/commonComponents/ForgetPassword";
// import Login from "./components/commonComponents/Login";
// import OTPLogin from "./components/commonComponents/OTPLogin";
// import Register from "./components/commonComponents/Register";
import ActiveVendors from "./components/homecomponent/ActiveVendors";
import FlashDeals from "./components/homecomponent/FlashDeals";
import Footer1 from "./components/homecomponent/footer1";
import HeroSection from "./components/homecomponent/HeroSection";
import ProductSection from "./components/homecomponent/ProductSection";
import Reviews from "./components/homecomponent/Reviews";
import VendorRedirect from "./components/homecomponent/VendorRedirect";
import Nav from "./components/Nav";
import VendorDashboard from "./components/vendorcomponent/VendorDashboard";
import VendorHeader from "./components/vendorcomponent/VendorHeader";
import VendorHub from "./components/vendorcomponent/VendorHub";

import VendorLogin from "./components/vendorcomponent/VendorLogin";
import AppRoutes from "./routes/AppRoutes";
// import Cart from "./pages/cart/page";

function App() {
  return (
    <div className="border w-screen">
      <AppRoutes />

      {/* <Cart />
      <Login />
      <OTPLogin />
      <Register />
      <ForgetPassword /> */}

      {/* <VendorLogin />
      <VendorHeader />
      <VendorDashboard />
      <VendorHub /> */}

      {/* <Footer /> */}
      <Footer1 />
    </div>
  );
}

export default App;
