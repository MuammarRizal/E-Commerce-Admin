import Image from 'next/image';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="container-fluid w-full h-screen flex items-center justify-center">
        <div className="image-container w-[70%] h-screen">
          <Image
            width={500}
            height={500}
            alt="Muammar Rizal"
            src={'/images/banner_login.png'}
            className="bg-auth"
          />
        </div>
        <div className="auth-container w-[30%] h-screen flex justify-center items-center ">
          <div className="auth-content scale-125">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
