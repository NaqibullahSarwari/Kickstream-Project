import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-center">
      <button className="text-white font-semibold text-xs sm:text-sm bg-[#34343B] hover:bg-[#46464f] rounded-3xl h-8 sm:h-9 px-3 sm:px-4 md:px-6 transition-colors">
        <span className="hidden sm:inline">Register</span>
        <span className="sm:hidden">Sign Up</span>
      </button>
    </div>
  );
};

export default Register;