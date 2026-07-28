import React, { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";

// 1. Premium Lotus Logo Component (Matching design)
const LotusLogo = () => (
  <div className="relative inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-white border border-[#D4AF37]/30 shadow-inner">
    {/* Abstract geometric lotus petals */}
    <div className="absolute inset-2 border-2 border-[#D4AF37] opacity-60 rounded-[35%] rotate-45"></div>
    <div className="absolute inset-3 border-2 border-[#D4AF37] rounded-[30%] -rotate-12"></div>
    <div className="h-4 w-4 rounded-full bg-[#D4AF37] shadow"></div>
  </div>
);

// 2. Input Field Component with Icon
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: React.ElementType;
}

const InputField: React.FC<InputFieldProps> = ({ label, icon, ...props }) => {
  const IconComponent = icon;
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={props.id}
        className="text-sm font-semibold text-slate-700 tracking-tight"
      >
        {label}
      </label>
      <div className="relative flex items-center group">
        <div className="absolute left-4 h-5 w-5 text-slate-400 group-focus-within:text-[#D4AF37] transition-colors">
          <IconComponent className="h-full w-full" />
        </div>
        <input
          {...props}
          className="w-full rounded-2xl border border-slate-200 bg-[#FDFBF7] py-4 pl-12 pr-6 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/10 transition shadow-sm"
        />
      </div>
    </div>
  );
};

// 3. Social Login Button Component
interface SocialLoginProps {
  icon: React.ElementType;
  href: string;
  label: string;
}

const SocialLogin: React.FC<SocialLoginProps> = ({ icon, href, label }) => {
  const IconComponent = icon;
  return (
    <a
      href={href}
      aria-label={label}
      className="flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 text-slate-500 hover:border-[#D4AF37] hover:text-[#AA7C11] hover:bg-[#FDFBF7] transition-all shadow-sm active:scale-95"
    >
      <IconComponent className="h-5 w-5" />
    </a>
  );
};

// 4. Main Eventora Login Component
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const socialLinks = [
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with dynamic demo submission.");
    alert(
      "Thank you for logging in to Eventora! This is a secure dynamic demo.",
    );
  };

  return (
    <>
      {/* Subtle decorative background light gold radial glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#D4AF37]/5 via-white to-white blur-3xl opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#AA7C11]/5 via-white to-white blur-3xl opacity-60"
      />

      {/* LOGIN CARD */}
      <div className="relative z-10 mx-auto max-w-md space-y-10 rounded-[32px] bg-white p-10 md:p-12 shadow-[0_12px_60px_rgba(0,0,0,0.03)] border border-slate-100/70">
        {/* Brand & Header Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#FDFBF7] px-4 py-1.5 shadow-sm">
            <HiOutlineSparkles className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#AA7C11]">
              India's Premier Planning Platform
            </span>
          </div>
          <LotusLogo />
          <div className="space-y-1">
            <h1 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Eventora Login
            </h1>
            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              Access your dashboard to plan your perfect event effortlessly.
            </p>
          </div>
        </div>

        {/* LOGIN FORM */}
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Email Input */}
          <InputField
            id="email"
            type="email"
            label="Email Address"
            icon={FiMail}
            placeholder="e.g., sharma.rahul@gmail.com"
            required
          />

          {/* Password Input with Show/Hide toggle */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between gap-1">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-slate-700 tracking-tight"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#D4AF37] transition"
              >
                {showPassword ? (
                  <>
                    {" "}
                    <FiEyeOff className="h-3.5 w-3.5" /> Hide{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <FiEye className="h-3.5 w-3.5" /> Show{" "}
                  </>
                )}
              </button>
            </div>
            <div className="relative flex items-center group">
              <div className="absolute left-4 h-5 w-5 text-slate-400 group-focus-within:text-[#D4AF37] transition-colors">
                <FiLock className="h-full w-full" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Minimum 8 characters"
                required
                className="w-full rounded-2xl border border-slate-200 bg-[#FDFBF7] py-4 pl-12 pr-6 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/10 transition shadow-sm"
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                id="remember"
                className="h-4.5 w-4.5 rounded border-slate-300 text-[#D4AF37] focus:ring-[#D4AF37]/20 transition"
              />
              <label
                htmlFor="remember"
                className="text-sm text-slate-600 font-medium tracking-tight"
              >
                Remember Me
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-slate-500 font-medium hover:text-[#AA7C11] hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Premium Gold CTA Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] py-4 text-sm font-bold text-white shadow-xl hover:brightness-105 hover:shadow-[#D4AF37]/20 active:scale-[0.99] transition-all"
          >
            Secure Login
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center pt-2">
          <p className="text-sm text-slate-600 font-normal">
            New to Eventora?{" "}
            <a
              href="#"
              className="font-semibold text-slate-900 hover:text-[#AA7C11] hover:underline"
            >
              Sign Up Now
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import { RxCross2 } from "react-icons/rx";
// import { Link } from "react-router";
// import { AuthRouteType } from "../../../enum/authtype";
// import { loginWithPassword } from "../../../network/api/login/loginWithPassword.api";
// type LoginProps = {
//   setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   setIsLogComponent: React.Dispatch<React.SetStateAction<boolean>>;
// };
// interface LoginDataType {
//   email: string;
//   password: string;
// }
// interface LoginErrorType {
//   email?: string;
//   password?: string;
// }

// const Login: React.FC<LoginProps> = ({ setIsLoginOpen, setIsLogComponent }) => {
//   const [loginData, setLoginData] = useState<LoginDataType>({
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState<LoginErrorType>({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setLoginData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     const errorMessage = validate(name, value);
//     setErrors((prev) => ({
//       ...prev,
//       [name]: errorMessage,
//     }));
//   };
//   const submit = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     if (errors.email == "" && errors.password == "") {
//       const userDetails = await loginWithPassword.loginUser(loginData);
//       console.log(userDetails);
//     } else {
//       alert("please fill the correct details");
//     }
//   };

//   //validation
//   const validate = (name: string, value: string) => {
//     let error = "";

//     if (name === "email") {
//       if (!value) {
//         error = "Email is required";
//       } else if (!/^\S+@\S+\.\S+$/.test(value)) {
//         error = "Invalid email format";
//       }
//     }

//     if (name === "password") {
//       if (!value) {
//         error = "Password is required";
//       } else if (value.length < 6) {
//         error = "Password must be at least 6 characters";
//       }
//     }

//     return error;
//   };

//   return (
//     <>
//       {/* Login Card */}

//       {/* Top Header Section */}
//       <div className="bg-green-600 p-10 text-center text-white relative">
//         <button
//           onClick={() => setIsLoginOpen(false)}
//           className="absolute top-2 right-2 z-60 text-black"
//         >
//           <RxCross2 className="text-2xl font-bold" />
//         </button>
//         <div className="absolute top-0 right-0 p-4 opacity-10">
//           <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
//           </svg>
//         </div>
//         <h1 className="text-3xl font-black italic tracking-tighter">
//           Galli Mart
//         </h1>
//         <p className="text-green-100 text-sm font-medium mt-2 uppercase tracking-widest">
//           Login to your account
//         </p>
//       </div>

//       {/* Form Section */}
//       <div className="p-8 md:p-10">
//         <form className="space-y-6">
//           {/* Email Input */}
//           <div>
//             <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">
//               Email Address
//             </label>
//             <div className="relative">
//               <input
//                 type="email"
//                 name="email"
//                 value={loginData?.email}
//                 onChange={handleChange}
//                 placeholder="name@example.com"
//                 className="w-full bg-green-50/50 border text-black border-green-100 rounded-2xl py-4 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium"
//               />
//               <svg
//                 className="w-5 h-5 text-green-600 absolute left-4 top-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206"
//                 />
//               </svg>
//             </div>
//             {errors.email && (
//               <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//             )}
//           </div>

//           {/* Password Input */}
//           <div>
//             <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type="password"
//                 name="password"
//                 value={loginData?.password}
//                 onChange={handleChange}
//                 placeholder="••••••••"
//                 className="w-full bg-green-50/50 border text-black border-green-100 rounded-2xl py-4 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium"
//               />
//               <svg
//                 className="w-5 h-5 text-green-600 absolute left-4 top-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//                 />
//               </svg>
//             </div>
//             {errors.password && (
//               <p className="text-red-500 text-xs mt-1">{errors.password}</p>
//             )}
//             <div className="text-right mt-2">
//               <Link to={`/auth/${AuthRouteType.FORGOT_PASSWORD}`}>
//                 Forgot Password?
//               </Link>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             onClick={()=>submit}
//             className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl shadow-lg shadow-green-200 transition-all active:scale-95 uppercase tracking-widest text-sm"
//           >
//             Log In
//           </button>

//           <Link to={`/auth/${AuthRouteType.FORGOT_PASSWORD}`}>
//             <button className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl shadow-lg shadow-green-200 transition-all active:scale-95 uppercase tracking-widest text-sm">
//               Login With Otp{" "}
//             </button>
//           </Link>
//         </form>

//         {/* Social or Register Link */}
//         <div className="mt-8 text-center border-t border-gray-100 pt-8">
//           <p className="text-sm text-gray-500 font-medium">
//             Naye ho Galli Mart par? <br />
//             <Link to={`/auth/${AuthRouteType.REGISTER}`}>
//               Create an Account
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
