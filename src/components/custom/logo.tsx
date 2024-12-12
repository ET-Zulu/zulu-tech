import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src={"/images/logo.png"}
        alt="Zulu Tech"
        width={125}
        height={125}
      />
    </div>
  );
};

export default Logo;
