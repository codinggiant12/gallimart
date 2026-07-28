import React, { useState } from "react";
import { useParams } from "react-router";
import Register from "../../components/commonComponents/Register";
import Nav from "../../components/Nav";
import { AuthRouteType } from "../../../enum/authtype";

function page() {
  const { type } = useParams();
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  return (
    <>
      <Nav setIsLoginOpen={setIsLoginOpen} />
      <div className="flex justify-center h-screen mt-28 ">
        <div className="">
          <Register />
        </div>
      </div>
    </>
  );
}

export default page;
