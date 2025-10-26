"use client";
import Image from "next/image";
import aotThumbnail from "../public/aot-thumbnail.png"

const StreamCard = () => {
  return (
    <>
      <div className="bg-[#0E0E10]">
        <Image
          className="h-45 w-75"
          src={aotThumbnail}
          alt="Attack on Titan Thumbnail"
        />
        <h1></h1>
      </div>
    </>
  );
};

export default StreamCard;
