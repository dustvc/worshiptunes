"use client";

import React from "react";
import Image from "next/image";

interface SongInfoProps {
  title: string;
  artist: string;
  imageUrl: string;
}

const SongInfo: React.FC<SongInfoProps> = ({ title, artist, imageUrl }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-2xl border overflow-hidden shadow mb-4 w-full">
      <Image
        className="w-full sm:w-32 h-32 rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none object-cover"
        src={imageUrl}
        alt={`${title} Thumbnail`}
        width={1000}
        height={1000}
      />
      <div className="px-6 py-4 flex flex-col justify-center w-full">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{artist}</p>
      </div>
    </div>
  );
};

export default SongInfo;
