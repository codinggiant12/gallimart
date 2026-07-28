import React from "react";
import {
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiTwitter,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

// Decorative Lotus Logo Component
const LotusLogo = () => (
  <div className="relative inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-white border border-[#D4AF37]/30 shadow-inner">
    {/* Abstract geometric lotus petals */}
    <div className="absolute inset-2 border-2 border-[#D4AF37] opacity-60 rounded-[35%] rotate-45"></div>
    <div className="absolute inset-3 border-2 border-[#D4AF37] rounded-[30%] -rotate-12"></div>
    <div className="h-4 w-4 rounded-full bg-[#D4AF37] shadow"></div>
  </div>
);

// Footer Column Component for Links
interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-serif font-bold text-slate-900 tracking-tight relative inline-block">
      {title}
      <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-[#D4AF37] rounded-full"></span>
    </h3>
    <ul className="space-y-2.5">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-sm text-slate-600 font-normal hover:text-[#AA7C11] hover:underline transition-colors duration-200"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const footerLinks = {
  quickLinks: [
    { label: "Venues", href: "#" },
    { label: "Packages", href: "#" },
    { label: "Event Plan", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  categories: [
    { label: "Wedding Venues", href: "#" },
    { label: "Banquet Halls", href: "#" },
    { label: "Birthday Venues", href: "#" },
    { label: "Corporate Events", href: "#" },
    { label: "Outdoor Venues", href: "#" },
  ],
  support: [
    { label: "Cancellation Policy", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
};

const socialLinks = [
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
];

export default function Footer1() {
  return (
    <footer className="relative bg-white font-sans overflow-hidden">
      {/* Subtle background decorative light gold radial glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#D4AF37]/5 via-white to-white blur-3xl opacity-60"
      />

      {/* MAIN FOOTER CONTENT */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10 border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <LotusLogo />
              <span className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
                Eventora
              </span>
            </div>

            <p className="text-sm text-slate-600 font-normal leading-relaxed max-w-md">
              Discover, compare, and book premium venues effortlessly for every
              milestone.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 text-slate-500 hover:border-[#D4AF37] hover:text-[#AA7C11] hover:bg-[#FDFBF7] transition-all shadow-sm active:scale-95"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:col-span-3 gap-8">
            <FooterColumn title="Quick Links" links={footerLinks.quickLinks} />
            <FooterColumn title="Categories" links={footerLinks.categories} />
            <FooterColumn title="Support" links={footerLinks.support} />
          </div>

          {/* Contact Information Column */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-serif font-bold text-slate-900 tracking-tight relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-[#D4AF37] rounded-full"></span>
            </h3>

            <div className="space-y-5 text-sm text-slate-700 pt-1">
              {[
                {
                  icon: FiPhone,
                  title: "Phone",
                  content: "+91 123455773337",
                  href: "tel:+91123455773337",
                },
                {
                  icon: FiMail,
                  title: "Email",
                  content: "eventora@gmail.com",
                  href: "mailto:eventora@gmail.com",
                },
                {
                  icon: FiMapPin,
                  title: "Location",
                  content: "Premium Office, 5th Floor,\nGold Tower, Mumbai",
                  href: "#",
                },
                {
                  icon: FiClock,
                  title: "Hours",
                  content: "Mon-Fri: 9am-6pm",
                  href: null,
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-[#D4AF37] border border-[#D4AF37]/20 shadow-inner">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400">
                        {item.title}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold text-slate-900 hover:text-[#AA7C11] whitespace-pre-line"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <span className="font-semibold text-slate-900 whitespace-pre-line">
                          {item.content}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LEGAL BAR */}
      <div className="relative z-10 bg-slate-950/95 py-6 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-300">
            <div className="order-2 sm:order-1 flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center sm:text-left">
              <span>© 2026 Eventora. All rights reserved.</span>
              <span className="hidden sm:inline text-slate-700">|</span>
              <span>Designed with ❤️ in India.</span>
            </div>

            {/* Legal Links */}
            <div className="order-1 sm:order-2 flex items-center gap-5">
              {[
                { label: "Privacy", href: "#" },
                { label: "Terms", href: "#" },
                { label: "Cookies", href: "#" },
              ].map((legal, index) => (
                <a
                  key={index}
                  href={legal.href}
                  className="hover:text-white transition-colors"
                >
                  {legal.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
