import React, { useState } from "react";
import CategorySidebar from "../../components/productcategoryComponent/CategorySidebar";
import Nav from "../../components/Nav";
import Allproduct from "../../components/productcategoryComponent/Allproduct";

function Page() {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white max-w-full">
      {/* Global CSS to hide all scrollbars */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        *::-webkit-scrollbar { display: none !important; }
        * { -ms-overflow-style: none !important; scrollbar-width: none !important; }
      `,
        }}
      />

      <Nav setIsLoginOpen={setIsLoginOpen} />

      <div className="flex flex-1 overflow-hidden">
        <CategorySidebar />
        <Allproduct />
      </div>
    </div>
  );
}

export default Page;
