import React, { useState } from "react";

import Login from "./Login";
import OTPLogin from "./OTPLogin";
import Register from "./Register";
import ForgetPassword from "./ForgetPassword";

type LoginProps = {
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthComponent: React.FC<LoginProps> = ({ setIsLoginOpen }) => {
  console.log(setIsLoginOpen);
  // const [authComponentName, setAuthComponentName] = useState<auth>(
  //   auth.LOGINPASSWORD,
  // );
  // const ActiveComponent = authComponentMap[authComponentName];
  const [isLogComponent, setIsLogComponent] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-green-50/30 flex items-center justify-center p-4">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl shadow-green-900/5 border border-green-100 overflow-hidden"
      >
        {isLogComponent ? (
          <Login
            setIsLogComponent={setIsLogComponent}
            setIsLoginOpen={setIsLoginOpen}
          />
        ) : (
          <OTPLogin
            setIsLogComponent={setIsLogComponent}
            setIsLoginOpen={setIsLoginOpen}
          />
        )}
      </div>
    </div>
  );
};

export default AuthComponent;
