import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-green-600">
              Galli<span className="text-gray-800">Mart</span>
            </span>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Aapke pados ki dukan, ab aapke phone par. Shuddh aur taaza grocery
              ki fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Shopping</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-green-600">
                  Monthly Rashan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Daily Milk & Bread
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Personal Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Household Items
                </a>
              </li>
            </ul>
          </div>

          {/* Store Timing */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Store Timing</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex justify-between">
                <span>Mon - Sat:</span>
                <span className="font-medium">8:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium text-green-600">
                  9:00 AM - 1:00 PM
                </span>
              </li>
              <li className="mt-4 text-xs bg-green-100 text-green-800 p-2 rounded text-center">
                * Home delivery available till 9 PM
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Location</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex gap-2">
                <svg
                  className="w-5 h-5 text-green-600 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Shop No. 12, Main Market, <br />
                Near City Bank, Delhi - 110001
              </p>
              <p className="flex gap-2">
                <svg
                  className="w-5 h-5 text-green-600 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 98765 43210
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 Galli Mart Kirana Store. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
